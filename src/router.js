import { createRouter, createWebHistory } from "@ionic/vue-router";
import useSupabase from "./composables/UseSupabase";


const { auth } = useSupabase();

let localUser;

const routes = [
  {
    path: "/login",
    component: () => import("./pages/Auth.vue"),
    name: "Login",
  },
  {
    path: "/home",
    component: () => import("./pages/Home.vue"),
    name: "Home",
    meta: { requiresAuth: true },
  },
  {
    path: "/",
    redirect: "/home",
  },

  {
    path: "/addEvent",
    component: () => import("./pages/AddEvent.vue"),
    name: "AddEvent",
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

async function getUser(next) {
  localUser = await auth.getSession();
  console.log(localUser);
  if (localUser.data.session == null) {
    next("/login");
  } else {
    next();
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getUser(next);
  } else {
    next();
  }
});

export default router;
