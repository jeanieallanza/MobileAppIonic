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
             <ion-title>Our Foods</ion-title>
            </ion-list>
            <ion-list slot="end">
              <ion-icon name="bag-handle"></ion-icon>
            </ion-list>
          </ion-item>
        </ion-toolbar>
      </ion-header>
      <!--header ends here-->
  
      <!--main content starts here-->
  
      <ion-content :fullscreen="true">
  
        <div id="order">
  
          <div class="content">
        <!--search button-->
        <ion-buttons>
        <ion-icon slot="start" name="search"></ion-icon>
        <p>try our new Beef Bibimbowl</p>
        <img src="../assets/logo/filter.png">
        </ion-buttons>
      </div>
  
        <!--button content-->
        <div class="button">
         <swiper id="swiper" space-between="5" :slides-per-view="3.9" :loop="true">
          <swiper-slide>
            <ion-button>All</ion-button>
          </swiper-slide>
          <swiper-slide>
            <ion-button id="disable">Breakfast</ion-button>
          </swiper-slide>
            <swiper-slide>
            <ion-button id="disable">Chicken</ion-button>
          </swiper-slide>
          <swiper-slide>
            <ion-button id="disable">Seafood</ion-button>
          </swiper-slide>
          <swiper-slide>
            <ion-button id="disable">Breakfast</ion-button>
          </swiper-slide>
          <swiper-slide>
            <ion-button id="disable">Chicken</ion-button>
          </swiper-slide>
         </swiper>
        </div>
  
        <div id="swipe">
  
          <!--Our Foods Content Start-->
          <div id="popular">
          <ion-item lines="none">
            <ion-list slot="start">
              <h2>Most Popular</h2>
            </ion-list>
          </ion-item>
  
          <div class="item">
            <ion-card @click="() => router.push('/folder/OrderDetails')">
               <div class="img">
                <img src="../assets/images/veggies.png">
               </div>
  
               <div class="qty">
                <ion-row>
                  <ion-col>
                    <ion-card-title>Steak Fries Veggies</ion-card-title>
                    <ion-card-subtitle>Meat</ion-card-subtitle>
                  </ion-col>
                </ion-row>
               </div>
  
               <div class="price">
                <ion-row>
                  <ion-col size="auto">
                    <h3>P 178</h3>
                  </ion-col>
                  <ion-col size="auto">          
                    <ion-icon name="star-sharp"></ion-icon>
                    <ion-icon name="star-sharp"></ion-icon>
                    <ion-icon name="star-sharp"></ion-icon>
                    <ion-icon name="star-sharp"></ion-icon>
                    <ion-icon name="star-half-sharp"></ion-icon>
                  </ion-col>
                </ion-row>
               </div>
            </ion-card>
  
             <ion-card>
               <div class="img">
                <img src="../assets/images/salad.png">
               </div>
  
               <div class="qty">
                <ion-row>
                  <ion-col>
                    <ion-card-title>Chicken Salad</ion-card-title>
                    <ion-card-subtitle>Chicken</ion-card-subtitle>
                  </ion-col>
                </ion-row>
               </div>
  
               <div class="price">
                <ion-row>
                  <ion-col size="auto">
                    <h3>P 172</h3>
                  </ion-col>
                  <ion-col size="auto">          
                    <ion-icon name="star-sharp"></ion-icon>
                    <ion-icon name="star-sharp"></ion-icon>
                    <ion-icon name="star-sharp"></ion-icon>
                    <ion-icon name="star-sharp"></ion-icon>
                    <ion-icon name="star-half-sharp"></ion-icon>
                  </ion-col>
                </ion-row>
               </div>
            </ion-card>
          </div>
  
  
          <div class="item">
          <ion-card>
            <div class="img">
              <img src="../assets/images/sorvetes.png">
            </div>
  
            <div class="qty">
              <ion-row>
                <ion-col>
                  <ion-card-title>Sorvetes Primavera</ion-card-title>
                  <ion-card-subtitle>Dessert</ion-card-subtitle>
                </ion-col>
              </ion-row>
            </div>
  
            <div class="price">
              <ion-row>
                <ion-col size="auto">
                  <h3>P 185</h3>
                </ion-col>
                <ion-col size="auto">          
                  <ion-icon name="star-sharp"></ion-icon>
                  <ion-icon name="star-sharp"></ion-icon>
                  <ion-icon name="star-sharp"></ion-icon>
                  <ion-icon name="star-sharp"></ion-icon>
                  <ion-icon name="star-half-sharp"></ion-icon>
                </ion-col>
              </ion-row>
            </div>
          </ion-card>
  
  
          <ion-card>
            <div class="img">
              <img src="../assets/images/chicken.png">
            </div>
  
            <div class="qty">
              <ion-row>
                <ion-col>
                  <ion-card-title>Fried Chicken</ion-card-title>
                  <ion-card-subtitle>Chicken</ion-card-subtitle>
                </ion-col>
              </ion-row>
            </div>
  
            <div class="price">
              <ion-row>
                <ion-col size="auto">
                  <h3>P 175</h3>
                </ion-col>
                <ion-col size="auto">          
                  <ion-icon name="star-sharp"></ion-icon>
                  <ion-icon name="star-sharp"></ion-icon>
                  <ion-icon name="star-sharp"></ion-icon>
                  <ion-icon name="star-sharp"></ion-icon>
                  <ion-icon name="star-half-sharp"></ion-icon>
                </ion-col>
              </ion-row>
            </div>
          </ion-card>
          </div>
  
          <div class="item">
            <ion-card @click="() => router.push('/folder/OrderDetails')">
               <div class="img">
                <img src="../assets/images/veggies.png">
               </div>
  
               <div class="qty">
                <ion-row>
                  <ion-col>
                    <ion-card-title>Steak Fries Veggies</ion-card-title>
                    <ion-card-subtitle>Meat</ion-card-subtitle>
                  </ion-col>
                </ion-row>
               </div>
  
               <div class="price">
                <ion-row>
                  <ion-col size="auto">
                    <h3>P 178</h3>
                  </ion-col>
                  <ion-col size="auto">          
                    <ion-icon name="star-sharp"></ion-icon>
                    <ion-icon name="star-sharp"></ion-icon>
                    <ion-icon name="star-sharp"></ion-icon>
                    <ion-icon name="star-sharp"></ion-icon>
                    <ion-icon name="star-half-sharp"></ion-icon>
                  </ion-col>
                </ion-row>
               </div>
            </ion-card>
  
             <ion-card>
               <div class="img">
                <img src="../assets/images/salad.png">
               </div>
  
               <div class="qty">
                <ion-row>
                  <ion-col>
                    <ion-card-title>Chicken Salad</ion-card-title>
                    <ion-card-subtitle>Chicken</ion-card-subtitle>
                  </ion-col>
                </ion-row>
               </div>
  
               <div class="price">
                <ion-row>
                  <ion-col size="auto">
                    <h3>P 172</h3>
                  </ion-col>
                  <ion-col size="auto">          
                    <ion-icon name="star-sharp"></ion-icon>
                    <ion-icon name="star-sharp"></ion-icon>
                    <ion-icon name="star-sharp"></ion-icon>
                    <ion-icon name="star-sharp"></ion-icon>
                    <ion-icon name="star-half-sharp"></ion-icon>
                  </ion-col>
                </ion-row>
               </div>
            </ion-card>
          </div>
  
          </div>
          <!--Our Foods COntent End-->
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
    IonCardTitle,
    IonCardSubtitle,
    IonRow,
  } from '@ionic/vue';
  
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { useRouter } from 'vue-router';
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
      Swiper,
      SwiperSlide,
      IonFooter,
      IonCard,
      IonCol,
      IonCardTitle,
      IonCardSubtitle,
      IonRow,
    },
    setup() {
        const router = useRouter();
        return { router };
      },
  }
  </script>
  
  