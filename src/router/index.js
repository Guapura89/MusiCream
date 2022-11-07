import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
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
