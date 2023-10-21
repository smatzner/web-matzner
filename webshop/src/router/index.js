import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from "@/views/CartView.vue";
import ProductsView from "@/views/ProductsView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/cart',
//       name: 'cart',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/CartView.vue')
//     }
//   ]
// })

const routes = [
  {path: '/', component: HomeView},
  {path: '/cart', component: CartView},
  {path: '/products', component: ProductsView},
  {path: '/register', component: RegisterView},
  {path: '/login', component: LoginView}
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export {router}
