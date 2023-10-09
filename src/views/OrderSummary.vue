<template>
    <ion-page>
    
      <!--header start here-->
      <ion-header :translucent="true" id="details">
        <ion-toolbar>
          <ion-item lines="none">
            <ion-list slot="start">
              <ion-buttons>
                <ion-menu-toggle>
                  <ion-icon name="chevron-back-outline"></ion-icon>
                </ion-menu-toggle>
              </ion-buttons>
            </ion-list>
            <ion-list>
               <h1>Order Summary</h1>
            </ion-list>
          </ion-item>
      </ion-toolbar>
        </ion-header>
      <!--header ends here-->
    
    
      <!--Main content start-->
      <ion-content :fullscreen="true">
    
      <div id="summary">
    
         <!--User info-->
      <div class="details">
        <ion-card>
          <ion-row>
            <ion-col size="11">
              <ion-card-title>Chou Tzuyu</ion-card-title>
              <ion-card-subtitle>+63912345678</ion-card-subtitle>
              <ion-note>chou.tzuyu@gmail.com</ion-note>
            </ion-col>
          </ion-row>
        </ion-card>
        <div class="dots">
          <ion-row>
            <ion-col>
             <ion-button id="showbtn" size="small">
              <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
             </ion-button>
            </ion-col>
          </ion-row>
        </div>
        </div>
    
      <!--Address-->
      <div class="details">
        <ion-card>
          <ion-row>
            <ion-col size="11">
              <ion-card-title>My Home Address</ion-card-title>
              <ion-card-subtitle>
                No. 21 St. Agustin Street, Brgy. De Jose
                Delgado City 2234 Philippines
              </ion-card-subtitle>
            </ion-col>
            <ion-col size="1" id="circle">
              <ion-col>
                <ion-radio-group :allow-empty-selection="true">
                  <ion-radio value="homeAdd"></ion-radio>
                </ion-radio-group>
              </ion-col>
            </ion-col>
          </ion-row>
        </ion-card>
        <div class="dots">
          <ion-row>
            <ion-col>
              <ion-icon id="present-alert" name="ellipsis-vertical-sharp"></ion-icon>
            </ion-col>
          </ion-row>
        </div>
        </div>
    
              
      <!--Work office-->
        <div class="details">
          <ion-card>
            <ion-row>
              <ion-col size="11">
                <ion-card-title>Work Office</ion-card-title>
                <ion-card-subtitle>
                  3rd flr Anyeong Bldg. Seareal St.
                  Joaqin City 3456 Philippines
                </ion-card-subtitle>
                </ion-col>
              <ion-col size="1" id="circle">
                <ion-col>
                  <ion-radio-group :allow-empty-selection="true">
                  <ion-radio value="office"></ion-radio>
                  </ion-radio-group>
                </ion-col>
              </ion-col>
            </ion-row>
          </ion-card>
          <div class="dots">
            <ion-row>
              <ion-col>
                <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
              </ion-col>
            </ion-row>
          </div>
        </div>
    
      <!--Order Content-->
      <h2>Orders</h2>
        <div class="order-item">
          <!--order item-->
          <ion-card>
            <div class="items">
              <ion-row>
                <ion-col size="auto">
                  <img src="../assets/images/steak.png">
                </ion-col>
                <ion-col size="auto">
                  <ion-card-title>Steak Fried Veggies</ion-card-title>
                  <ion-card-subtitle>
                    <ion-list>1x Tomato Sauce</ion-list>
                    <ion-list>1x Regular Coke</ion-list>
                    <ion-list>1x Fried Chicken</ion-list>
                  </ion-card-subtitle>
                </ion-col>
              </ion-row>
            </div>
    
      <div class="line"></div>
    
        <div class="price">
          <ion-row>
            <ion-col size="7">
              <h3>P 185</h3>
            </ion-col>
          <!--range-->
          <div id="qty">
            <ion-row>
              <ion-col size="1">
                <ion-button>-</ion-button>
              </ion-col>
              <ion-col>
                <ion-text>1</ion-text>
              </ion-col>
              <ion-col size="1">
                <ion-button>+</ion-button>
              </ion-col>
            </ion-row>
          </div>
            </ion-row>
          </div>
        </ion-card>
        <div class="dots">
          <ion-row>
            <ion-col>
              <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
                </ion-col>
          </ion-row>
        </div>
      </div>
    
      <!--Payment option: 1-->
        <div class="paydetails">
          <ion-title>Payment Option</ion-title>
          <ion-card>
            <ion-row>
              <ion-col size="11">
                <ion-card-title>Cash on Delivery</ion-card-title>
                <ion-card-subtitle>
                  Pay when you received the order.
                </ion-card-subtitle>
              </ion-col>
              <ion-col size="1" id="circle">
              <ion-col>
                <ion-radio-group :allow-empty-selection="true">
                <ion-radio value="payment"></ion-radio>
                </ion-radio-group>
              </ion-col>
              </ion-col>
            </ion-row>
          </ion-card>
        </div>
    
      <!-- Payment option: 2-->
      <div class="paydetails">
        <ion-card>
          <ion-row>
            <ion-col size="11">
              <ion-card-title>Loyalty Points <span>(0 Points)</span></ion-card-title>
                <ion-card-subtitle>
                  Pay using your earned loyalty points
                </ion-card-subtitle>
            </ion-col>
            <ion-col size="1" id="circle">
              <ion-col>
                <ion-radio-group :allow-empty-selection="true">
                  <ion-radio value="points"></ion-radio>
                </ion-radio-group>
            </ion-col>
            </ion-col>
          </ion-row>
        </ion-card>
      </div>
    
      <!-- Payment Option: 3-->
      <div class="paylogos">
        <ion-card>
          <ion-grid>
            <ion-row  class="ion-justify-content-between" id="home-add">
              <ion-col size="11">
                <ion-card-title>
                  <img src="../assets/logo/paypal.png">
                </ion-card-title>
                <ion-card-subtitle>
                  A new tab will open to access your account
                </ion-card-subtitle>
              </ion-col>
              <ion-col size="1" id="circle">
                <ion-col>
                  <ion-radio-group :allow-empty-selection="true">
                    <ion-radio value="paypal"></ion-radio>
                      </ion-radio-group>
                </ion-col>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card>
      </div>
                
      <!-- Payment option: 4-->
      <div class="paylogos">
        <ion-card id="paynamic">
          <ion-grid>
            <ion-row  class="ion-justify-content-between">
              <ion-col size="11">
                <ion-card-title>
                  <img src="../assets/logo/paynamics.png">
                </ion-card-title>
                <ion-card-subtitle>
                  <p>Choose paynamis services available from you</p>
                </ion-card-subtitle>
              </ion-col>
              <ion-col size="1" id="circle">
                <ion-col>
                  <ion-radio-group :allow-empty-selection="true">
                    <ion-radio value="paynamics"></ion-radio>
                  </ion-radio-group>
                </ion-col>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card>
      </div>
    
      <!--range price start-->
      <div class="subtotal">
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-text>Subtotal</ion-text>
            </ion-col>
            <ion-col size="auto">
              <ion-text>P 185</ion-text>
            </ion-col>
          </ion-row>
        </ion-grid>
    
        <!--delivery charge-->
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-text>Delivery Charge</ion-text>
            </ion-col>
            <ion-col size="auto">
              <ion-text>P 59</ion-text>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    
      <!--total charge-->
      <div class="charge">
        <ion-card>
          <ion-card-title>Charge for</ion-card-title>
            <ion-card-subtitle>e.g 1,000</ion-card-subtitle>
        </ion-card>
      </div>
      </div>
    </ion-content>
    
    <!--footer content-->
    <div id="summary-footer">
      <ion-footer>
      <ion-toolbar>
        <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col>
            <ion-label>Grand Total</ion-label>
            <h3>P 244</h3>
          </ion-col>
          <ion-col>
            <ion-button href="/folder/OrderReceived">Place Order</ion-button>
          </ion-col>
        </ion-row>    
        </ion-grid>
      </ion-toolbar>
      </ion-footer>
    </div>
    <!--footer content end-->
    </ion-page>
    </template>
    
    <script>
    
    import{
        IonPage,
        IonHeader,
        IonToolbar,
        IonItem,
        IonList,
        IonButtons,
        IonMenuToggle,
        IonIcon,
        IonTitle,
        IonContent,
        IonCard,
        IonCardTitle,
        IonCardSubtitle,
        IonNote,
        IonRow,
        IonCol,
        IonText,
        IonButton,
        IonGrid,
        IonFooter,
        IonLabel,
        IonRadio,
        IonRadioGroup,
    } from '@ionic/vue';
    
    export default{
        name: 'OrderSummary',
        components:{
        IonPage,
        IonHeader,
        IonToolbar,
        IonItem,
        IonList,
        IonButtons,
        IonMenuToggle,
        IonIcon,
        IonTitle,
        IonContent,
        IonCard,
        IonCardTitle,
        IonCardSubtitle,
        IonNote,
        IonRow,
        IonCol,
        IonText,
        IonButton,
        IonGrid,
        IonFooter,
        IonLabel,
        IonRadio,
        IonRadioGroup,
        },
    }
    </script>