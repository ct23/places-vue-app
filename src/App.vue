<template>
  <div id="app">
    <!-- Old navbar: -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/places">Places Index</router-link> |
      <router-link to="/favorites">My Favorites</router-link> |
      <router-link v-if="isLoggedIn()" to="/account">Account</router-link
      ><span v-if="isLoggedIn()"> | </span>
      <router-link v-if="!isLoggedIn()" to="/login">Log In</router-link>
      <router-link v-if="isLoggedIn()" to="/logout">Log Out</router-link>
    </div> -->
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
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="140"
                height="44"
              >
                <path
                  class="fill-primay"
                  d="M0 44V0h139.813v44H0zM137.346 2.467H2.467v39.065h134.879V2.467z"
                />
                <path
                  class="fill-primay"
                  d="M120.927 22.389v11.095h-4.566V22.389a371.288 371.288 0 0 0-2.086-2.888 347.047 347.047 0 0 1-2.2-3.053 386.86 386.86 0 0 0-2.201-3.053c-.7-.959-1.395-1.922-2.086-2.888h5.617l5.255 7.287 5.222-7.287h5.649c.002 0-8.604 11.882-8.604 11.882zM98.034 33.484h-4.565V15.069h-6.372v-4.562h17.244v4.562h-6.306v18.415zm-21.908 0H71.56V15.069h-6.372v-4.562h17.244v4.562h-6.306v18.415zm-17.425-1.789c-.69.623-1.511 1.116-2.463 1.477-.953.361-1.987.542-3.104.542-1.007 0-1.982-.143-2.923-.427a10.814 10.814 0 0 1-2.661-1.214h.033a9.928 9.928 0 0 1-1.577-1.215 18.73 18.73 0 0 1-.953-.952l3.416-3.151c.153.197.399.432.739.706.339.274.728.537 1.166.788.44.253.902.467 1.38.64.481.175.941.262 1.379.262.372 0 .744-.044 1.117-.131.359-.082.703-.22 1.018-.41.305-.185.564-.437.755-.739.197-.306.296-.689.296-1.149 0-.175-.06-.366-.181-.574-.12-.208-.329-.432-.624-.673-.296-.241-.706-.498-1.232-.771a20.567 20.567 0 0 0-1.971-.87 25.42 25.42 0 0 1-2.562-1.132 8.896 8.896 0 0 1-2.053-1.428 5.903 5.903 0 0 1-1.347-1.871c-.317-.7-.476-1.51-.476-2.429 0-.94.175-1.822.526-2.642a6.21 6.21 0 0 1 1.494-2.133c.646-.602 1.423-1.072 2.332-1.412.908-.339 1.911-.509 3.006-.509.591 0 1.22.077 1.889.23.668.153 1.319.35 1.954.591a12.95 12.95 0 0 1 1.79.837c.558.317 1.023.64 1.396.968l-2.825 3.545a15.71 15.71 0 0 0-1.281-.788 10.316 10.316 0 0 0-1.281-.558 4.311 4.311 0 0 0-1.478-.263c-.919 0-1.637.181-2.151.542-.515.361-.772.881-.772 1.559 0 .307.093.586.279.837.186.252.438.482.756.689.348.225.717.417 1.1.574.416.176.854.34 1.314.492 1.314.504 2.42 1.013 3.318 1.526.898.514 1.62 1.062 2.168 1.642s.936 1.204 1.166 1.871c.23.668.345 1.395.345 2.183 0 .963-.197 1.871-.591 2.724a6.803 6.803 0 0 1-1.626 2.216zM34.839 10.507h4.532v22.977h-4.532V10.507zm-20.036 0h4.566v18.415h9.263v4.563H14.803V10.507z"
                />
              </svg>
            </a>
            <p class="text-white pt-1 pb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </p>
            <ul class="list-unstyled text-white">
              <li class="mb-3">
                <i class="fa fa-phone mr-3" aria-hidden="true"></i>
                <a class="text-white" href="tel:[88] 657 524 332"
                  >[88] 657 524 332</a
                >
              </li>
              <li class="mb-3">
                <i class="fa fa-envelope mr-3" aria-hidden="true"></i>
                <a class="text-white" href="mailto:info@listy.com"
                  >info@listy.com</a
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
                <a href="index.html">Home</a>
              </li>
              <li class="mb-3">
                <a href="sign-up.html">Create Account</a>
              </li>
              <li class="mb-3">
                <a href="login.html">Login</a>
              </li>
              <li class="mb-3">
                <a href="add-listings.html">Add Listing</a>
              </li>
              <li class="mb-3">
                <a href="edit-listings.html">Edit Listing</a>
              </li>
            </ul>
          </div>

          <div class="col-sm-2 col-xs-12">
            <div class="mb-4 mt-4 mt-md-0">
              <h2 class="h4 text-white">Company</h2>
            </div>
            <ul class="list-unstyled list-gray">
              <li class="mb-3">
                <a href="contact-us.html">Contact Us</a>
              </li>
              <li class="mb-3">
                <a href="terms-of-services.html">Terms and Conditions</a>
              </li>
              <li class="mb-3">
                <a href="how-it-works.html">How It Works</a>
              </li>
              <li class="mb-3">
                <a href="payment-process.html">Payment</a>
              </li>
              <li class="mb-3">
                <a href="pricing-table.html">Pricing</a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div class="row">
          <div class="col-sm-7 col-xs-12 align-self-center order-3 order-md-0">
            <p class="copy-right mb-0 pb-4 pb-md-0">
              Copyright &copy; 2019. All Rights Reserved by
              <a href="http://www.iamabdus.com/" target="_blank"> Abdus</a>
            </p>
          </div>

          <div class="col-sm-5 col-xs-12 d-flex align-items-center">
            <div class="ml-md-auto mx-auto mx-md-0 mt-3 mb-5 my-md-0">
              <a
                class="icon-sm icon-default icon-border hover-bg-primary rounded-circle ml-2"
                href="#facebook"
              >
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a
                class="icon-sm icon-default icon-border hover-bg-primary rounded-circle ml-2"
                href="#twitter"
              >
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a
                class="icon-sm icon-default icon-border hover-bg-primary rounded-circle ml-2"
                href="#pinterest"
              >
                <i class="fa fa-pinterest-p" aria-hidden="true"></i>
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
  data: function() {
    return {
      userLocation: "",
    };
  },
  methods: {
    // Returns true or false depending on jwt in localstorage
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    },
    getUserId: function() {
      return localStorage.getItem("user_id");
    },
  },
  mounted() {},
};
</script>
