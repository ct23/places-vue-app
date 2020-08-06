<template>
  <div class="favorites">
    <div class="main-wrapper">
      <!-- ====================================
      ———	CATEGORY GRID FULL
      ===================================== -->
      <section class="py-7 py-md-10">
        <div class="container">
          <h2 class="font-weight-normal mb-4">My Favorites</h2>
          <div v-if="$parent.isLoggedIn() && favorites.length >= 1" class="row">
            <div v-for="favorite in favorites" class="col-md-6 col-lg-4">
              <div class="card rounded-0 card-hover-overlay">
                <div class="position-relative">
                  <img
                    class="card-img rounded-0 listing-img"
                    :src="favorite.place.image_url"
                    :alt="favorite.place.name"
                  />
                  <router-link :to="`/places/${favorite.place.id}`">
                    <div class="card-img-overlay">
                      <h3 class="listing-title">
                        <router-link :to="`/places/${favorite.place_id}`">
                          {{ favorite.place.name }}
                        </router-link>
                      </h3>
                      <p class="text-white listing-address">
                        {{ favorite.place.category }}
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
                        v-on:click="removeFavorite(favorite)"
                      >
                        <i
                          class="fa fa-heart text-primary"
                          aria-hidden="true"
                        ></i
                        >&ensp;
                        <span>Remove favorite</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="favorites.length < 1">
            <span
              >You don't have any favorites! Try adding some by clicking the
              heart icon on a listing.</span
            >
          </div>
          <div v-else>
            <router-link to="/login">Log in or create an account</router-link>
          </div>
        </div>
      </section>
    </div>
    <!-- element wrapper ends -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      favorites: {},
    };
  },
  created: function() {
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
    removeFavorite: function(favorite) {
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
