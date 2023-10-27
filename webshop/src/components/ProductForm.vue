<script setup>
import {ref, watch} from "vue";
import {integer, maxLength, numeric, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import "@/validations/validations";

const props = defineProps({
  product: {
    type: Object
  },
  submitButton: {
    type: String,
    default: 'Produkt anlegen'
  }
})

const emit = defineEmits(['saveProduct'])

const newProduct = ref({
  title: null,
  description: null,
  price: null,
  imageUrl: null
})

const validations = {
  title: {required, maxlength: maxLength(255)},
  description: {required, maxlength: maxLength(2048)},
  price: {required, integer, numeric},
  imageUrl: {required, maxlength: maxLength(2048)}
}

const v$ = useVuelidate(validations, newProduct)

watch(() => props.product, () => {
  if (props.product) {
    v$.value.title.$model = props.product.title
    v$.value.description.$model = props.product.description
    v$.value.price.$model = props.product.price
    v$.value.imageUrl.$model = props.product.imageUrl
  }
}, {immediate: true})

async function saveProduct() {
  const result = await v$.value.$validate()
  if (!result) {
    return
  }
  emit('saveProduct', {
    title: v$.value.title.$model,
    description: v$.value.description.$model,
    price: v$.value.price.$model,
    imageUrl: v$.value.imageUrl.$model
  })
}

</script>

<template>
  <form @submit.prevent="saveProduct" class="m-5" novalidate>
    <div :class="{error: v$.title.$errors.length}">
      <label class="d-block mt-3">
        <span class="form-label">Produkttitel</span>
        <input v-model="v$.title.$model"
               :class="v$.title.$errors.length ? 'is-invalid' : ''" type="text" class="form-control">
      </label>
      <div class="input-errors" v-for="error of v$.title.$errors" :key="error.$uid">
        <div class="text-danger error-msg">{{ error.$message }}</div>
      </div>
    </div>

    <div :class="{error: v$.price.$errors.length}">
      <label class="d-block mt-3">
        <span class="form-label">Preis</span>
        <input v-model.number="v$.price.$model"
               :class="v$.price.$errors.length ? 'is-invalid' : ''" type="number" class="form-control">
      </label>
      <div class="input-errors" v-for="error of v$.price.$errors" :key="error.$uid">
        <div class="text-danger error-msg">{{ error.$message }}</div>
      </div>
    </div>

    <div :class="{error: v$.description.$errors.length}">
      <label class="d-block mt-3">
        <span class="form-label">Beschreibung</span>
        <input v-model="v$.description.$model"
               :class="v$.description.$errors.length ? 'is-invalid' : ''" class="form-control">
      </label>
      <div class="input-errors" v-for="error of v$.description.$errors" :key="error.$uid">
        <div class="text-danger error-msg">{{ error.$message }}</div>
      </div>
    </div>

    <div :class="{error: v$.imageUrl.$errors.length}">
      <label class="d-block mt-3">
        <span class="form-label">Bild-URL</span>
        <input v-model="v$.imageUrl.$model" :class="v$.imageUrl.$errors.length ? 'is-invalid' : ''" type="text"
               class="form-control">
      </label>
      <div class="input-errors" v-for="error of v$.imageUrl.$errors" :key="error.$uid">
        <div class="text-danger error-msg">{{ error.$message }}</div>
      </div>
    </div>

    <button type="submit" class="btn btn-secondary mt-3">{{ submitButton }}</button>
  </form>
</template>

<style>

</style>
