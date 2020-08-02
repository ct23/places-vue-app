

<template>
  <div class="accountEdit">
    <h1>Edit Account Details</h1>

    <!-- Only shown if user is logged in -->
    <form v-on:submit.prevent="editUser()" v-if="$parent.isLoggedIn()">

      <!-- Error handling -->
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>

      <div class="form-group">
        <label for="name">Name:</label> 
        <input id="name" type="text" class="form-control" v-model="user.name">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" class="form-control" v-model="user.email">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" type="password" class="form-control" v-model="password">
      </div>
      <div class="form-group">
        <label for="password_confirmation">Password confirmation:</label>
        <input id="password_confirmation" type="password" class="form-control" v-model="passwordConfirmation">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
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
      errors: [],
      password: "",
      passwordConfirmation: "",
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
    editUser: function () {
      var params = {
        name: this.user.name,
        email: this.user.email,
        // password: this.user.password,
        // password_confirmation: this.user.passwordConfirmation,
      };
      if (this.password) {
        params["password"] = this.password;
        params["password_confirmation"] = this.passwordConfirmation;
        console.log("Password changed");
      } else {
        console.log("No password change");
      }
      axios
        .patch(`/api/users/${this.$parent.getUserId()}`, params)
        .then((response) => {
          this.$router.push("/account");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>