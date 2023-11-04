<script setup>
import {ref} from "vue";
import {useBasketStore} from "@/stores/BasketStore";
import "@/validations/validations";
import {router} from "@/router";

const pickup = ref(true)
const basketStore = useBasketStore()

const invoiceAddress = ref({
  street: '',
  number: '',
  zip: '',
  city: '',
  country: ''
})

const deliveryAddress = ref({
  street: '',
  number: '',
  zip: '',
  city: '',
  country: ''
})

const shippingType = ref(pickup ? 'pickup' : 'delivery')

async function addDeliveryInfo() {
  if(basketStore.items.length < 1){
    console.log('no items in basket')
    return
  }
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
}
</script>
<template>
  <form @submit.prevent="addDeliveryInfo" class="row">
    <h2>Rechnungsadresse</h2>
    <div class="form-check">
      <label class="form-check-label">
        <input type="radio" name="shippingType" class="form-check-input" v-model="pickup" :value="true">
        <span class="form-label ms-1">Abholung</span>
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label">
        <input type="radio" name="shippingType" class="form-check-input" v-model="pickup" :value="false">
        <span class="form-label ms-1">Lieferung</span>
      </label>
    </div>
    <label class="col-md-9 d-block mt-2">
      <span class="form-label">Straße</span>
      <input type="text" class="form-control" v-model="invoiceAddress.street">
    </label>
    <label class="col-md-3 d-block mt-2">
      <span class="form-label">Nummer</span>
      <input type="text" class="form-control" v-model="invoiceAddress.number">
    </label>
    <label class="col-md-4 d-block mt-2">
      <span class="form-label">PLZ</span>
      <input type="text" class="form-control" v-model="invoiceAddress.zip">
    </label>
    <label class="col-md-4 d-block mt-2">
      <span class="form-label">Stadt</span>
      <input type="text" class="form-control" v-model="invoiceAddress.city">
    </label>
    <label class="col-md-4 d-block mt-2">
      <span class="form-label">Land</span>
      <input type="text" class="form-control" v-model="invoiceAddress.country">
    </label>
    <template v-if="!pickup">
      <h2>Lieferadresse</h2>
      <label class="col-md-9 d-block mt-2">
        <span class="form-label">Straße</span>
        <input type="text" class="form-control" v-model="deliveryAddress.street">
      </label>
      <label class="col-md-3 d-block mt-2">
        <span class="form-label">Nummer</span>
        <input type="text" class="form-control" v-model="deliveryAddress.number">
      </label>
      <label class="col-md-4 d-block mt-2">
        <span class="form-label">PLZ</span>
        <input type="text" class="form-control" v-model="deliveryAddress.zip">
      </label>
      <label class="col-md-4 d-block mt-2">
        <span class="form-label">Stadt</span>
        <input type="text" class="form-control" v-model="deliveryAddress.city">
      </label>
      <label class="col-md-4 d-block mt-2">
        <span class="form-label">Land</span>
        <input type="text" class="form-control" v-model="deliveryAddress.country">
      </label>
    </template>
    <div class="col-12 text-end">
      <button type="submit" class="btn btn-secondary mt-3">Bestellung abschicken</button>
    </div>
  </form>
</template>

<style scoped>

</style>