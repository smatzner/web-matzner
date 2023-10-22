<script setup>
import {onBeforeRouteUpdate, RouterLink, RouterView} from 'vue-router'
import {useUserStore} from "./stores/UserStore";
import {computed, onBeforeMount} from "vue";

const userStore = useUserStore()


</script>

<template>
  <header>
    <nav class="nav nav-underline bg-body-tertiary p-2">
      <RouterLink to="/" class="nav-link ">Home</RouterLink>
      <RouterLink v-if="userStore.isUser" to="/cart" class="nav-link ">Warenkorb (User)</RouterLink>
      <RouterLink v-if="userStore.isAdmin" to="/products" class="nav-link">Produkte bearbeiten (Admin)</RouterLink>
      <template v-if="userStore.isLoggedIn">
        <RouterLink @click="userStore.logout()" to="/" class="nav-link">Logout</RouterLink>
      </template>
      <template v-else>
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
