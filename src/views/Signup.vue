<template>
  <div class="signup">
    <div class="main-wrapper">
      <!-- ====================================
      ———	SIGN UP
      ===================================== -->
      <section class="py-7 py-md-10 bg-light height100vh">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-9 col-xl-7">
              <div class="bg-white p-5 rounded border">
                <h2 class="font-weight-normal mb-4">Account Registration</h2>
                <p>
                  If you already have an account, please,
                  <router-link to="/login">click here</router-link>.
                </p>
                <!-- Error handling -->
                <ul>
                  <li class="text-danger" v-for="error in errors">
                    {{ error }}
                  </li>
                </ul>
                <form class="py-7" v-on:submit.prevent="submit()">
                  <h3 class="h4 font-weight-normal mb-4 mt-7">
                    Account Information
                  </h3>
                  <div class="form-group">
                    <label for="inputText">Name</label>
                    <input
                      require
                      v-model="name"
                      type="text"
                      class="form-control"
                      id="inputText"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputText">Email</label>
                    <input
                      require
                      v-model="email"
                      type="email"
                      class="form-control"
                      id="inputText"
                      placeholder=""
                    />
                  </div>
                  <div class="row mb-6">
                    <div class="form-group col-md-6 mb-4">
                      <label for="inputPassword">Password</label>
                      <input
                        require
                        type="password"
                        class="form-control"
                        id="inputPassword"
                        placeholder=""
                        v-model="password"
                      />
                    </div>
                    <div class="form-group col-md-6 mb-4">
                      <label for="inputPassword">Password (re-type)</label>
                      <input
                        require
                        type="password"
                        class="form-control"
                        id="inputPassword"
                        placeholder=""
                        v-model="passwordConfirmation"
                      />
                    </div>
                  </div>

                  <button type="submit" class="btn btn-primary">
                    Create Account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- element wrapper ends -->

    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="name" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input
          type="password"
          class="form-control"
          v-model="passwordConfirmation"
        />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
  },
};
</script>
