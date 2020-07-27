<template>
  <div class="placesIndex">
    <h1>{{ message }}</h1>
    <ol>
      <li v-for="place in places">
        <router-link :to="`/places/${place.id}`"><h4>{{ place.name }}</h4></router-link>
        Favorited: {{ place.is_favorite }}<br>
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