<template>
    <ion-page>
      <!--header start here-->
      <ion-header :translucent="true" id="header">
        <ion-toolbar>
          <ion-item lines="none">
            <ion-list slot="start">
              <ion-buttons>
                <ion-menu-button></ion-menu-button>
              </ion-buttons>
            </ion-list>
            <ion-list>
             <ion-title>Loyalty Points</ion-title>
            </ion-list>
          </ion-item>
        </ion-toolbar>
      </ion-header>
      <!--header ends here-->
  
      <!--main content starts here-->
  
      <ion-content :fullscreen="true">
        <div class="loyalty">
            <div class="tier">
                <ion-row class="ion-justify-content-between">
                    <ion-col size="auto">
                        <img src="../assets/logo/crown-icon.png">
                    </ion-col>
                    <ion-col>
                        <h3>Beginner Tier</h3>
                    </ion-col> 
                    <ion-col size="auto" id="btn">
                        <p>View All</p>
                        <ion-menu-toggle>
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                        </ion-menu-toggle>
                    </ion-col>
                </ion-row>
            </div>

            <div class="text">
              <p>Earn points by purchasing from our store. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
            </div>

            <div class="progress">
                <div class="circle">
                  <h1>0 <span>/</span> <span>160</span> </h1>
                </div>
            </div>

            <div class="reward">
              <ion-row class="ion-justify-content-between">
                <ion-col size="auto">
                  <h2>Rewards</h2>
                </ion-col>
                <ion-col size="auto" id="btn">
                  <p>How it Works</p>
                  <ion-menu-toggle>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                  </ion-menu-toggle>
                </ion-col>
              </ion-row>
            </div>

            <div class="button">
              <ion-grid>
                <ion-row>
                  <ion-col size="auto">
                    <ion-button>All</ion-button>
                  </ion-col>
                  <ion-col size="auto">
                    <ion-button id="beginner">Beginner</ion-button>
                  </ion-col>
                  <ion-col size="auto">
                    <ion-button id="inter">Intermediate</ion-button>
                  </ion-col>
                  <ion-col size="auto">
                    <ion-button id="loyal">Loyal</ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </div>

            <div class="item">
              <ion-card>
                <ion-grid>
                  <ion-row>
                    <ion-col size="auto">
                      <img src="../assets/images/veggies.png">
                    </ion-col>
                    <ion-col>
                      <ion-card-title>Steak Fries Veggies</ion-card-title>
                      <ion-card-subtitle>Meat</ion-card-subtitle>

                      <div class="points">
                        <ion-row>
                          <ion-col size="auto">
                            <img src="../assets/logo/crown-icon.png">
                          </ion-col>
                          <ion-col size="auto">
                            <span>20 Points</span>
                          </ion-col>
                        </ion-row>
                      </div>

                    </ion-col>
                  </ion-row>
                </ion-grid>
              </ion-card>
            </div>
        </div>
      </ion-content>
      <!--main content ends here-->
    </ion-page>
  </template>
  
  <script>
  import 
  {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar, 
    IonList, 
    IonItem,
    IonButtons,
    IonMenuButton,
    IonText,
    IonMenuToggle,
    IonIcon,
    IonNote,
    IonLabel,
    IonButton,
    IonFooter,
    IonCard,
    IonCol,
    IonRow,
    IonGrid,
    IonCardTitle,
    IonCardSubtitle,
  } from '@ionic/vue';
  export default{
    components:{
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonList,
      IonItem,
      IonButtons,
      IonMenuButton,
      IonText,
      IonMenuToggle,
      IonIcon,
      IonNote,
      IonLabel,
      IonButton,
      IonFooter,
      IonCard,
      IonCol,
      IonRow,
      IonGrid,
      IonCardTitle,
      IonCardSubtitle,
    },
  }
</script>