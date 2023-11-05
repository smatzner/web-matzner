<script setup>

import {useUserStore} from "@/stores/UserStore";
import {useBasketStore} from "@/stores/BasketStore";
import {computed, onMounted} from "vue";

const userStore = useUserStore()
const user = userStore.user
const basketStore = useBasketStore()
const productsInBasket = basketStore.productsInBasket
const totalPrice = computed(() => productsInBasket.reduce((total, product) => total + product.totalPrice, 0))

const shippingType = basketStore.basket.shippingType
const invoiceAddress = basketStore.basket.invoiceAddress
const deliveryAddress = basketStore.basket.deliveryAddress

onMounted(async () => {
  await basketStore.sendOrder()
})

</script>

<template>
  <h1>Bestellung abgeschlossen</h1>
  <p>Danke für deine Bestellung {{ user.firstName }} {{user.lastName}}:</p>
  <p><strong>Lieferoption:</strong> {{shippingType === 'pickup' ? 'Abholung' : 'Lieferung'}}</p>
  <p><strong>Rechnungsadresse:</strong> {{`${invoiceAddress.street} ${invoiceAddress.number} ${invoiceAddress.zip} ${invoiceAddress.city} ${invoiceAddress.country}`}}</p>
  <p v-if="deliveryAddress"><strong>Lieferadresse:</strong> {{`${deliveryAddress.street} ${deliveryAddress.number} ${deliveryAddress.zip} ${deliveryAddress.city} ${deliveryAddress.country}`}}</p>
  <table class="table table-striped">
    <thead>
    <tr>
      <th>Artikel</th>
      <th>Anzahl</th>
      <th>Anmerkung</th>
      <th>Preis</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="product in productsInBasket">
        <td>{{product.title}}</td>
        <td>{{product.amount}}</td>
        <td>{{product.remark}}</td>
        <td>{{product.totalPrice}}</td>
      </tr>
    </tbody>
  </table>
  <p>Gesamtpreis: {{totalPrice}}</p>

</template>

<style scoped>

</style>