import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/OnBoarding'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/folder/OnBoarding',
    component: () => import ('../views/OnBoarding.vue')
  },
  {
    path: '/folder/LoginPage',
    component: () => import ('../views/Loginpage.vue')
  },
  {
    path: '/folder/Homepage',
    component: () => import ('../views/Homepage.vue')
  },
  {
    path: '/folder/Orderpage',
    component: () => import ('../views/Orderpage.vue')
  },
  {
    path: '/folder/OrderDetails',
    component: () => import ('../views/OrderDetails.vue')
  },
  {
    path: '/folder/OrderSummary',
    component: () => import ('../views/OrderSummary.vue')
  },
  {
    path: '/folder/OrderReceived',
    component: () => import ('../views/OrderReceived.vue')
  },
  {
    path: '/folder/loyaltypoints',
    component: () => import ('../views/LoyaltyPoints.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
