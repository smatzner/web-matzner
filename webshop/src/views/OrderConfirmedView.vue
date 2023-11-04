<script setup>

import {useUserStore} from "@/stores/UserStore";
import {useBasketStore} from "@/stores/BasketStore";
import {onBeforeMount, onMounted} from "vue";
import {onBeforeRouteLeave, onBeforeRouteUpdate} from "vue-router";

const userStore = useUserStore()
const user = userStore.user
const basketStore = useBasketStore()
const productsInBasket = basketStore.productsInBasket
onMounted(async () => {
  await basketStore.sendOrder()
})

onBeforeRouteLeave(async () => {
  await basketStore.resetBasket()
})

</script>

<template>
  <h1>Bestellung abgeschlossen</h1>
  <p>Danke für deine Bestellung {{ user.firstName }}:</p>
  <pre>
  {{ productsInBasket }}
    {{ basketStore.basket }}
  </pre>
</template>

<style scoped>

</style>