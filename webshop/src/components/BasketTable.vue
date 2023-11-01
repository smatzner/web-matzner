<script setup>
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
      <th>Produkt</th>
      <th>Anzahl</th>
      <th>Anmerkung</th>
      <th>Preis</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(product, index) in productsInBasket">
      <td>{{ product.title }}</td>
      <td>{{ product.amount }}</td>
      <td>{{ product.remark }}</td>
      <td>{{ product.totalPrice }}</td>
      <td></td>
    </tr>
    </tbody>
  </table>
</template>