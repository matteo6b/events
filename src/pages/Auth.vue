<script setup>
import {
  IonContent,
  IonPage,
  IonButton,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonImg,
} from "@ionic/vue";
import { onMounted, ref } from "vue";
import { randomString } from "../utils/functions";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import { signInWithIdToken } from "../services/auth";
import { useIonRouter } from "@ionic/vue";
import { Capacitor } from "@capacitor/core";

const ionRouter = useIonRouter();
let loading = ref(false);

onMounted(() => {
  if (!Capacitor.isNativePlatform()) {
    GoogleAuth.initialize({
      clientId:
        "964561140337-l0ogp9jqr6tqjgnv90hp3hn6cia9qo73.apps.googleusercontent.com",
      scopes: ["profile", "email"],
      grantOfflineAccess: true,
    });
  }
});

const login = async () => {
  loading.value = true;
  const response = await GoogleAuth.signIn();
  const { authentication } = response;

  const credentials = {
    token: authentication.idToken,
    provider: "google",
  };

  const data = await signInWithIdToken(credentials);

  if (data) {
    console.log(data);
    loading.value = false;
    ionRouter.push("/", "root");
  }
};
</script>

<template>
  <ion-page v-if="!loading">
    <ion-header>
      <ion-toolbar> </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Events Street</h1>
      <ion-img
        src="https://i0.wp.com/hastaluegomaripuri.com/wp-content/uploads/2019/10/5B10BE60-CF25-44D4-B5AC-DEAD606C5DE7.jpeg?fit=2710%2C1524&ssl=1"
      ></ion-img>

      <ion-button @click="login" expand="block">
        <ion-icon slot="start" src="logo-google.svg"></ion-icon>
        {{ $t("auth.google") }}</ion-button
      >
      <ion-button expand="block">
        <ion-icon slot="start" src="logo-apple.svg"></ion-icon>
        {{ $t("auth.apple") }}
      </ion-button>
    </ion-content>
  </ion-page>
</template>
<style>
ion-icon {
  color: white;
}
</style>
