<template>
    <ion-page>
     <ion-header :translucent="true" id="login">
       <ion-toolbar>
         <ion-title>
             <img src="../assets/logo/Logo.png">
         </ion-title>
       </ion-toolbar>
     </ion-header>
     <!--header ends here-->
 
 
     <ion-content :fullscreen="true">
         <div class="login-content">
             <h3>Bonjour!</h3>
             <p>Welcome to all new FastFood mobile app. kindly login your account. Thank you!</p>
 
             <div class="login">
                 <ion-input type="email" label="Email Address" label-placement="floating" fill="outline"></ion-input>
             </div>
             
             <div class="login">
                 <ion-input type="password" label="Password" label-placement="floating" fill="outline"></ion-input>
                 <ion-text id="forgot">Forgot?</ion-text>
             </div>
 
     
             <div class="login">
                 <ion-button @click="() => router.push('/folder/Homepage')" expand="block" shape="round">Login</ion-button>
                 <ion-text id="guest">Login as Guest</ion-text>
             </div>
         </div>
 
         <ion-footer id="login">
         <p class="createone">Don't have an account yet? <span>Create</span></p>
     </ion-footer>
     </ion-content>
    </ion-page>
 </template>
 
 <script lang="ts">
 import {
     IonHeader,
     IonToolbar,
     IonTitle,
     IonContent,
     IonPage,
     IonList,
     IonItem,
     IonInput,
     IonLabel,
     IonText,
     IonButtons,
     IonFooter,
     IonButton,
 } from '@ionic/vue'
 import { useRouter } from 'vue-router';
 
 export default{
     components:{
         IonHeader,
         IonToolbar,
         IonTitle,
         IonContent,
         IonPage,
         IonList,
         IonItem,
         IonInput,
         IonLabel,
         IonText,
         IonButtons,
         IonFooter,
         IonButton,
     },
     setup() {
       const router = useRouter();
       return { router };
     },
 }
 </script>
 
 