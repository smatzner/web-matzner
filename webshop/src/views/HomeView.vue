<script setup>
import WebShop from "@/components/WebShop.vue";
import {useProductStore} from "@/stores/ProductStore";
import {computed, onBeforeMount} from "vue";
import {useUserStore} from "../stores/UserStore";


const productStore = useProductStore()
const userStore = useUserStore()
const products = computed(() => productStore.products)

const user = computed(() => userStore.user)


onBeforeMount(async () => {
  await productStore.loadProducts()
})

</script>

<template>
  <main>
    <template v-if="productStore.products.length > 0">
      <WebShop :products="productStore.products"/>
    </template>
    <template v-else>
      <div class="d-flex justify-content-center mt-3">Keine Produkte vorhanden!</div>
    </template>
  </main>
</template>
