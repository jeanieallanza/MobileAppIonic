<template>
    <ion-page>
        <ion-content :fullscreen="true" :auto-hide="false" v-for="(p, i) in onboarding" :key="i">
           <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url">
            <div class="container">
                <img src="../assets/logo/logoinvert.png">
            </div>
           </ion-item>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {IonPage, IonContent, IonItem} from '@ionic/vue';
import { ref } from 'vue';

const selectedIndex = ref(0);

const onboarding = [
    {
        url: '/folder/LoginPage',
        title: 'OnBoarding',
    }
];

const path = window.location.pathname.split('folder/')[1];
if (path !== undefined) {
  selectedIndex.value = onboarding.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
}
</script>

<style scoped>
ion-content ion-item{
    --background: var(--ion-color-red);
}
ion-content ion-item .container{
    padding: 10px 20px;
    height: 100vh;
    margin-left: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
ion-content .container img{
    width: 183px;
    height: 197px;
    margin-bottom: 200px;
}
</style>