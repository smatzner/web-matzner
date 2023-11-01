<script setup>
import {useBasketStore} from "@/stores/BasketStore";
import {computed, onBeforeMount, onMounted, ref} from "vue";
import BasketTable from "@/components/BasketTable.vue";
import {useProductStore} from "@/stores/ProductStore";

const basketStore = useBasketStore()
const productStore = useProductStore()

const items = computed(() => basketStore.baskets.items)
const productsInBasket = computed(() => basketStore.productsInBasket)
const totalPrice = computed(() => productsInBasket.value.reduce((total, product) => total + product.totalPrice,0))

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
  <pre>
    {{ productsInBasket }}
    <!--    {{ items }}-->
  </pre>
  <div>
    <h1>Warenkorb</h1>
    <BasketTable
        :productsInBasket="productsInBasket"/>
    <p>Gesamtpreis: {{ totalPrice }} €</p>
  </div>
</template>

