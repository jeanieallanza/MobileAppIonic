<template>
    <ion-page>
        <ion-content :fullscreen="true" id="received">
            <div class="img">
                <img src="../assets/logo/positive-sign.png">
            </div>
           <div class="content">
            <h1>Order Received!</h1>
            <p>
                Your order <span>No. 19049585</span> has successfully take and now being processed.
                Kindly wait for our notification regarding your order.
            </p>
           </div>
            <ion-footer>
                <ion-button id="btn">Track Order</ion-button>
                <ion-button id="link" router-link="/folder/Homepage">Back to Home</ion-button>
           </ion-footer>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonContent,
    IonButton,
    IonFooter,
} from '@ionic/vue';

export default{
    components:{
        IonPage,
        IonContent,
        IonButton,
        IonFooter,
    }
}
</script>

<style scoped> 
#footer ion-footer ion-buttons#link{
    background-color: #fff;
    padding: 20px 30px;
    color: #d71921;
    font-size: 14px;
    font-weight: 700;
    border-radius: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>