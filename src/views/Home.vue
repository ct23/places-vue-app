<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h3>A directory of local Chicago black-owned bars and restaurants</h3>

    <form v-on:submit.prevent="search()">
      <input ref="autocomplete" 
          placeholder="Address search" 
          class="search-location"
          type="text"
          v-model="userLocation"
          />
          <!-- :onFocus="geolocate()" -->
          <input type="submit" class="btn btn-primary" value="Search">
     </form> 
  </div>
</template>

<style>
</style>

<script>
export default {
  /* global google */
  data: function () {
    return {
      message: "Welcome to CBO!",
      userLocation: "",
    };
  },
  created: function () {},
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
    search: function () {
      this.$parent.userLocation = this.userLocation;
      this.$router.push("/places");
    },
    // geolocate: function () {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function (position) {
    //       var geolocation = {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude,
    //       };
    //       console.log(geolocation);
    //       this.userLocation = geolocation;
    //     });
    //   }
    // },
  },
};
</script>