<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <ol>
      <li v-for="place in places">
        <h4>{{ place.name }}</h4><br>
        Favorited: {{ place.is_favorite }}<br>
        ID: {{ place.yelp_id }}<br>
        Bar? {{ place.bar }}<br>
        Lat: {{ place.lat }}
        Long: {{ place.lon }}
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
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Places index!",
      places: {},
    };
  },
  created: function () {
    axios.get("/api/places").then((response) => {
      this.places = response.data;
      console.log(response.data);
    });
  },
  methods: {},
};
</script>