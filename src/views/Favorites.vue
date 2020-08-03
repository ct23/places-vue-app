<template>
  <div class="favorites">
    <h1>Favorites</h1>
    <!-- Only shown if user is logged in -->
    <div v-if="$parent.isLoggedIn()">
      <!-- Places list -->
    <ol>
      <!-- Orders by distance based on user input address, filters by category input -->
      <li v-for="favorite in favorites" :key="favorite.id">
        <router-link :to="`/places/${favorite.place_id}`"><h4>{{ favorite.place.name }}</h4></router-link>
        <span v-on:click="removeFavorite(favorite)">Remove favorite</span><br>
        Bar: {{ favorite.place.bar }}<br>
        Category: {{ favorite.place.category }}<br>
        <router-link :to="`/places/${favorite.place_id}`"><img class="place_thumbnail" :src="favorite.place.image_url" alt="`favorite.place.name`"></router-link>
        
      </li>
    </ol>
    </div>
    <!-- Else if user not logged in -->
    <div v-else>
      <router-link to="/login">Log in or create an account</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      favorites: {},
    };
  },
  created: function () {
    // If user not logged in, redirect to create account page
    if (!this.$parent.isLoggedIn()) {
      console.log("Not logged in");
      this.$router.push("/login");
    } else {
      console.log("logged in..?");
      axios.get("/api/favorites").then((response) => {
        this.favorites = response.data;
        console.log(this.favorites);
      });
    }
  },
  methods: {
    removeFavorite: function (favorite) {
      console.log(favorite);
      // Check whether user is logged in
      if (this.$parent.isLoggedIn()) {
        // Remove favorite from display list
        this.favorites.splice(this.favorites.indexOf(favorite), 1);
        // Delete in database
        axios
          .delete(`/api/favorites/${favorite.id}`)
          .then(console.log("Favorite deleted"));
      } else {
        // If user is not logged in, redirect to login page
        this.$router.push("/login");
      }
    },
  },
};
</script>