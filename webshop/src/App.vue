<script setup>
import {RouterLink, RouterView, useRoute} from 'vue-router'
import {useUserStore} from "./stores/UserStore";
import {computed, onMounted, watch} from "vue";
import {useBasketStore} from "@/stores/BasketStore";
import {router} from "@/router";

const userStore = useUserStore()
const user = computed(() => userStore.user)
const basketStore = useBasketStore()
const basketProductsAmount = computed(() => {
  if(router.currentRoute.value.path === '/basket/confirmed'){
    return 0
  }
  return basketStore.productsInBasket.reduce((total, product) => total + product.amount, 0)
})

onMounted(async () => {
  try {
    await userStore.checkIfLoggedIn()
  } catch (error) {

  }

  if (userStore.isUser) {
   await basketStore.loadBasket()
  }
})


//TODO: Seitenerreichbarkeit nach User Role

</script>

<template>
  <header>
    <nav class="nav nav-underline bg-body-tertiary p-2">
      <RouterLink to="/" class="nav-link ">Home</RouterLink>
      <RouterLink v-if="userStore.isUser" to="/basket" class="nav-link ">Warenkorb ({{basketProductsAmount}})</RouterLink>
      <RouterLink v-if="userStore.isAdmin" to="/products" class="nav-link">Produkte anlegen</RouterLink>
      <template v-if="user?.userId">
        <RouterLink @click="userStore.logout()" to="/" class="nav-link">Logout</RouterLink>
      </template>
      <template v-else-if="!user">
        <RouterLink to="/register" class="nav-link">Registrieren</RouterLink>
        <RouterLink to="/login" class="nav-link">Login</RouterLink>
      </template>
    </nav>
  </header>

  <div class="container justify-content-center">
    <RouterView/>
  </div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");
</style>
