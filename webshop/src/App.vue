<script setup>
import {RouterLink, RouterView} from 'vue-router'
import {useUserStore} from "./stores/UserStore";
import {computed, onMounted} from "vue";

const userStore = useUserStore()
const user = computed(() => userStore.user)

onMounted(async () => {
  try {
    await userStore.checkIfLoggedIn();
  } catch (error) {

  }
})

//TODO: Seitenerreichbarkeit nach User Role

</script>

<template>
  <header>
    <nav class="nav nav-underline bg-body-tertiary p-2">
      <RouterLink to="/" class="nav-link ">Home</RouterLink>
      <RouterLink v-if="userStore.isUser" to="/cart" class="nav-link ">Warenkorb</RouterLink>
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
