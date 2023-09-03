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
               <h1>Meat</h1>
              </ion-list>
              <ion-list slot="end">
                <ion-icon name="bag-handle"></ion-icon>
              </ion-list>
            </ion-item>
          </ion-toolbar>
        </ion-header>
        <!--header ends here-->
    
    
        <!--Main Content start here-->
        <ion-content :fullscreen="true" id="details">
    
          <!--Container content start-->
          <div class="content">
    
    
          <!--Container Item start-->
            <div class="item">
             <ion-card id="card">
              <ion-card-content>
                <ion-row>
                  <ion-col>
                    <img src="../assets/images/meat.png">
                  </ion-col>
                </ion-row>
              </ion-card-content>
             </ion-card>
             <ion-row>
                  <ion-col id="heart"> 
                    <ion-button name="heart-outline">
                      <ion-icon name="heart-outline"></ion-icon>
                    </ion-button>
                  </ion-col>
                </ion-row>
            </div>
          <!--Container Item end--> 
    
    
          <!--Content start-->
            <div class="subhead">
              <h6>Steak Fries Veggies</h6>
    
              <div class="star">
                <ion-icon name="star-sharp"></ion-icon>
                <ion-icon name="star-sharp"></ion-icon>
                <ion-icon name="star-sharp"></ion-icon>
                <ion-icon name="star-sharp"></ion-icon>
                <ion-icon name="star-half-sharp"></ion-icon>
              </div> 
    
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac,
                rutrum consectetur ligula.
              </p>
    
            <!--Pricing content-->
              <div class="pricing">
               <ion-row>
                <ion-col size="auto">
                  <h1 id="total">P 174</h1>
                </ion-col>
    
                <ion-col offset="5">
                  <div class="total">
                    <ion-col size="1">
                      <ion-button>-</ion-button>
                    </ion-col>
                     <ion-col>
                      <ion-text>1</ion-text>
                    </ion-col>
                     <ion-col size="1">
                      <ion-button>+</ion-button>
                    </ion-col>
                  </div>
                </ion-col>
               </ion-row>
              </div>
    
            <!--Dropdown content-->
                 <div class="beverages">
                  <h2>Beverages</h2>
                  <div class="dropdown">
                    <ion-select label="Choose Beverages" label-placement="stacked">
                    <ion-select-option value="coke">Coke</ion-select-option>
                    <ion-select-option value="sprite">Sprite</ion-select-option>
                    <ion-select-option value="royal">Royal</ion-select-option>
                  </ion-select>
                  </div>
                 </div>
    
             <!---Button-->
                <div class="button">
                  <ion-row>
                    <ion-col>
                      <ion-button>Regular</ion-button>
                    </ion-col>
                    <ion-col>
                      <ion-button :disabled="true">Large</ion-button>
                    </ion-col>
                    <ion-col>
                      <ion-button :disabled="true">X-Large</ion-button>
                    </ion-col>
                  </ion-row>
                </div>
    
              <!--AddOn item-->
              <div class="add">
              <h2>Add-Ons</h2>
        
                <ion-card>
                  <ion-card-content>
    
                    <ion-row>
                      <ion-col>
                        <img src="../assets/images/sauce.png">
                      </ion-col>
                    </ion-row>
    
                <!--Right item-->
                 <ion-grid>
                  <ion-row>
                    <ion-col size="10">
                        <h4>Tomato Sauce</h4>
                        <p>Sauce</p>
                    </ion-col>
                    <ion-col>
                      <ion-checkbox></ion-checkbox>
                    </ion-col>
                  </ion-row>
    
                    <ion-row>
                      <div class="qty">
                      <ion-col size="auto">
                        <h3 id="total">P 48</h3>
                      </ion-col>
    
                       <ion-row id="price">
                        <ion-col offset="5">
                          <ion-col size="7">
                            <ion-button id="decrement">-</ion-button>
                          </ion-col>
                          <ion-col size="3">
                            <ion-text id="num">1</ion-text>
                          </ion-col>
                          <ion-col size="7">
                            <ion-button id="increment">+</ion-button>
                          </ion-col>
                        </ion-col>
                       </ion-row>
                      </div>
                    </ion-row>
                   
                   </ion-grid>
                  </ion-card-content>
                </ion-card>
    
                <ion-card>
                  <ion-card-content>
                    <!--left item-->
    
                    <ion-row>
                      <ion-col>
                        <img src="../assets/images/rice.png">
                      </ion-col>
                    </ion-row>
    
                  <!--Right item-->
                  <ion-grid>
                  <ion-row>
                    <ion-col size="10">
                        <h4>White Rice</h4>
                        <p>Rice</p>
                    </ion-col>
                    <ion-col>
                      <ion-checkbox></ion-checkbox>
                    </ion-col>
                  </ion-row>
    
                    <ion-row>
                      <div class="qty">
                      <ion-col size="auto">
                        <h3 id="total">P 25</h3>
                      </ion-col>
    
                       <ion-row id="price">
                        <ion-col offset="5">
                          <ion-col size="7">
                            <ion-button id="decrement">-</ion-button>
                          </ion-col>
                          <ion-col size="3">
                            <ion-text id="num">1</ion-text>
                          </ion-col>
                          <ion-col size="7">
                            <ion-button id="increment">+</ion-button>
                          </ion-col>
                        </ion-col>
                       </ion-row>
                      </div>
                    </ion-row>
                   
                   </ion-grid>
                  </ion-card-content>
                </ion-card>
              </div>
          <!--Content end-->
            </div>
        <!--Container content end-->
          </div>
        </ion-content>
        <!--Main Content end here-->
    
          <!--footer content-->
          <div id="btn">
            <ion-footer>
              <ion-button id="open-modal">Add to Bag</ion-button>
            </ion-footer>
          </div>
    
          <!--to open modal-->
          <div class="modal">
            <ion-modal ref="modal" trigger="open-modal">
              <modal-details/>
            </ion-modal>
          </div>
    </ion-page>
    </template>
    
    <script lang="ts">
    import
     {
        IonPage,
        IonHeader,
        IonToolbar,
        IonItem,
        IonList,
        IonButtons,
        IonMenuToggle,
        IonTitle,
        IonIcon,
        IonContent,
        IonCard,
        IonText,
        IonNote,
        IonSelect,
        IonSelectOption,
        IonCardContent,
        IonCheckbox,
        IonGrid,
        IonRow,
        IonCol,
        IonFooter,
        IonCardTitle,
        IonButton,
        IonModal,
    } from '@ionic/vue';
    
    import { defineComponent } from "vue";
    
    import ModalDetails from '../views/ModalDetails.vue';
    
    export default defineComponent({
      components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonItem,
        IonList,
        IonButtons,
        IonMenuToggle,
        IonTitle,
        IonIcon,
        IonContent,
        IonCard,
        IonText,
        IonNote,
        IonSelect,
        IonSelectOption,
        IonCardContent,
        IonCheckbox,
        IonGrid,
        IonRow,
        IonCol,
        IonFooter,
        IonCardTitle,
        IonButton,
        ModalDetails,
        IonModal,
      },
    })
    </script>
    