<template>
    <ion-page>
        <ion-content :fullscreen="true">
           <ion-item @click.prevent="onLoginPage()">
            <div class="container">
                <img src="../assets/logo/logoinvert.png">
            </div>
           </ion-item>
        </ion-content>
    </ion-page>
</template>

<script>
import {IonPage, IonContent, IonItem} from '@ionic/vue';

export default{
 components:{
    IonPage,
    IonContent,
 },
 methods:{
        onLoginPage(){
            this.$router.push('/folder/Loginpage');
        }
    },
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