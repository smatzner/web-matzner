<script setup>
import {ref} from "vue";
import {useBasketStore} from "@/stores/BasketStore";
import "@/validations/validations";
import {router} from "@/router";

const basketStore = useBasketStore()

const invoiceAddress = ref({
  street: '',
  number: '',
  zip: '',
  city: '',
  country: ''
})

const deliveryAddress = ref({
  street: null,
  number: null,
  zip: null,
  city: null,
  country: null
})

const shippingType = ref('pickup')

const errorMsg = ref('')

async function addDeliveryInfo() {
  if (basketStore.items.length < 1) {
    console.log('no items in basket')
    return
  }
  if (shippingType.value === 'pickup') {
    await basketStore.addDeliveryInfo({
      invoiceAddress: {
        street: invoiceAddress.value.street,
        number: invoiceAddress.value.number,
        zip: invoiceAddress.value.zip,
        city: invoiceAddress.value.city,
        country: invoiceAddress.value.country
      },
      shippingType: shippingType.value
    })
    await router.push("/basket/confirmed")
  } else {
    try{
      await basketStore.addDeliveryInfo({
        invoiceAddress: {
          street: invoiceAddress.value.street,
          number: invoiceAddress.value.number,
          zip: invoiceAddress.value.zip,
          city: invoiceAddress.value.city,
          country: invoiceAddress.value.country
        },
        deliveryAddress: {
          street: deliveryAddress.value.street,
          number: deliveryAddress.value.number,
          zip: deliveryAddress.value.zip,
          city: deliveryAddress.value.city,
          country: deliveryAddress.value.country
        },
        shippingType: shippingType.value
      })
      await router.push("/basket/confirmed")
    } catch(e) {
      errorMsg.value = 'Bitte Lieferadresse angeben'
    }
  }
}
</script>
<template>
  <form @submit.prevent="addDeliveryInfo" class="row" novalidate>
    <h2>Rechnungsadresse</h2>
    <div class="form-check">
      <label class="form-check-label">
        <input type="radio" name="shippingType" class="form-check-input" v-model="shippingType" :value="'pickup'">
        <span class="form-label ms-1">Abholung</span>
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label">
        <input type="radio" name="shippingType" class="form-check-input" v-model="shippingType" :value="'delivery'">
        <span class="form-label ms-1">Lieferung</span>
      </label>
    </div>
    <label class="col-md-9 d-block mt-2">
      <span class="form-label">Straße</span>
      <input type="text" class="form-control" v-model="invoiceAddress.street" required>
    </label>
    <label class="col-md-3 d-block mt-2">
      <span class="form-label">Nummer</span>
      <input type="text" class="form-control" v-model="invoiceAddress.number" required>
    </label>
    <label class="col-md-4 d-block mt-2">
      <span class="form-label">PLZ</span>
      <input type="text" class="form-control" v-model="invoiceAddress.zip" required>
    </label>
    <label class="col-md-4 d-block mt-2">
      <span class="form-label">Stadt</span>
      <input type="text" class="form-control" v-model="invoiceAddress.city" required>
    </label>
    <label class="col-md-4 d-block mt-2">
      <span class="form-label">Land</span>
      <input type="text" class="form-control" v-model="invoiceAddress.country" required>
    </label>
    <template v-if="shippingType === 'delivery'">
      <h2>Lieferadresse</h2>
      <div v-if="errorMsg" class="alert alert-danger">{{errorMsg}}</div>
      <label class="col-md-9 d-block mt-2">
        <span class="form-label">Straße</span>
        <input type="text" class="form-control" v-model="deliveryAddress.street" required>
      </label>
      <label class="col-md-3 d-block mt-2">
        <span class="form-label">Nummer</span>
        <input type="text" class="form-control" v-model="deliveryAddress.number" required>
      </label>
      <label class="col-md-4 d-block mt-2">
        <span class="form-label">PLZ</span>
        <input type="text" class="form-control" v-model="deliveryAddress.zip" required>
      </label>
      <label class="col-md-4 d-block mt-2">
        <span class="form-label">Stadt</span>
        <input type="text" class="form-control" v-model="deliveryAddress.city" required>
      </label>
      <label class="col-md-4 d-block mt-2">
        <span class="form-label">Land</span>
        <input type="text" class="form-control" v-model="deliveryAddress.country" required>
      </label>
    </template>
    <div class="col-12 text-end">
      <button type="submit" class="btn btn-secondary mt-3">Bestellung abschicken</button>
    </div>
  </form>
</template>

<style scoped>

</style>