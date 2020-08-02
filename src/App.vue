<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/places">Places Index</router-link> |
      <router-link to="/favorites">My Favorites</router-link> |
      <router-link v-if="isLoggedIn()" to="/account">Account</router-link><span v-if="isLoggedIn()"> | </span>
      <router-link v-if="!isLoggedIn()" to="/login">Log In</router-link>
      <router-link v-if="isLoggedIn()" to="/logout">Log Out</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


<script>
export default {
  data: function () {
    return {
      userLocation: "",
    };
  },
  methods: {
    // Returns true or false depending on jwt in localstorage
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
  mounted() {},
};
</script>
