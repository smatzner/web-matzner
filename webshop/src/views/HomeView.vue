<script setup>
import WebShop from "@/components/WebShop.vue";
import {useProductStore} from "@/stores/ProductStore";
import {onBeforeMount} from "vue";

const productStore = useProductStore()

onBeforeMount(async () => {
  await productStore.loadProducts()
})
</script>

<template>
  <main>
    <WebShop :products="productStore.products"/>
  </main>
</template>
