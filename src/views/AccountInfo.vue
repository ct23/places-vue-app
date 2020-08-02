

<template>
  <div class="accountInfo">
    <h1>Account</h1>
    <!-- Only shown if user is logged in -->
    <div v-if="$parent.isLoggedIn()">
      Name: {{ user.name }}<br><br>
      Email: {{ user.email }}<br><br>
      Password: ****************<br><br>
      <router-link to="/account/edit" tag="button">Edit Info</router-link><br>
      <button v-on:click="deleteUser()">Delete Account</button>
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
      user: {},
      user_id: "",
    };
  },
  created: function () {
    // If user not logged in, redirect to create account page
    if (!this.$parent.isLoggedIn()) {
      this.$router.push("/login");
    } else {
      axios.get(`/api/users/${this.$parent.getUserId()}`).then((response) => {
        this.user = response.data;
        console.log(this.user);
      });
    }
  },
  methods: {
    deleteUser: function () {
      if (
        confirm(
          "Are you sure you want to delete your account? This action cannot be undone."
        )
      ) {
        axios
          .delete(`/api/users/${this.$parent.getUserId()}`)
          .then((response) => {
            console.log("Account deleted", response.data);
            this.$router.push("/logout");
          });
      }
    },
  },
};
</script>