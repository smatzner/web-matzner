<script setup>
import {useProductStore} from "@/stores/ProductStore";
import {ref} from "vue";
import {router} from "@/router";

const productStore = useProductStore()

const newProduct = ref({
  title: '',
  description: '',
  price: null,
  imageUrl: ''
})

async function addProduct(){
  await productStore.addProduct(newProduct.value)
  await router.push('/')
}
</script>

<template>
  <div>
    <h1>Produkte anlegen</h1>
    <div class="card mt-5 w-50 mx-auto">
      <form @submit.prevent="addProduct" class="m-5">
        <label class="d-block mb-3">
          <span class="form-label">Produkttitel</span>
          <input v-model="newProduct.title" type="text" class="form-control">
        </label>
        <label class="d-block mb-3">
          <span class="form-label">Preis</span>
          <input v-model="newProduct.price" type="number" class="form-control">
        </label>
        <label class="d-block mb-3">
          <span class="form-label">Bild-URL</span>
          <input v-model="newProduct.imageUrl" type="text" class="form-control">
        </label>
        <label class="d-block mb-3">
          <span class="form-label">Beschreibung</span>
          <textarea v-model="newProduct.description" class="form-control"></textarea>
        </label>
        <button type="submit" class="btn btn-secondary">Produkt anlegen</button>
      </form>
    </div>
  </div>
</template>

<style>

</style>
