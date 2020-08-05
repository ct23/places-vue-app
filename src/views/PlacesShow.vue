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
                    >{{ address_line }}</span
                  >
                </p>
                <p class="text-muted mb-1">
                  <i class="fa fa-phone text-primary mr-1"></i>
                  {{ place.yelp_details.display_phone }}
                </p>
                <div class="d-flex align-items-center">
                  <ul class="list-inline list-inline-rating mr-2">
                    <li class="list-inline-item">
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                  </ul>
                  <span class="d-inline-block mr-2"
                    >({{ place.yelp_details.review_count }} Reviews)</span
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
              <!-- About -->
              <div class="single-listing-content mb-6">
                <h3 class="font-weight-normal mb-6">About This Restuarant</h3>
                <p class="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  eiusmod tempor incididunt labore et dolore magna aliqua.Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident. sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam.
                </p>

                <!-- Hours -->
                <div class="mb-6">
                  <h4 class="font-weight-normal mb-4">Hours</h4>
                  <p class="mb-1">LUNCH - MONDAY – FRIDAY: 11:30am-3pm</p>
                  <p class="mb-1">ALL DAY MENU - MONDAY – FRIDAY: 3pm-5:30pm</p>
                  <p class="mb-1">DINNER - MONDAY – SUNDAY: 5:30pm-11pm</p>
                  <p class="mb-1">BRUNCH - 10am-3pm</p>
                </div>

                <!-- Departments at this Store -->
                <div class="mb-6">
                  <h4 class="font-weight-normal mb-4">Services</h4>
                  <p class="mb-1">Counter Service</p>
                  <p class="mb-1">Table Service</p>
                  <p class="mb-1">Buffet Service</p>
                  <p class="mb-1">Self Service</p>
                  <p class="mb-1">Gueridon Service</p>
                </div>

                <!-- Departments at this Store -->
                <div class="mb-6">
                  <h4 class="font-weight-normal mb-4">Seating</h4>
                  <p class="mb-1">55 Guests in our Main Dining Room</p>
                  <p class="mb-1">16 Guests in our Garden Room</p>
                </div>
              </div>

              <hr />

              <!-- Features -->
              <div class="my-6">
                <h3 class="font-weight-normal mb-6">Features</h3>
                <ul class="list-unstyled mb-7">
                  <li class="d-inline-block mr-4 mb-2">
                    <i class="fa fa-wifi mr-2" aria-hidden="true"></i>High Speed
                    Wifi
                  </li>
                  <li class="d-inline-block mr-4 mb-2">
                    <i class="fa fa-car mr-2" aria-hidden="true"></i>Street
                    Parking
                  </li>
                  <li class="d-inline-block mr-4 mb-2">
                    <i class="fa fa-glass mr-2" aria-hidden="true"></i>Alcohol
                  </li>
                  <li class="d-inline-block mr-4 mb-2">
                    <i class="fa fa-pagelines mr-2" aria-hidden="true"></i
                    >Vegetarian
                  </li>
                  <li class="d-inline-block mr-4 mb-2">
                    <i class="fa fa-cube mr-2" aria-hidden="true"></i
                    >Reservations
                  </li>
                  <li class="d-inline-block mr-4 mb-2">
                    <i class="fa fa-check-circle-o mr-2" aria-hidden="true"></i>
                    Pets Friendly
                  </li>
                  <li class="d-inline-block mr-4 mb-2">
                    <i class="fa fa-credit-card mr-2" aria-hidden="true"></i
                    >Accept Credit Card
                  </li>
                </ul>
                <hr />
              </div>

              <!-- Added By -->
              <div>
                <h3 class="font-weight-normal mb-6">Added By</h3>
                <div class="media mb-7">
                  <div class="media-img">
                    <img
                      src="assets/img/user/user-xs-4.jpg"
                      class="mr-3 media-object rounded-circle"
                      alt="Image User"
                    />
                  </div>
                  <div class="media-body">
                    <h5 class="media-heading">Adam Smith</h5>
                    <div
                      class="d-flex flex-column flex-lg-row align-items-lg-center"
                    >
                      <ul
                        class="list-inline d-flex flex-column flex-lg-row mb-0"
                      >
                        <li class="list-inline-item">
                          <i class="fa fa-phone" aria-hidden="true"></i>
                          <span class="ml-2">+55 654 545 122</span>
                        </li>
                        <li class="list-inline-item">
                          <i class="fa fa-envelope" aria-hidden="true"></i>
                          <span class="ml-2">example.com</span>
                        </li>
                      </ul>

                      <ul class="list-inline list-inline-icon ml-lg-auto">
                        <li class="list-inline-item">
                          <a class="mr-2" href="#">
                            <i
                              class="fa fa-facebook-official"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a class="mr-2" href="#">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a class="mr-2" href="#">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

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
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star" aria-hidden="true"></i>
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

              <!-- Add Review -->
              <div class="my-6" id="add-review">
                <h3 class="font-weight-normal mb-6">Add Review</h3>
                <span class="star add-rating-default pl-0 mb-6"></span>
                <form>
                  <div class="form-check form-check-inline mb-6 mr-lg-7">
                    <input
                      class="form-check-input mr-2"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      <div class="media media-xs align-items-center">
                        <img
                          src="assets/img/user/user-xs-3.jpg"
                          class="mr-2 media-object rounded-circle"
                          alt="Image User"
                        />
                        <div class="media-body">
                          <h5 class="media-heading mb-0">William</h5>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div class="form-check form-check-inline mb-6">
                    <input
                      class="form-check-input mr-2"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      <div class="media media-xs align-items-center">
                        <img
                          src="assets/img/user/avatar-01.png"
                          class="mr-2 media-object rounded-circle border"
                          alt="Image User"
                        />
                        <div class="media-body">
                          <h5 class="media-heading mb-0">Anonymous</h5>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div class="form-group mb-6">
                    <textarea
                      class="form-control"
                      rows="6"
                      placeholder="Enter Your Comment"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="btn btn-primary text-uppercase"
                    >
                      Send Review
                    </button>
                  </div>
                </form>
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
                >
                  <!-- <div id="map"></div> -->
                </div>
                <div class="px-6 py-5">
                  <ul class="list-unstyled mb-0">
                    <li class="d-flex align-items-start">
                      <i
                        class="fa fa-map-marker mr-3 mt-1"
                        aria-hidden="true"
                      ></i>
                      <span
                        v-for="address_line in place.yelp_details.location
                          .display_address"
                        >{{ address_line }}</span
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Opening Hours -->
              <div class="border rounded px-6 py-5 mb-5">
                <h3 class="mb-4 font-weight-normal">Opening Hours</h3>
                <ul class="list-unstyled mb-0">
                  <li
                    class="d-flex justify-content-between mb-3 pb-3 border-bottom"
                  >
                    <span>Monday</span>
                    <span>08.00am - 05.00pm</span>
                  </li>
                  <li
                    class="d-flex justify-content-between mb-3 pb-3 border-bottom"
                  >
                    <span>Tuesday</span>
                    <span>08.00am - 05.00pm</span>
                  </li>
                  <li
                    class="d-flex justify-content-between mb-3 pb-3 border-bottom"
                  >
                    <span>Wednesday</span>
                    <span>08.00am - 05.00pm</span>
                  </li>
                  <li
                    class="d-flex justify-content-between mb-3 pb-3 border-bottom"
                  >
                    <span>Thrusday</span>
                    <span>08.00am - 05.00pm</span>
                  </li>
                  <li
                    class="d-flex justify-content-between mb-3 pb-3 border-bottom"
                  >
                    <span>Friday</span>
                    <span>08.00am - 05.00pm</span>
                  </li>
                  <li
                    class="d-flex justify-content-between mb-3 pb-3 border-bottom"
                  >
                    <span>Saturday</span>
                    <span><a href="#">Closed</a></span>
                  </li>
                  <li class="d-flex justify-content-between mb-3">
                    <span>Sunday</span>
                    <span><a href="#">Closed</a></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- element wrapper ends -->

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
.rounded-circle {
  height: 50px;
  width: 50px;
}
.place_thumbnail {
  height: 200px;
}

#map {
  /* width: 100%; */
  height: 438px;
  /* margin-bottom: 30px; */
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
      // var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
      //   `${this.place.name}<br>${this.place.yelp_details.location.display_address}<br><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir/?api=1&destination=${this.place.yelp_details.location.display_address}">Directions</a>`
      // );
      // var marker = new mapboxgl.Marker()
      //   .setLngLat([
      //     this.place.yelp_details.coordinates.longitude,
      //     this.place.yelp_details.coordinates.latitude,
      //   ])
      //   .setPopup(popup)
      //   .addTo(map);
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
