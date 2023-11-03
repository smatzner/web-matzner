<script setup>
import {ref} from "vue";
import BasketTableEntry from "@/components/BasketTableEntry.vue";

const props = defineProps({
  productsInBasket: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">Produkt</th>
      <th scope="col">Anzahl</th>
      <th scope="col">Anmerkung</th>
      <th scope="col">Preis</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <BasketTableEntry
        v-for="(product, index) in productsInBasket"
        :product="product"
    />
    </tbody>
  </table>
</template>