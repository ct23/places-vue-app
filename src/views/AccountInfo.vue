<template>
  <div class="accountInfo">
    <div class="card">
      <!-- Only shown if user is logged in -->
      <div v-if="$parent.isLoggedIn()" class="card-body p-6">
        <h2 class="font-weight-normal mb-4">Account Info</h2>

        <div class="row">
          <div class="form-group col-md-6 mb-6">
            <label for="nameProfile">Name</label>
            <h5>{{ user.name }}</h5>
          </div>

          <div class="form-group col-md-6 mb-6">
            <label for="emailProfile">Email</label>
            <h5>{{ user.email }}</h5>
          </div>

          <div class="form-group col-md-6 mb-6">
            <label for="password">Password</label>
            <h5>****************</h5>
          </div>
        </div>
        <div class="row">
          <ul>
            <li>
              <div class="mt-4">
                <router-link
                  to="/account/edit"
                  class="btn btn-primary text-uppercase"
                  type="button"
                >
                  Edit Info
                </router-link>
              </div>
            </li>
            <li>
              <div class="mt-4">
                <button
                  v-on:click="deleteUser()"
                  class="btn btn-primary text-uppercase"
                  type="button"
                >
                  Delete Account
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- Else if user not logged in -->

      <div v-else>
        <router-link to="/login">Log in or create an account</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      user_id: "",
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
    deleteUser: function() {
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
