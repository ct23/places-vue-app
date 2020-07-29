<template>
  <div class="placesIndex">
    <h1>{{ message }}</h1>
    <!-- Map -->
    <div id="map"></div>

    <!-- User location input -->
    <div>
      <form v-on:submit.prevent="geocode()">
        <!-- <input type="text" placeholder="User longitude" v-model="startingLng">
        <input type="text" placeholder="User latitude" v-model="startingLat"> -->
        <select name="cats" id="cats" v-model="selectedCat">
          <option value="">All Categories</option>
          <option v-for="category in categories">{{ category.name }}</option>
        </select>
        <input type="text" placeholder="User address search" v-model="searchQuery">
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>


    <!-- Category filter -->
    <div>
      <form>
        <!-- <select name="cats" id="cats" v-model="selectedCat">
          <option value="">All Categories</option>
          <option v-for="category in categories">{{ category.name }}</option>
        </select> -->
      </form>
    </div>

    <!-- Places list -->
    <ol>
      <!-- Orders by distance based on user input address, filters by category input -->
      <li v-for="place in orderBy(filterBy(places, selectedCat, 'category'), 'distance')" :key="place.id">
        <router-link :to="`/places/${place.id}`"><h4>{{ place.name }}</h4></router-link>
        <span v-on:click="toggleFavorite(place)">Favorited: {{ place.is_favorite }}</span><br>
        Bar: {{ place.bar }}<br>
        Category: {{ place.category }}<br>
        <img class="place_thumbnail" :src="place.image_url" alt="`place.name`">
        
      </li>
    </ol>
  </div>
</template>

<style>
.place_thumbnail {
  height: 200px;
}
.map {
  height: 30em;
  width: 30em;
}
</style>

<script>
/* global mapboxgl */
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Welcome to Places index!",
      places: {},
      selectedCat: "",
      categories: [],
      startingLat: "41.94353485107422",
      startingLng: "-87.65628814697266",
      searchQuery: "",
      params: {},
    };
  },
  created: function () {
    axios.get("/api/places").then((response) => {
      this.places = response.data;
      console.log(response.data);

      mapboxgl.accessToken = process.env.VUE_APP_MAP_KEY;
      var map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [-87.620605, 41.875275],
        zoom: 12,
      });
      // For each place
      this.places.forEach((place) => {
        var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<router-link to="/places/${place.id}">${place.name}</router-link><br><a href="/places/${place.id}">${place.name}</router-link>`
        );
        var marker = new mapboxgl.Marker()
          .setLngLat([place.lon, place.lat])
          .setPopup(popup)
          .addTo(map);
      });
    });
    axios.get("/api/categories").then((response) => {
      this.categories = response.data;
      console.log(response.data);
    });
  },
  methods: {
    toggleFavorite: function (place) {
      console.log(place);
      // Check whether user is logged in
      if (this.$parent.isLoggedIn()) {
        // If user logged in, check whether place is already a favorite
        if (place.is_favorite === true) {
          console.log("Place is a favorite id " + place.favorite_id);
          axios
            .delete(`/api/favorites/${place.favorite_id}`)
            .then(
              console.log("Favorite deleted"),
              (place.is_favorite = false),
              (place.favorite_id = null)
            );
        } else {
          console.log("Place is not a favorite");
          this.params = {
            user_id: this.$parent.getUserId(),
            place_id: place.id,
          };
          axios.post("/api/favorites", this.params).then((response) => {
            console.log("Place favorited");
            place.is_favorite = true;
            place.favorite_id = response.data.id;
          });
        }
      } else {
        // If user is not logged in, redirect to login page
        this.$router.push("/login");
      }
    },
    calcDistance: function (lon1, lat1, lon2, lat2) {
      var R = 6371; // Radius of the earth in km
      var dLat = this.toRad(lat2 - lat1); // Javascript functions in radians
      var dLon = this.toRad(lon2 - lon1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRad(lat1)) *
          Math.cos(this.toRad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km

      return d;
    },
    /** Converts numeric degrees to radians */
    toRad: function (number) {
      return (number * Math.PI) / 180;
    },
    geocode: function () {
      // Handle cases when search query is left blank:
      if (this.searchQuery === "") {
        this.searchQuery = "Chicago, IL";
      }
      axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.searchQuery}.json?access_token=${process.env.VUE_APP_MAP_KEY}`
        )
        .then((response) => {
          this.placeSearchObject = response.data;
          console.log(this.placeSearchObject);
          // this.startingLng = this.placeSearchObject.features[0].geometry.coordinates[0];
          this.startingLng = response.data.features[0].geometry.coordinates[0];
          this.startingLat = response.data.features[0].geometry.coordinates[1];
          console.log("Lat " + this.startingLat);
          console.log("Lng " + this.startingLng);
          // Add distance attribute to each place
          this.places.forEach((place) => {
            place["distance"] = this.calcDistance(
              this.startingLng,
              this.startingLat,
              place.lon,
              place.lat
            );
          });
          // Re-render map based on new user location
          mapboxgl.accessToken = process.env.VUE_APP_MAP_KEY;
          var map = new mapboxgl.Map({
            container: "map", // container id
            style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
            center: [this.startingLng, this.startingLat],
            zoom: 13,
          });
          // For each place
          this.places.forEach((place) => {
            if (place.category === this.selectedCat) {
              var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<router-link to="/places/${place.id}">${place.name}</router-link><br><a href="/places/${place.id}">${place.name}</router-link>`
              );
              var marker = new mapboxgl.Marker()
                .setLngLat([place.lon, place.lat])
                .setPopup(popup)
                .addTo(map);
            }
          });
        });
    },
  },
};
</script>