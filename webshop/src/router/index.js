import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";
import CreateProductView from "@/views/CreateProductView.vue";
import BasketView from "@/views/BasketView.vue";
import OrderConfirmedView from "@/views/OrderConfirmedView.vue";

const routes = [
  {path: '/', component: HomeView},
  {path: '/basket', component: BasketView},
  {path: '/products', component: CreateProductView},
  {path: '/products/:productId', component: ProductDetailView},
  {path: '/register', component: RegisterView},
  {path: '/login', component: LoginView},
  {path: '/basket/confirmed', component: OrderConfirmedView}
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export {router}
