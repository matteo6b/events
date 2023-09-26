import { defineStore } from "pinia";
import router from "../router";
import { logout } from "../services/auth";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: null,
    returnUrl: null,
  }),
  getters: {
    isAuthenticated() {
      return !!this.user;
    },
  },
  actions: {
    async logout() {
      // clear state

      await logout();

      router.push("/login");
    },
  },
});
