<script setup>
// import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <nav class="nav nav-underline bg-body-tertiary p-2">
      <RouterLink to="/" class="nav-link ">Home</RouterLink>
      <RouterLink to="/cart" class="nav-link ">Warenkorb (User)</RouterLink>
      <RouterLink to="/products" class="nav-link">Produkte bearbeiten (Admin)</RouterLink>
      <RouterLink to="/register" class="nav-link">Registrieren</RouterLink>
      <RouterLink to="/login" class="nav-link">Login</RouterLink>
    </nav>
  </header>

  <div class="container justify-content-center">
    <RouterView/>
  </div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");
</style>
