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
 
             <form @submit.prevent="onloggedIn">
                <div class="login">
                 <ion-input type="email" v-model="email" label="Email Address" label-placement="floating" fill="outline"></ion-input>
             </div>
             
             <div class="login">
                 <ion-input type="password" v-model="password" label="Password" label-placement="floating" fill="outline"></ion-input>
                 <ion-text id="forgot">Forgot?</ion-text>
             </div>
 
     
             <div class="login">
                 <ion-button type="submit" expand="block" shape="round">Login</ion-button>
                 <ion-text id="guest">Login as Guest</ion-text>
             </div>
             </form>
         </div>
 
         <ion-footer id="login">
         <p class="createone">Don't have an account yet? <span>Create</span></p>
     </ion-footer>
     </ion-content>
    </ion-page>
 </template>
 
 <script>
 import axios from 'axios'

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
     data() {
        return{
            email: '',
            password: '',
        };
   },
   methods: {
     onloggedIn (){
        axios.post('https://psi-exam-api.praxxys.dev/api/auth/login',
        {email: this.email, password: this.password},
        )
        .then((response) => {
            this.$router.push('/folder/Homepage');
            console.log(response);
        })
     },
   },

 }
 </script>
 
 