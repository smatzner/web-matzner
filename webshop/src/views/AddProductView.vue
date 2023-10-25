<script setup>
import {useProductStore} from "@/stores/ProductStore";
import {ref} from "vue";
import {router} from "@/router";
import {integer, maxLength, numeric, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import * as validators from '@vuelidate/validators'

const productStore = useProductStore()

const newProduct = ref({
  title: null,
  description: null,
  price: null,
  imageUrl: null
})

validators.required.$message = "Feld darf nicht leer sein!"
validators.integer.$message = "Bitte eine Zahl eingeben"
validators.numeric.$message = "Der Preis darf nicht unter 0€ liegen"

const validations = {
  title: {required, maxlength: maxLength(2048)},
  description: {required, maxlength: maxLength(2048)},
  price: {integer, required, numeric}
}

const v$ = useVuelidate(validations, newProduct)

const errorMsg = ref('')

async function addProduct() {
  const result = await v$.value.$validate()
  if (!result) {
    console.log(v$.value)
    return
  }
  try {
    await productStore.addProduct(newProduct.value)
    await router.push('/')
  } catch (error) {
    if (error.response.status === 401 || error.response.status === 403) errorMsg.value = "Fehler! Sie haben keine Berechtigung neue Produkte anzulegen"
  }
}
</script>

<template>
  <h1>Produkte anlegen</h1>
  <div class="w-50 mx-auto mt-5">
    <div v-if="errorMsg" class="alert alert-danger">{{ errorMsg }}</div>
    <div class="card">
      <form @submit.prevent="addProduct" class="m-5">

        <div :class="{error: v$.title.$errors.length}">
          <label class="d-block mt-3">
            <span class="form-label">Produkttitel</span>
            <input v-model="newProduct.title" @blur="v$.title.$touch"
                   :class="v$.title.$errors.length ? 'is-invalid' : ''" type="text" class="form-control">
          </label>
          <div class="input-errors" v-for="error of v$.title.$errors" :key="error.$uid">
            <div class="text-danger error-msg">{{ error.$message }}</div>
          </div>
        </div>

        <div :class="{error: v$.price.$errors.length}">
          <label class="d-block mt-3">
            <span class="form-label">Preis</span>
            <input v-model="newProduct.price" @blur="v$.price.$touch"
                   :class="v$.price.$errors.length ? 'is-invalid' : ''" type="number" class="form-control">
          </label>
          <div class="input-errors" v-for="error of v$.price.$errors" :key="error.$uid">
            <div class="text-danger error-msg">{{ error.$message }}</div>
          </div>
        </div>

        <label class="d-block mt-3">
          <span class="form-label">Bild-URL</span>
          <input v-model="newProduct.imageUrl" type="text" class="form-control">
        </label>

        <div :class="{error: v$.description.$errors.length}">
          <label class="d-block mt-3">
            <span class="form-label">Beschreibung</span>
            <textarea v-model="newProduct.description" @blur="v$.price.$touch"
                      :class="v$.description.$errors.length ? 'is-invalid' : ''" class="form-control"></textarea>
          </label>
          <div class="input-errors" v-for="error of v$.description.$errors" :key="error.$uid">
            <div class="text-danger error-msg">{{ error.$message }}</div>
          </div>
        </div>

        <button type="submit" class="btn btn-secondary mt-3">Produkt anlegen</button>
      </form>
    </div>
  </div>
</template>

<style>

</style>
