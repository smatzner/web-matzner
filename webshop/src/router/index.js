import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CartView from "@/views/CartView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";
import ProductsView from "@/views/CreateProductView.vue";

const routes = [
  {path: '/', component: HomeView},
  {path: '/cart', component: CartView},
  {path: '/products', component: ProductsView},
  {path: '/products/:productId', component: ProductDetailView},
  {path: '/register', component: RegisterView},
  {path: '/login', component: LoginView}
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export {router}
