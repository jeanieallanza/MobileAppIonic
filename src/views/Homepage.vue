<template>
<ion-page>
  <!--header start here-->
  <ion-header :translucent="true" id="homepage">
    <ion-toolbar>
      <ion-item lines="none">
    <ion-list slot="start">
    <ion-buttons>
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    </ion-list>
    <ion-list>
    <img class="crown" src="../assets/logo/crown-icon.png">
    </ion-list>
    <ion-list>
    <ion-text>0 Points</ion-text>
      <ion-menu-toggle>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </ion-menu-toggle>
    </ion-list>
    <ion-list slot="end">
      <img class="profile" src="../assets/logo/profile.png">
    </ion-list>
      </ion-item>
    </ion-toolbar>
  </ion-header>
  <!--header ends here-->
  
  <!--main content starts here-->
  
  <ion-content :fullscreen="true">
    <div id="home">
    <!--main text-->
    <ion-item lines="none">
        <img class="logo" src="../assets/logo/Logo.png">
      <ion-list>
      <ion-note>Anneonyong, Chou!</ion-note>
        <p>What do you want to eat?</p>
      </ion-list>
    </ion-item>
  
    <!--search button-->
    <ion-button>
      <ion-icon slot="start" name="search"></ion-icon>
      <p>try our new Steak Fried Veggies</p>
    </ion-button>
    </div>
  
    <!--special offers content-->
    <div id="swipe">
      <ion-item lines="none">
        <ion-list slot="start">
          <h2>Special Offers!</h2>
        </ion-list>
        <ion-list slot="end">
          <p>View All</p>
        <ion-menu-toggle>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </ion-menu-toggle>
        </ion-list>
      </ion-item>
  
      <ion-item lines="none">
        <swiper  space-between="10" :slides-per-view="1.3" :loop="true">
          <swiper-slide>
            <img class="swipe-img" src="../assets/images/special-offers1.png">
          </swiper-slide>
          <swiper-slide>
            <img class="swipe-img" src="../assets/images/special-offers1.png">
          </swiper-slide>
        </swiper> 
      </ion-item>
    </div>
  
    <!--category content-->
    <div id="swipe">
      <ion-item lines="none">
        <ion-list slot="start">
          <h2>Category</h2>
        </ion-list>
      </ion-item>
      <ion-item lines="none">
        <swiper @ionSlideDidChange="onSlideChange" space-between="5" :slides-per-view="1.8" :loop="true">
          <swiper-slide>
            <ion-card>
              <img src="../assets/images/category1.png">
              <div class="card-item">
                <h6 class="text">Chicken</h6>
                <p>9 Recipes</p>
              </div>
            </ion-card>
          </swiper-slide>
          <swiper-slide>
            <ion-card>
              <img src="../assets/images/category1.png">
              <div class="card-item">
              <h6 class="text">Sea Foods</h6>
              <p>6 Recipes</p>
              </div>
            </ion-card>
          </swiper-slide>
          <swiper-slide>
            <ion-card>
              <img src="../assets/images/category1.png">
              <div class="card-item">
                <h6 class="text">Chicken</h6>
                <p>9 Recipes</p>
              </div>
            </ion-card>
          </swiper-slide>
        </swiper>
      </ion-item> 
    </div>
  
    <!--what's new content-->
    <div id="swipe">
      <ion-item lines="none">
        <ion-list slot="start">
          <h2>What's New?</h2>
        </ion-list>
      </ion-item>
      <ion-item lines="none" id="new">
        <img src="../assets/images/whatsnew-img.png">
      </ion-item>
    </div>
  
    <!--most popular content-->
    <div id="popular">
      <ion-item lines="none">
        <ion-list slot="start">
          <h2>Most Popular</h2>
        </ion-list>
      </ion-item>
  
    <div class="item">
      <ion-card>
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
  </div>
</ion-content>
  
  <!--footer content-->
  <div id="footer">
    <ion-footer>
      <ion-button  @click="() => router.push('/folder/Orderpage')" :fullscreen="true" id="danger">Order Now!</ion-button>
    </ion-footer>
  </div>
  <!--main content ends here-->
</ion-page>
  </template>
  
<script lang="ts">
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
    IonRow,
    IonCol,
    IonCardTitle,
    IonCardSubtitle,
    IonGrid,
} from '@ionic/vue';
  
import { Swiper, SwiperSlide } from 'swiper/vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
  
export default defineComponent({
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
    IonRow,
    IonCol,
    IonCardTitle,
    IonCardSubtitle,
    IonGrid,
},
  setup() {
    const router = useRouter();
    const slides = ref();
    const onSlideChange = (swiper: any) => {
      slides.value = swiper;
    }
    return {
      router, onSlideChange,
    };
    },
})
</script>
