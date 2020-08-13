<template>
  <div id="app">
    <!-- OTHER -->
    <!-- <nav class="nav-menuzord navbar-sticky">
        <div class="container-fluid clearfix"> -->
    <!-- HOME -->
    <!-- <nav class="nav-menuzord nav-menuzord-transparent navbar-sticky">
        <div class="container clearfix"> -->
    <!-- HEADER -->
    <header class="header">
      <nav
        class="nav-menuzord navbar-sticky"
        :class="{ 'nav-menuzord-transparent': $route.fullPath == '/' }"
      >
        <div
          :class="
            $route.fullPath == '/'
              ? 'container clearfix'
              : 'container-fluid clearfix'
          "
        >
          <div id="menuzord" class="menuzord menuzord-responsive">
            <a href="/" class="menuzord-brand">
              <svg
                class="logo-svg"
                data-v-423bf9ae=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 363 90"
                width="140"
                height="44"
              >
                <!----><!----><!---->
                <g
                  data-v-423bf9ae=""
                  id="8e6a1391-75f0-41f4-9a38-326f04acc656"
                  fill="#0698ec"
                  transform="matrix(5.964215028353327,0,0,5.964215028353327,189.81184760227234,-7.186880314530519)"
                >
                  <path
                    class="fill-primay"
                    d="M5.31 3.72C2.59 3.72 0.69 5.75 0.69 8.79C0.69 11.73 2.38 13.78 5.14 13.78C7.66 13.78 9.07 12.33 9.27 10.44L9.28 10.30L7.76 10.30L7.73 10.44C7.46 11.75 6.66 12.60 5.21 12.60C3.50 12.60 2.35 11.12 2.35 8.72C2.35 6.44 3.49 4.90 5.28 4.90C6.73 4.90 7.53 5.73 7.80 7.03L7.83 7.17L9.35 7.17L9.34 7.03C9.14 5.12 7.83 3.72 5.31 3.72ZM16.45 8.41C17.44 8.08 18.03 7.45 18.03 6.36C18.03 5.01 17.16 4.19 15.62 3.98C15.15 3.92 14.84 3.92 14.36 3.92L11.24 3.92L11.24 13.58L14.53 13.58C15.02 13.58 15.34 13.58 15.82 13.51C17.09 13.33 18.38 12.49 18.38 10.72C18.38 9.44 17.71 8.72 16.45 8.41ZM12.78 5.14L14.36 5.14C14.59 5.14 14.87 5.15 15.09 5.18C15.86 5.26 16.41 5.67 16.41 6.52C16.41 7.31 16.04 7.80 15.19 7.94C14.94 7.98 14.70 7.99 14.46 7.99L12.78 7.99ZM15.34 12.33C15.16 12.35 14.91 12.35 14.69 12.35L12.78 12.35L12.78 9.18L14.60 9.18C14.83 9.18 15.05 9.18 15.33 9.23C16.16 9.32 16.76 9.74 16.76 10.79C16.76 11.73 16.14 12.26 15.34 12.33ZM24.23 3.72C21.27 3.72 19.57 5.75 19.57 8.75C19.57 11.73 21.27 13.78 24.23 13.78C27.19 13.78 28.88 11.73 28.88 8.75C28.88 5.75 27.19 3.72 24.23 3.72ZM24.23 12.60C22.34 12.60 21.22 11.14 21.22 8.75C21.22 6.34 22.34 4.90 24.23 4.90C26.11 4.90 27.23 6.34 27.23 8.75C27.23 11.14 26.11 12.60 24.23 12.60Z"
                  ></path>
                </g>
                <!---->
                <g
                  data-v-423bf9ae=""
                  id="a036845b-f9ee-4170-bdda-e6c8e7e6d03c"
                  transform="matrix(2.142857142857143,0,0,2.142857142857143,-8.659572056361611,-10.87542724609375)"
                  stroke="none"
                  fill="#0698ec"
                >
                  <path
                    d="M4.109 5.141v28.402h4.782V9.922h71.603v32.437H15.916v.008H4.109v4.774h81.166v-42z"
                  ></path>
                </g>
                <!---->
              </svg>
            </a>
            <ul class="menuzord-menu menuzord-right">
              <li :class="{ active: $route.fullPath == '/' }">
                <router-link to="/">Home</router-link>
              </li>
              <li :class="{ active: $route.fullPath == '/places' }">
                <router-link to="/places">Directory</router-link>
              </li>
              <li :class="{ active: $route.fullPath == '/favorites' }">
                <router-link to="/favorites">Favorites</router-link>
              </li>
              <li :class="{ active: $route.fullPath == '/account' }">
                <router-link to="/account">Account</router-link>
              </li>
              <li :class="{ active: $route.fullPath == '/login' }">
                <router-link v-if="!isLoggedIn()" to="/login"
                  >Log In</router-link
                >
                <router-link v-else to="/logout">Log Out</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div class="main-wrapper">
      <router-view />
    </div>

    <!-- FOOTER -->
    <footer
      class="footer-dark"
      style="background-image: url(assets/img/background/bg-footer.jpg)"
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-7 col-xs-12">
            <a class="d-inline-block mb-6" href="index.html">
              <svg
                class="logo-svg"
                data-v-423bf9ae=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 363 90"
                width="140"
                height="44"
              >
                <!----><!----><!---->
                <g
                  data-v-423bf9ae=""
                  id="8e6a1391-75f0-41f4-9a38-326f04acc656"
                  fill="#0698ec"
                  transform="matrix(5.964215028353327,0,0,5.964215028353327,189.81184760227234,-7.186880314530519)"
                >
                  <path
                    class="fill-primay"
                    d="M5.31 3.72C2.59 3.72 0.69 5.75 0.69 8.79C0.69 11.73 2.38 13.78 5.14 13.78C7.66 13.78 9.07 12.33 9.27 10.44L9.28 10.30L7.76 10.30L7.73 10.44C7.46 11.75 6.66 12.60 5.21 12.60C3.50 12.60 2.35 11.12 2.35 8.72C2.35 6.44 3.49 4.90 5.28 4.90C6.73 4.90 7.53 5.73 7.80 7.03L7.83 7.17L9.35 7.17L9.34 7.03C9.14 5.12 7.83 3.72 5.31 3.72ZM16.45 8.41C17.44 8.08 18.03 7.45 18.03 6.36C18.03 5.01 17.16 4.19 15.62 3.98C15.15 3.92 14.84 3.92 14.36 3.92L11.24 3.92L11.24 13.58L14.53 13.58C15.02 13.58 15.34 13.58 15.82 13.51C17.09 13.33 18.38 12.49 18.38 10.72C18.38 9.44 17.71 8.72 16.45 8.41ZM12.78 5.14L14.36 5.14C14.59 5.14 14.87 5.15 15.09 5.18C15.86 5.26 16.41 5.67 16.41 6.52C16.41 7.31 16.04 7.80 15.19 7.94C14.94 7.98 14.70 7.99 14.46 7.99L12.78 7.99ZM15.34 12.33C15.16 12.35 14.91 12.35 14.69 12.35L12.78 12.35L12.78 9.18L14.60 9.18C14.83 9.18 15.05 9.18 15.33 9.23C16.16 9.32 16.76 9.74 16.76 10.79C16.76 11.73 16.14 12.26 15.34 12.33ZM24.23 3.72C21.27 3.72 19.57 5.75 19.57 8.75C19.57 11.73 21.27 13.78 24.23 13.78C27.19 13.78 28.88 11.73 28.88 8.75C28.88 5.75 27.19 3.72 24.23 3.72ZM24.23 12.60C22.34 12.60 21.22 11.14 21.22 8.75C21.22 6.34 22.34 4.90 24.23 4.90C26.11 4.90 27.23 6.34 27.23 8.75C27.23 11.14 26.11 12.60 24.23 12.60Z"
                  ></path>
                </g>
                <!---->
                <g
                  data-v-423bf9ae=""
                  id="a036845b-f9ee-4170-bdda-e6c8e7e6d03c"
                  transform="matrix(2.142857142857143,0,0,2.142857142857143,-8.659572056361611,-10.87542724609375)"
                  stroke="none"
                  fill="#0698ec"
                >
                  <path
                    d="M4.109 5.141v28.402h4.782V9.922h71.603v32.437H15.916v.008H4.109v4.774h81.166v-42z"
                  ></path>
                </g>
                <!---->
              </svg>
            </a>
            <!-- <p class="text-white pt-1 pb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </p> -->
            <ul class="list-unstyled text-white">
              <li class="mb-3">
                <i class="fa fa-envelope mr-3" aria-hidden="true"></i>
                <a class="text-white" href="mailto:info@cboeats.com"
                  >info@cboeats.com</a
                >
              </li>
            </ul>
          </div>

          <div class="col-sm-3 col-xs-12">
            <div class="mb-4 mt-4 mt-md-0">
              <h2 class="h4 text-white">Links</h2>
            </div>
            <ul class="list-unstyled list-gray">
              <li class="mb-3">
                <router-link to="/">Home</router-link>
              </li>
              <li class="mb-3">
                <router-link to="/places">Directory</router-link>
              </li>
              <li class="mb-3">
                <router-link to="/favorites">Favorites</router-link>
              </li>
            </ul>
          </div>

          <div class="col-sm-2 col-xs-12">
            <div class="mb-4 mt-4 mt-md-0">
              <h2 class="h4 text-white">Account</h2>
            </div>
            <ul class="list-unstyled list-gray">
              <li class="mb-3">
                <router-link v-if="!isLoggedIn()" to="/login"
                  >Log In</router-link
                >
                <router-link v-else to="/logout">Log Out</router-link>
              </li>
              <li class="mb-3">
                <router-link to="/createaccount">Create Account</router-link>
              </li>
              <li class="mb-3">
                <router-link to="/account">View Account</router-link>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div class="row">
          <div class="col-sm-7 col-xs-12 align-self-center order-3 order-md-0">
            <p class="copy-right mb-0 pb-4 pb-md-0">
              Copyright &copy; 2020. All Rights Reserved by Colin Klein
            </p>
          </div>

          <div class="col-sm-5 col-xs-12 d-flex align-items-center">
            <div class="ml-md-auto mx-auto mx-md-0 mt-3 mb-5 my-md-0">
              <a
                class="icon-sm icon-default icon-border hover-bg-primary rounded-circle ml-2"
                href="#github"
              >
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              <a
                class="icon-sm icon-default icon-border hover-bg-primary rounded-circle ml-2"
                href="#twitter"
              >
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a
                class="icon-sm icon-default icon-border hover-bg-primary rounded-circle ml-2"
                href="#linkedin"
              >
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style></style>

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
