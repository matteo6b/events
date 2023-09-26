<script setup>
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonImg,
  IonItem,
  IonThumbnail,
} from "@ionic/vue";
import { image } from "ionicons/icons";
import useFile from "../composables/UseFile";
import { useRouter } from "vue-router";
import { FilePicker } from "@capawesome/capacitor-file-picker";

const { photoPath } = useFile();

const router = useRouter();

const closeModal = () => {
  router.push({ name: "Home" });
};

  const pickMedia = async () => {
      const result  = await FilePicker.pickImages({
        multiple: true,
    
      });


      
    // photoPath.value = Capacitor.convertFileSrc(result.files[0].path);
    };




</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add Event</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="closeModal()">X</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-title class="addCrop">Add cartel:</ion-title>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="button-img" >
            <ion-button @click="pickMedia()" class="upload-image">
              <ion-icon :icon="image"></ion-icon>
            </ion-button>
          </ion-col>
      <!--    <ion-col v-else>
            <ion-item>
              <ion-thumbnail slot="center">
                <ion-img :src="photoPath.value" />
              </ion-thumbnail>
              <p>{{ photoPath.value }}</p>
            </ion-item>
          </ion-col>-->
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.upload-image {
  height: 120%;
}
.button-img {
  text-align: center;
}
ion-icon {
  font-size: 160px;
}

.upload-image {
  width: 100%;
}
.addCrop {
  font-size: 30px;
  font-weight: bold;
}
</style>
