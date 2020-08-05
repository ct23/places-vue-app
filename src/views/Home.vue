<template>
  <div class="home">
    <section
      class="banner"
      style="background-image: url('assets/img/background/banner-img-7.jpg');"
    >
      <div class="container">
        <div
          class="row text-center align-items-center justify-content-center"
          style="height:624px;"
        >
          <div class="col-12">
            <!-- Banner Info -->
            <div class="banner-info">
              <h1 class="text-uppercase text-white mb-4">
                chicago black owned
              </h1>
              <p class="lead text-white">
                A directory of local Chicago black-owned bars and restaurants
              </p>
            </div>

            <!-- Search Box -->
            <div class="search-box-2">
              <form
                v-on:submit.prevent="search()"
                class="form-row justify-content-center"
                method="GET"
              >
                <div class="form-group prepend-append col-md-5 col-lg-4">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        Search near:
                      </div>
                    </div>
                    <input
                      ref="autocomplete"
                      type="text"
                      class="form-control"
                      placeholder="Location"
                      v-model="userLocation"
                    />
                    <div class="input-group-append">
                      <span
                        class="input-group-text"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Find my location"
                        v-on:click="geolocate()"
                      >
                        <i
                          class="icon-listy icon-target"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="form-group col-md-3 col-lg-2">
                  <button type="submit" class="btn btn-block btn-primary">
                    Search
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>

<script>
export default {
  /* global google */
  data: function() {
    return {
      message: "Welcome to CBO!",
      userLocation: "",
    };
  },
  created: function() {},
  mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.$refs.autocomplete,
      { types: ["geocode"] }
    );
    this.autocomplete.addListener("place_changed", () => {
      let place = this.autocomplete.getPlace();
      let formattedAddress = place.formatted_address;
      this.userLocation = formattedAddress;
      console.log(this.userLocation);
    });
  },
  methods: {
    search: function() {
      this.$parent.userLocation = this.userLocation;
      this.$router.push("/places");
    },
    geolocate: function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          var geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log(geolocation);
          this.userLocation = geolocation.lng + ", " + geolocation.lat;
        });
      }
    },
  },
};
</script>
