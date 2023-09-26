<script setup>
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  
} from "@ionic/vue";
 import { useRouter } from 'vue-router';

import { home, add, person } from "ionicons/icons";
 
const router = useRouter();


</script>

<template>

  <ion-tabs>
    <ion-router-outlet></ion-router-outlet>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home" href="/home">
        <ion-icon :icon="home" color="black" />
      </ion-tab-button>

      <ion-tab-button tab="radio"  @click="() => router.push('/addEvent')" >
        <ion-icon :icon="add" color="black" />
      </ion-tab-button>

      <ion-tab-button tab="library" href="/library">
        <ion-icon :icon="person"  color="black" />
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>

</template>
