<script setup>
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";

import { useAuthStore } from "../../stores/auth";


import {  person } from "ionicons/icons";

// Use necessary composables
const { logout } = useAuthStore();

const signOutLocal = async () => {
  try {
    await logout();
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <ion-header>
    <ion-toolbar>
      <ion-grid>
        <ion-row>
          <ion-col> <ion-title>In Live</ion-title></ion-col>
          <ion-col>
            <ion-button @click="signOutLocal()" expand="block">
              <ion-icon slot="start" :icon="person"  ></ion-icon>
              {{ $t("auth.signOut") }}</ion-button
            ></ion-col>
        </ion-row>
      </ion-grid>
    </ion-toolbar>
  </ion-header>
</template>
