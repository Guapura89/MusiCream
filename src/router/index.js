import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { getAuth } from "firebase/auth";

const routes = [
  {
    path: "/home",
    name: "home",
    meta: { requiresAuth: true },
    component: HomeView,
  },
  {
    path: "/",
    redirect: { name: "signin" },
  },
  {
    path: "/signin",
    name: "signin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SigninView.vue"),
  },

  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignupView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const auth = getAuth();
    const usuario = auth.currentUser;
    console.log("usuario desde router", usuario);
    if (!usuario) {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    next();
  }
});

// const router = new Router({
//   linkExactActiveClass: "link-active",
//   routes,
//   mode: "hash",
//   base: "/",
//   scrollBehavior() {
//     window.scrollTo(0, 0);
//   },
// });

export default router;
