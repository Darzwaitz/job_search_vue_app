import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "@/views/HomeView.vue";
// import JobResultsView from "@/views/JobResultsView.vue";
// import JobView from "@/views/JobView.vue";

const HomeView = () => import("@/views/HomeView.vue");
const JobResultsView = () => import("@/views/JobResultsView.vue");
const JobView = () => import("@/views/JobView.vue");

// routes sent into router
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultsView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
