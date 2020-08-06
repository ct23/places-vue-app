<template>
  <div class="placesIndex">
    <div class="main-wrapper">
      <!-- ====================================
        ———	LISTING HALF MAP GRID
        ===================================== -->
      <section class="main-contentiner map-half-content grid-two-items">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 order-lg-2 pl-lg-0">
              <!-- Half Map -->
              <div class="inner-container">
                <div class="map-lg-fixed">
                  <div class="map-container">
                    <!-- <div id="listing-main-map" class="map-half"></div> -->
                    <div id="map" class="map-half"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 px-xl-6">
              <div class="row">
                <div class="col-12">
                  <!-- Search Box 2 -->
                  <div class="search-box-2 bg-light pb-3 pb-md-1">
                    <form class="row " v-on:submit.prevent="geocode()">
                      <div class="form-group col-md-6 col-lg-12 col-xl-6">
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">Category</div>
                          </div>

                          <div class="select-default">
                            <select
                              v-model="selectedCat"
                              class="select-location form-control"
                            >
                              <option value="">All Categories</option>
                              <option v-for="category in categories">{{
                                category.name
                              }}</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div
                        class="form-group prepend-append col-md-6 col-lg-12 col-xl-6"
                      >
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">Near</div>
                          </div>
                          <input
                            type="text"
                            v-model="searchQuery"
                            class="form-control"
                            placeholder="Location"
                          />
                        </div>
                      </div>

                      <div
                        class="form-group prepend-append col-md-6 col-lg-12 col-xl-6"
                      >
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">Type</div>
                          </div>
                          <div class="select-default">
                            <select
                              v-model="barsOnly"
                              class="select-location form-control"
                            >
                              <option value="">Bars and Restaurants</option>
                              <option value="true">Bars only</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="form-group col-md-6 col-lg-12 col-xl-3">
                        <button type="submit" class="btn btn-block btn-primary">
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div class="row">
                <div
                  v-for="place in filterBy(
                    filterBy(places, barsOnly, 'bar'),
                    selectedCat,
                    'category'
                  )"
                  class="col-md-6"
                >
                  <div
                    class="card rounded-0 card-hover-overlay card-listing"
                    :data-lat="place.lat"
                    :data-lag="place.lon"
                    :data-id="place.id"
                  >
                    <div class="position-relative">
                      <img
                        class="card-img rounded-0 listing-img"
                        :src="place.image_url"
                        :alt="place.name"
                      />
                      <router-link :to="`/places/${place.id}`">
                        <div class="card-img-overlay">
                          <h3 class="listing-title">
                            <router-link :to="`/places/${place.id}`">
                              {{ place.name }}
                            </router-link>
                          </h3>
                          <p class="text-white listing-address">
                            {{ place.category }}
                          </p>
                        </div>
                      </router-link>
                    </div>

                    <div class="card-footer bg-transparent">
                      <ul class="list-unstyled d-flex mb-0 py-2">
                        <li>
                          <button
                            class="btn-like px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Favorite this listing"
                            v-on:click="toggleFavorite(place)"
                          >
                            <i
                              v-if="!place.is_favorite"
                              class="fa fa-heart-o text-primary"
                              aria-hidden="true"
                            ></i>
                            <i
                              v-else
                              class="fa fa-heart text-primary"
                              aria-hidden="true"
                            ></i
                            >&ensp;
                            <span v-if="!place.is_favorite">Save favorite</span>
                            <span v-else>Favorite saved</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
.place_thumbnail {
  height: 200px;
}
/* #map {
  width: 100%;
  height: 438px;
  margin-bottom: 30px;
} */
.listing-img {
  background-position: cover;
  height: 275px;
}
</style>

<script>
/* global mapboxgl */
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Welcome to Places index!",
      places: {},
      selectedCat: "",
      categories: [],
      startingLat: "41.94353485107422",
      startingLng: "-87.65628814697266",
      searchQuery: "",
      params: {},
      barsOnly: "",
      maxDistance: "",
    };
  },
  created: function() {
    axios.get("/api/places").then((response) => {
      this.places = response.data;
      console.log(response.data);

      if (this.$parent.userLocation) {
        this.searchQuery = this.$parent.userLocation;
        this.geocode();
      } else {
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
            `<a href="/places/${place.id}">${place.name}</router-link>`
          );
          var marker = new mapboxgl.Marker()
            .setLngLat([place.lon, place.lat])
            .setPopup(popup)
            .addTo(map);
        });
      }
    });
    axios.get("/api/categories").then((response) => {
      this.categories = response.data;
      console.log(response.data);
    });
  },
  // watch: {
  //   selectedCat: function () {
  //     // Handle cases when search query is left blank:
  //     if (this.searchQuery === "") {
  //       this.searchQuery = "Chicago, IL";
  //     }
  //     axios
  //       .get(
  //         `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.searchQuery}.json?access_token=${process.env.VUE_APP_MAP_KEY}`
  //       )
  //       .then((response) => {
  //         this.placeSearchObject = response.data;
  //         console.log(this.placeSearchObject);
  //         // this.startingLng = this.placeSearchObject.features[0].geometry.coordinates[0];
  //         this.startingLng = response.data.features[0].geometry.coordinates[0];
  //         this.startingLat = response.data.features[0].geometry.coordinates[1];
  //         console.log("Lat " + this.startingLat);
  //         console.log("Lng " + this.startingLng);
  //         // Add distance attribute to each place
  //         this.places.forEach((place) => {
  //           place["distance"] = this.calcDistance(
  //             this.startingLng,
  //             this.startingLat,
  //             place.lon,
  //             place.lat
  //           );
  //         });
  //         this.rerender();
  //       });
  //   },
  // },
  methods: {
    toggleFavorite: function(place) {
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
    calcDistance: function(lon1, lat1, lon2, lat2) {
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
    toRad: function(number) {
      return (number * Math.PI) / 180;
    },
    geocode: function() {
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
          this.places = this.orderBy(this.places, "distance");

          this.rerender();
        });
    },
    rerender: function() {
      // Re-render map based on new user location
      console.log("Re-rendering map");
      mapboxgl.accessToken = process.env.VUE_APP_MAP_KEY;
      var map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [this.startingLng, this.startingLat],
        zoom: 13,
      });
      // For each place
      console.log("Re-generating places");
      this.places.forEach((place) => {
        if (!this.selectedCat || place.category === this.selectedCat) {
          var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<router-link to="/places/${place.id}">${place.name}</router-link><br><a href="/places/${place.id}">${place.name}</router-link>`
          );
          var marker = new mapboxgl.Marker()
            .setLngLat([place.lon, place.lat])
            .setPopup(popup)
            .addTo(map);
        }
      });
    },
  },
};
</script>
