import Vue from "vue";
import VueRouter from "vue-router";
import Auth from '../views/Auth.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    alias: '/',
    name: "Auth",
    component: Auth
  },
  {
    path: "/login",
    name: "Auth",
    component: Auth
  },
  {
    path: "/signup",
    name: "Auth",
    component: Auth
  },
  {
    path: "/users",
    name: "GitUsers",
    component: () => import(/* webpackChunkName: "GitUsers" */ "../views/GitUsers.vue")
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
