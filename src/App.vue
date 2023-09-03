<template>
  <ion-app>
    <ion-split-pane content-id="main-content">

      <ion-menu content-id="main-content" type="overlay">
        <!--sidebar menu content start-->
        <ion-content id="sidebar">
          <!--header start-->
            <ion-header>
            <ion-item lines="none">
              <ion-list slot="start">
                <img class="profile" src="./assets/logo/profile.png">
              </ion-list>
              <ion-list>
                <img class="crown" src="./assets/logo/crown-icon.png">
              </ion-list>
              <ion-list>
                <ion-menu-toggle router-link="/folder/loyaltypoints">0 Points</ion-menu-toggle>
              </ion-list>
              <ion-list slot="end">
                <ion-menu-toggle>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </ion-menu-toggle>
              </ion-list>
            </ion-item>
            <ion-title>Chou Tzuyu</ion-title>
            <ion-note id="notes">+63 912 345 6789</ion-note>
          </ion-header>
        <!--header end-->

          <!--sidebar menu start-->
          <div id="nav-link">
            <ion-menu-toggle>
              <ion-item router-link="/folder/Homepage" class="active" lines="none" id="items">
                <img src="./assets/logo/Logo.png">
                <ion-label>Home</ion-label>
              </ion-item>
              <ion-item router-link="/folder/Orderpage" lines="none" id="items">
                <ion-icon name="fast-food-sharp"></ion-icon>
                <ion-label>Order Now</ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-icon name="notifications-sharp"></ion-icon>
                <ion-label>Notifications</ion-label>
                <ion-badge slot="end" color="warning">4</ion-badge>
              </ion-item>
              <ion-item lines="none" id="items">
                <ion-icon name="heart-sharp"></ion-icon>
                <ion-label>Favorites</ion-label>
              </ion-item>
              <ion-item lines="none" id="items">
                <ion-icon name="storefront-sharp"></ion-icon>
                <ion-label>Store Locator</ion-label>
              </ion-item>
              <ion-item lines="none" id="items">
                <ion-icon name="help-circle-sharp"></ion-icon>
                <ion-label>FAQ's</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </div>
          
          <!--label content-->
          <div id="nav-label">
            <ion-list>
            <ion-item lines="none">
              <ion-icon name="bag-remove-sharp"></ion-icon>
              <ion-label>My Orders</ion-label>
              <ion-badge slot="end" color="warning">3</ion-badge>
            </ion-item>
            <ion-item lines="none">
              <ion-icon name="person-sharp"></ion-icon>
              <ion-label>My Account</ion-label>
            </ion-item>
            <ion-item lines="none">
              <ion-icon name="heart-sharp"></ion-icon>
              <ion-label>My Favorites</ion-label>
            </ion-item>
            <ion-item lines="none">
              <ion-icon name="location-sharp"></ion-icon>
              <ion-label>Order Tracker</ion-label>
            </ion-item>
            <ion-item lines="none">
              <ion-icon name="timer-sharp"></ion-icon>
              <ion-label>Order History</ion-label>
            </ion-item>
          </ion-list>
          </div>

          <!--sidebar button start-->
          <div id="button">
          <ion-footer>
            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-button id="danger" @click="selectedIndex = i" router-direction="root" :router-link="p.url">{{ p.title }}</ion-button>
            </ion-menu-toggle>
          </ion-footer>
        </div>
        <!--sidebar button end-->

        </ion-content>
        <!--sidebar menu content end-->

      </ion-menu>
      <!--routing every pages-->
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
  IonHeader,
  IonTitle,
  IonFooter,
  IonBadge,
  IonButton,
} from '@ionic/vue';

import { ref } from 'vue';

const selectedIndex = ref(0);

const appPages = [
{
  title: 'Logout',
  url: '/folder/OnBoarding',
}
];


const path = window.location.pathname.split('folder/')[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex((page)  => page.title.toLowerCase() === path.toLowerCase());
}
</script>
