<template>
  <div class="accountEdit">
    <!-- Only shown if user is logged in -->
    <form v-on:submit.prevent="editUser()" v-if="$parent.isLoggedIn()">
      <div class="card">
        <div class="card-body p-6">
          <h2 class="font-weight-normal mb-4">Edit Account Info</h2>
          <!-- Error handling -->
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>

          <div class="row">
            <div class="form-group col-md-6 mb-6">
              <label for="nameProfile">Name</label>
              <input
                type="text"
                class="form-control"
                id="nameProfile"
                placeholder="Name"
                v-model="user.name"
              />
            </div>
            <div class="form-group col-md-6 mb-6">
              <label for="emailProfile">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                v-model="user.email"
              />
            </div>
            <div class="form-group col-md-6 mb-6">
              <label for="passwordConfirmationProfile">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="password"
              />
              <em>Leave blank for no change</em>
            </div>
            <div class="form-group col-md-6 mb-6">
              <label for="passwordConfirmationProfile"
                >Password confirmation</label
              >
              <input
                type="password"
                class="form-control"
                placeholder="Password confirmation"
                v-model="passwordConfirmation"
              />
            </div>
          </div>
          <div class="mt-4">
            <input
              type="submit"
              class="btn btn-primary text-uppercase"
              value="Save Changes"
            />
          </div>
        </div>
      </div>
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
  data: function() {
    return {
      user: {},
      errors: [],
      password: "",
      passwordConfirmation: "",
    };
  },
  created: function() {
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
    editUser: function() {
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
