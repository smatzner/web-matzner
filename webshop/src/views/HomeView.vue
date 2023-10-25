<script setup>
import WebShop from "@/components/WebShop.vue";
import {useProductStore} from "@/stores/ProductStore";
import {computed, onBeforeMount, onMounted} from "vue";
import {useUserStore} from "../stores/UserStore";

const productStore = useProductStore()
const userStore = useUserStore()

const user = computed(() => userStore.user)

onBeforeMount(async () => {
  await productStore.loadProducts()
})

</script>

<template>
  <main>
<!--    TODO: entfernen-->
    {{user?.email}}
    <WebShop :products="productStore.products"/>
  </main>
</template>
