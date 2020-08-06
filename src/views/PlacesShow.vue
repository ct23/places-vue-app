<template>
  <div class="placesShow">
    <div class="main-wrapper">
      <!-- ====================================
      ———	LISTING SINGLE HEADING
      ===================================== -->
      <section class="py-7 pt-md-9 pb-md-8">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="mb-2 mb-lg-0">
                <h1 class="single-listing-title">{{ place.name }}</h1>
                <p class="text-muted mb-1">
                  <i class="fa fa-map-marker text-primary mr-1"></i>
                  <span
                    v-for="address_line in place.yelp_details.location
                      .display_address"
                    >{{ address_line }}<br
                  /></span>
                </p>
                <p class="text-muted mb-1">
                  <i class="fa fa-phone text-primary mr-1"></i>
                  {{ place.yelp_details.display_phone }}
                </p>
                <p
                  v-if="
                    place.yelp_details.hours &&
                      place.yelp_details.hours[0].is_open_now
                  "
                  class="text-muted mb-1"
                >
                  Open now
                </p>
                <div class="d-flex align-items-center">
                  <span class="d-inline-block mr-2">
                    <a
                      :href="place.yelp_details.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      ><img
                        class="yelp-logo"
                        src="/assets/img/yelp/Yelp_Logo.png"
                    /></a>
                  </span>
                  <ul class="list-inline list-inline-rating mr-2">
                    <li class="list-inline-item">
                      <img
                        :src="
                          `/assets/img/yelp/yelp_stars/web_and_ios/small/small_${place.yelp_details.rating}.png`
                        "
                        :alt="`${place.yelp_details.rating} stars`"
                      />
                    </li>
                  </ul>
                  <span class="d-inline-block mr-2"
                    >({{ place.yelp_details.review_count }} Reviews)</span
                  >

                  <span class="d-inline-block mr-2"
                    >Price: {{ place.yelp_details.price }}</span
                  >
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ====================================
      ———	LISTING DETAILS CAROUSEL
      ===================================== -->
      <section>
        <carousel class="owl-theme listing-details-carousel nav-light-dark">
          <div class="single-item" v-for="photo in place.yelp_details.photos">
            <a class="overlay-dark" :href="photo" data-fancybox="gallery">
              <img class="place_thumbnail" :src="photo" alt="Image" />
            </a>
          </div>
        </carousel>
      </section>

      <!-- ====================================
      ———	MAIN CONTENT
      ===================================== -->
      <section class="pt-7 pb-4 pt-md-9 pb-md-8">
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-lg-8">
              <!-- Categories -->
              <div class="my-6">
                <h3 class="font-weight-normal mb-6">Categories</h3>
                <ul class="list-unstyled mb-7">
                  <li
                    v-for="category in place.yelp_details.categories"
                    class="d-inline-block mr-4 mb-2"
                  >
                    {{ category.title }}
                  </li>
                </ul>
                <hr />
              </div>

              <!-- Reviews -->
              <div class="my-6">
                <h3 class="font-weight-normal mb-6">Reviews</h3>
                <div
                  v-for="review in place.yelp_reviews.reviews"
                  class="media mb-3"
                >
                  <div class="media-img">
                    <img
                      v-if="review.user.image_url"
                      :src="review.user.image_url"
                      class="mr-3 media-object rounded-circle"
                      alt="Image User"
                    />
                    <img
                      v-else
                      src="/assets/img/user/avatar.png"
                      class="mr-3 media-object rounded-circle"
                      alt="Image User"
                    />
                  </div>
                  <div class="media-body">
                    <h5 class="media-heading">{{ review.user.name }}</h5>
                    <ul class="list-inline list-inline-rating">
                      <li class="list-inline-item">
                        <img
                          :src="
                            `/assets/img/yelp/yelp_stars/web_and_ios/small/small_${review.rating}.png`
                          "
                          :alt="`${review.rating} stars`"
                        />
                      </li>
                    </ul>
                    <p>
                      {{ review.text }}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        :href="`${review.url}`"
                        >Read more</a
                      >
                    </p>
                  </div>
                </div>

                <hr />
              </div>
            </div>

            <!--======= Sidebar =======-->
            <div class="col-md-5 col-lg-4 pl-xl-8">
              <!-- Single listing Map -->
              <div class="map-sidebar border rounded mb-5">
                <div
                  id="single-listing-map"
                  :data-lat="place.yelp_details.coordinates.latitude"
                  :data-lag="place.yelp_details.coordinates.longitude"
                ></div>
                <div class="px-6 py-5">
                  <ul class="list-unstyled mb-0">
                    <li class="d-flex align-items-start">
                      <i
                        class="fa fa-map-marker mr-3 mt-1"
                        aria-hidden="true"
                      ></i>
                    </li>

                    <span
                      v-for="address_line in place.yelp_details.location
                        .display_address"
                    >
                      {{ address_line }}<br />
                    </span>
                  </ul>
                </div>
              </div>

              <!-- Opening Hours -->
              <div class="border rounded px-6 py-5 mb-5">
                <h3 class="mb-4 font-weight-normal">Opening Hours</h3>
                <ul v-if="place.yelp_details.hours" class="list-unstyled mb-0">
                  <li
                    class="d-flex justify-content-between mb-3 pb-3 border-bottom"
                  >
                    <span>Monday</span>
                    <span v-if="place.yelp_details.hours[0].open[0]">
                      {{ place.yelp_details.hours[0].open[0].start }} -
                      {{ place.yelp_details.hours[0].open[0].end }}</span
                    >
                    <span v-else>Closed</span>
                  </li>
                  <li
                    class="d-flex justify-content-between mb-3 pb-3 border-bottom"
                  >
                    <span>Tuesday</span>
                    <span v-if="place.yelp_details.hours[0].open[1]">
                      {{ place.yelp_details.hours[0].open[1].start }} -
                      {{ place.yelp_details.hours[0].open[1].end }}</span
                    >
                    <span v-else>Closed</span>
                  </li>
                  <li
                    class="d-flex justify-content-between mb-3 pb-3 border-bottom"
                  >
                    <span>Wednesday</span>
                    <span v-if="place.yelp_details.hours[0].open[2]">
                      {{ place.yelp_details.hours[0].open[2].start }} -
                      {{ place.yelp_details.hours[0].open[2].end }}</span
                    >
                    <span v-else>Closed</span>
                  </li>
                  <li
                    class="d-flex justify-content-between mb-3 pb-3 border-bottom"
                  >
                    <span>Thrusday</span>
                    <span v-if="place.yelp_details.hours[0].open[3]">
                      {{ place.yelp_details.hours[0].open[3].start }} -
                      {{ place.yelp_details.hours[0].open[3].end }}</span
                    >
                    <span v-else>Closed</span>
                  </li>
                  <li
                    class="d-flex justify-content-between mb-3 pb-3 border-bottom"
                  >
                    <span>Friday</span>
                    <span v-if="place.yelp_details.hours[0].open[4]">
                      {{ place.yelp_details.hours[0].open[4].start }} -
                      {{ place.yelp_details.hours[0].open[4].end }}</span
                    >
                    <span v-else>Closed</span>
                  </li>
                  <li
                    class="d-flex justify-content-between mb-3 pb-3 border-bottom"
                  >
                    <span>Saturday</span>
                    <span v-if="place.yelp_details.hours[0].open[5]">
                      {{ place.yelp_details.hours[0].open[5].start }} -
                      {{ place.yelp_details.hours[0].open[5].end }}
                    </span>
                    <span v-else>Closed</span>
                  </li>
                  <li class="d-flex justify-content-between mb-3">
                    <span>Sunday</span>
                    <span v-if="place.yelp_details.hours[0].open[6]">
                      {{ place.yelp_details.hours[0].open[6].start }} -
                      {{ place.yelp_details.hours[0].open[6].end }}
                    </span>
                    <span v-else>Closed</span>
                  </li>
                </ul>
                <!-- If no hours specified -->
                <ul v-else>
                  <li class="d-flex justify-content-between mb-3">
                    <span>Yelp does not have the hours for this business</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- element wrapper ends -->
  </div>
</template>

<style>
.rounded-circle {
  height: 50px;
  width: 50px;
}
.place_thumbnail {
  height: 200px;
}

.showMap {
  width: 100%;
  /* height: 438px;
  margin-bottom: 30px; */
}

.yelp-logo {
  width: 50px;
  height: auto;
}
</style>

<script>
/* global mapboxgl */
import axios from "axios";
import carousel from "vue-owl-carousel";
export default {
  components: { carousel },
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
      console.log(this.place.yelp_details);
      mapboxgl.accessToken = process.env.VUE_APP_MAP_KEY;
      setTimeout(
        function() {
          var map = new mapboxgl.Map({
            container: "single-listing-map", // container id
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
        }.bind(this),
        2000
      );
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
