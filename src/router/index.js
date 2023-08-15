import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/FBView.vue"),
    },
    {
      path: "/google",
      name: "google",
      component: () => import("../views/GoogleView.vue"),
    },
    {
      path: "/pkce",
      name: "pkce",
      component: () => import("../views/PKCE.vue"),
    },
    {
      path: "/userinfo",
      name: "userinfo",
      component: () => import("../views/UserInfo.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      children: [
        {
          path: "callback",
          name: "auth-callback",
          component: () => import("../views/auth/Callback.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
