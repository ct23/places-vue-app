<template>
  <div class="placesShow">
    <div v-if="place.yelp_details">
      <h1>{{ place.name }}</h1>
      <br />
      <img
        class="place_thumbnail"
        :src="place.image_url"
        alt="`place.name`"
      /><br />
      <span v-on:click="toggleFavorite(place)"
        >Favorited: {{ place.is_favorite }}</span
      ><br />
      Category: {{ place.category }}<br />
      Rating: {{ place.yelp_details.rating }} | Price:
      {{ place.yelp_details.price }} | Phone:
      {{ place.yelp_details.display_phone }}
      <span v-if="place.yelp_details.hours"
        >| Open now: {{ place.yelp_details.hours[0].is_open_now }}</span
      ><br />
      Address:
      <div v-for="address_line in place.yelp_details.location.display_address">
        {{ address_line }}
      </div>
      <br />
      <a
        target="_blank"
        rel="noopener noreferrer"
        :href="`${place.yelp_details.url}`"
        >Yelp (insert required logo)</a
      >
      <br />
      Yelp Categories:
      <ul>
        <li v-for="category in place.yelp_details.categories">
          {{ category.title }}
        </li>
      </ul>
      Photos:<br /><span v-for="photo in place.yelp_details.photos"
        ><img class="place_thumbnail" :src="photo"/></span
      ><br />
      Reviews:
      <p v-for="review in place.yelp_reviews.reviews">
        Yelp User: {{ review.user.name }} | Rating: {{ review.rating }}<br />
        {{ review.text }}
        <a target="_blank" rel="noopener noreferrer" :href="`${review.url}`"
          >Read more</a
        >
      </p>
    </div>
    <!-- Map -->
    <div id="map"></div>
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
</style>

<script>
/* global mapboxgl */
import axios from "axios";
export default {
  data: function() {
    return {
      place: {},
      formattedAddress: "",
    };
  },
  created: function() {
    axios.get(`/api/places/${this.$route.params.id}`).then((response) => {
      this.place = response.data;
      console.log(this.place);
      mapboxgl.accessToken = process.env.VUE_APP_MAP_KEY;
      var map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [
          this.place.yelp_details.coordinates.longitude,
          this.place.yelp_details.coordinates.latitude,
        ],
        zoom: 13,
      });
      var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `${this.place.name}<br>${this.place.yelp_details.location.display_address}<br><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir/?api=1&destination=${this.place.yelp_details.location.display_address}">Directions</a>`
      );
      var marker = new mapboxgl.Marker()
        .setLngLat([
          this.place.yelp_details.coordinates.longitude,
          this.place.yelp_details.coordinates.latitude,
        ])
        .setPopup(popup)
        .addTo(map);
    });
  },
  mounted: function() {},
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
  },
};
</script>
