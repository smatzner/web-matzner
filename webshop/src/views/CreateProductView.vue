<script setup>
import ProductForm from "@/components/ProductForm.vue";
import {useProductStore} from "@/stores/ProductStore";
import {router} from "@/router";
import {ref} from "vue";

const productStore = useProductStore()

const errorMsg = ref('')

async function addProduct(newProduct) {
  try {
    await productStore.addProduct(newProduct)
    await router.push('/')
  } catch (error) {
    if (error.response.status === 401 || error.response.status === 403) errorMsg.value = "Fehler! Sie haben keine Berechtigung neue Produkte anzulegen"
  }
}

</script>

<template>
  <h1>Neues Produkt anlegen</h1>
  <div class="w-75 mx-auto mt-5">
    <div v-if="errorMsg" class="alert alert-danger">{{ errorMsg }}</div>
    <div class="card">
      <ProductForm @saveProduct="addProduct"/>
    </div>
  </div>
</template>

<style scoped>

</style>