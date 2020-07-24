<template>
  <div class="home">
    <h1>{{ place.name }}</h1><br>
    <img class="place_thumbnail" :src="place.image_url" alt="`place.name`"><br>
    Favorited: {{ place.is_favorite }}<br>
    Category: {{ place.category }}<br>
    Yelp Info:<br>
    Rating: {{ place.yelp_details.rating }} |
    Price: {{ place.yelp_details.price }} | 
    Phone: {{ place.yelp_details.display_phone }}
    <span v-if="place.yelp_details.hours">| Open now: {{ place.yelp_details.hours[0].is_open_now }}</span><br>
    Address: <div v-for="address_line in place.yelp_details.location.display_address">{{ address_line }}</div><br>
    More info on <a :href="`${place.yelp_details.url}`">Yelp</a> <br>
    Yelp Categories:
    <ul><li v-for="category in place.yelp_details.categories">
        {{ category.title }}
    </li></ul>
    Reviews: <p v-for="review in place.yelp_reviews.reviews">
      Yelp User: {{ review.user.name }} | Rating: {{ review.rating }}<br>
      {{review.text }}
    </p> 


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
      place: {},
    };
  },
  created: function () {
    axios.get(`/api/places/${this.$route.params.id}`).then((response) => {
      this.place = response.data;
      console.log(response.data);
    });
  },
  methods: {},
};
</script>