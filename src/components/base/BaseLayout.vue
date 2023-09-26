<script setup>
import Header from "./Header.vue";
import Menu from "./Menu.vue";
import { IonPage, IonContent } from "@ionic/vue";
</script>


<template>
  <ion-page>
    <Header />

    <ion-content>
      <slot />
    </ion-content>

    <Menu />
  </ion-page>
</template>
