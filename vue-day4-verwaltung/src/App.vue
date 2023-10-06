<script setup>

</script>

<template>
  <ul class="nav nav-underline justify-content-end m-3">
    <li class="nav-item">
      <RouterLink to="/" class="nav-link link-secondary" exact-active-class="active">Home</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/create" class="nav-link link-secondary" exact-active-class="active">Person anlegen</RouterLink>
    </li>
  </ul>
  <div class="container">
    <RouterView/>
  </div>

</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");
</style>