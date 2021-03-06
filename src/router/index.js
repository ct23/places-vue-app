import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Places from '../views/PlacesIndex.vue';
import Place from '../views/PlacesShow.vue';
import Favorites from '../views/Favorites.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/createaccount',
    name: 'Create Account',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/account',
    name: 'Account Info',
    component: () => import('../views/AccountInfo.vue')
  },
  {
    path: '/account/edit',
    name: 'Account Edit',
    component: () => import('../views/AccountEdit.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/Logout.vue')
  },
  {
    path: '/places',
    name: 'Places',
    component: Places
  },
  {
    path: '/places/:id',
    name: 'Place',
    component: Place
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;