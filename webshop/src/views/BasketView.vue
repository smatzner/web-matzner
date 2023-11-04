<script setup>
import {useBasketStore} from "@/stores/BasketStore";
import {computed, onBeforeMount, ref} from "vue";
import BasketTable from "@/components/BasketTable.vue";
import {useProductStore} from "@/stores/ProductStore";
import OrderForm from "@/components/OrderForm.vue";

const basketStore = useBasketStore()
const productStore = useProductStore()

const productsInBasket = computed(() => basketStore.productsInBasket)
const totalPrice = computed(() => productsInBasket.value.reduce((total, product) => total + product.totalPrice, 0))

onBeforeMount(async () => {
  try {
    await productStore.loadProducts()
    await basketStore.loadBasket()
  } catch (e) {
    console.log(e)
  }

  basketStore.loadProductsInBasket()
})


</script>

<template>
  <h1>Warenkorb</h1>
  <template v-if="basketStore?.items.length < 1">
    <h2>Keine Produkte im Warenkorb</h2>
  </template>
  <template v-else>
    <div class="row">
      <BasketTable
          :productsInBasket="productsInBasket"
      />
      <p>Gesamtpreis: {{ totalPrice }} €</p>
    </div>
    <div class="row">
      <OrderForm/>
    </div>
  </template>
</template>

