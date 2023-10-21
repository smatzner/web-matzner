<script setup>
import Product from "@/components/Product.vue";

defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="row">
    <Product
      v-for="product in products"
      :product="product"
    />
  </div>
</template>
