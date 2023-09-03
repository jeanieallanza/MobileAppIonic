<template>
    <!--Modal-->
    <ion-page>
        <ion-content>
        <div id="card">
            <img src="../assets/logo/positive-sign.png">
              <h4>Succesfully Added!</h4>
              <p>What do you want to do now?</p>
              <ion-button id="checkout" href="/folder/OrderSummary">Proceed to Checkout</ion-button>
              <ion-button id="more">Add More</ion-button>
         </div>  
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {
    IonPage,
    IonContent,
    IonButton,
} from '@ionic/vue';
import {defineComponent } from 'vue';
export default defineComponent({
    name: 'ModalDetails',
    components:{
    IonPage,
    IonContent,
    IonButton,
    },
})
</script>