<template>
  <div class="login">
    <div class="main-wrapper">
      <!-- ====================================
      ———	LOGIN PAGE
      ===================================== -->
      <section class="py-7 py-md-10 bg-light ">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-5">
              <div class="card">
                <div class="bg-primary text-center py-4">
                  <h2 class="text-white mb-0 h4">Log In</h2>
                </div>
                <div class="card-body px-7 pt-7 pb-0">
                  <form v-on:submit.prevent="submit()">
                    <!-- error handling -->
                    <ul>
                      <li class="text-danger" v-for="error in errors">
                        {{ error }}
                      </li>
                    </ul>
                    <div class="form-group mb-7">
                      <label for="exampleInputText">Email*</label>
                      <input
                        required
                        type="email"
                        class="form-control"
                        aria-describedby="emailHelp"
                        v-model="email"
                      />
                    </div>
                    <div class="form-group mb-7">
                      <label for="exampleInputPassword1">Password*</label>
                      <input
                        required
                        type="password"
                        class="form-control"
                        v-model="password"
                      />
                    </div>
                    <div
                      class="form-group d-flex justify-content-between align-items-center mb-7"
                    >
                      <button
                        type="submit"
                        class="btn btn-outline-primary text-uppercase"
                      >
                        Log in
                      </button>
                    </div>
                  </form>
                </div>
                <div class="card-footer bg-transparent text-center py-3">
                  <p class="mb-0">
                    Not a member yet?
                    <router-link to="/createaccount" class="link"
                      >Sign up</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- element wrapper ends -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          console.log("Logged in successfully");
          this.$router.push("/");
        })
        .catch((error) => {
          this.errors = ["Invalid email or password."];
          this.password = "";
        });
    },
  },
};
</script>
