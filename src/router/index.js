import Vue from "vue";
import VueRouter from "vue-router";
import Auth from '../views/Auth.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    alias: '/',
    name: "Auth",
    component: Auth,
    beforeEnter: (to, from, next) => {
      console.log(to);
      console.log(from);
      console.log(next);
      if (!localStorage.getItem('isUserLoggedIn')) {
        next();
      } else {
        next({name: 'GitUsers'});
      }
    }
  },
  {
    path: "/login",
    name: "Auth",
    component: Auth,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('isUserLoggedIn')) {
        next();
      } else {
        next({name: 'GitUsers'});
      }
    }
  },
  {
    path: "/signup",
    name: "Auth",
    component: Auth,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('isUserLoggedIn')) {
        next();
      } else {
        next({name: 'GitUsers'});
      }
    }
  },
  {
    path: "/users",
    name: "GitUsers",
    component: () => import(/* webpackChunkName: "GitUsers" */ "../views/GitUsers.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('isUserLoggedIn') && localStorage.getItem('isUserLoggedIn') == 'true') {
        next();
      } else {
        next({name: 'Auth'});
      }
    }
  },
  {
    path: "/details/:name",
    name: "UserDetails",
    component: () => import(/* webpackChunkName: "UserDetails" */ "../views/UserDetails.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('isUserLoggedIn') && localStorage.getItem('isUserLoggedIn') == 'true') {
        next();
      } else {
        next({name: 'Auth'});
      }
    }
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
