<script setup>
import {useUserStore} from "@/stores/UserStore";
import {useProductStore} from "@/stores/ProductStore";
import {router} from "@/router";
import {useBasketStore} from "@/stores/BasketStore";
import {ref} from "vue";


const props = defineProps({
  product: {
    required: true,
    type: Object
  }
})


const userStore = useUserStore()
const productStore = useProductStore()

async function deleteProduct(productId) {
  if (confirm('Soll das Produkt wirklich gelöscht werden?')) {
    try {
      await productStore.deleteProduct(productId)
      await router.push('/')
    } catch (error) {
      console.error(error)
    }
  }
}

const itemCounter = ref(0)
const basketStore = useBasketStore()

const basketItem = ref({
  productId: props.product.productId,
  amount: itemCounter,
  remark: ''
})



async function addProductToBasket(basketItem) {
  await basketStore.addProductToBasket(basketItem)
  itemCounter.value = 0
}


</script>

<template>
  <div class="col-12 col-md-6 col-xl-4 text-center align-self-center">
    <img :src="product.imageUrl" :alt="product.title" width="400">
    <div>{{ product.title }}</div>
    <div>{{ product.price }}€</div>
    <div>{{ product.description }}</div>
    <template v-if="userStore.isUser">
      <div class="d-flex justify-content-center">
        <div class="input-group w-25 m-3">
          <button @click="itemCounter = (itemCounter > 0) ? itemCounter - 1 : itemCounter"
                  class="btn btn-secondary form-control">-
          </button>
          <input :value="itemCounter" type="text" class="form-control text-center">
          <button @click="itemCounter++" class="btn btn-secondary form-control">+</button>
        </div>
        <button @click="addProductToBasket(basketItem)" class="btn btn-primary m-3"><i class="bi bi-cart4"></i></button>
      </div>
    </template>
    <template v-if="userStore.isAdmin">
      <div class="d-flex justify-content-center">
        <RouterLink :to="`products/${product.productId}`" class="btn btn-secondary m-2">
          <i class="bi bi-pencil-square"></i>
        </RouterLink>
        <button @click="deleteProduct(product.productId)" class="btn btn-danger m-2">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </template>
  </div>

</template>

<style scoped>

</style>