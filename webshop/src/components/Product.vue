<script setup>
defineProps({
  product: {
    required: true,
    type: Object
  }
})
</script>

<template>
  <div class="col-12 col-md-6 col-xl-4 text-center">
    <img :src="product.imageUrl" :alt="product.title" width="400">
    <div>{{ product.title }}</div>
    <div>{{ product.price }}€</div>
    <div>{{ product.description }}</div>
    <div class="d-flex justify-content-center">
      <div class="input-group w-25 m-3">
        <button class="btn btn-secondary form-control">-</button>
        <input type="text" class="form-control text-center" placeholder="1">
        <button class="btn btn-secondary form-control">+</button>
      </div>
      <button class="btn btn-primary m-3"><i class="bi bi-cart4"></i></button>
    </div>
  </div>
</template>

<style scoped>

</style>