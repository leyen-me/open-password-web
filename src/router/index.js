import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/home/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/pages/login/index.vue"),
    },
    {
      path: "/save/:id",
      name: "Save",
      component: () => import("@/pages/home/save.vue"),
    },
    // {
    //     path: '/404',
    //     component: () => import('@/pages/Error/404/index.vue')
    // },
    // {
    //     path: '/:pathMatch(.*)',
    //     redirect: '/404'
    // }
  ],
});

export default router;
