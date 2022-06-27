import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (AboutView.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/resume",
    name: "resume",
    component: () => import("../views/ResumeView.vue"),
  },
  {
    path: "/development",
    name: "dev-work",
    component: () => import("../views/DevelopmentView.vue"),
  },
  {
    path: "/design",
    name: "design-work",
    component: () => import("../views/DesignWorkView.vue"),
  },
  {
    path: "/design/:routeName",
    name: "design-feature",
    component: () => import("../views/DesignFeatureView.vue"),
    props: true,
  },
  { path: "/:notfound(.*)", name: "404", component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
