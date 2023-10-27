<script setup>
import {useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import CustomDialog from "@/components/CustomDialog.vue";
import {useProductStore} from "@/stores/ProductStore";
import ProductForm from "@/components/ProductForm.vue";
import {router} from "@/router";

const id = computed(() => parseInt(useRoute().params.productId))
const productStore = useProductStore()
const product = computed(() => productStore.products.find(product => product.productId === id.value) ?? {});
const index = computed(() => productStore.products.findIndex(product => product.productId === id.value))

const isDialogOpen = ref(false)

onMounted(async () => {
  await productStore.loadProductById(id.value)
})

function toggleDialogOpen() {
  isDialogOpen.value = !isDialogOpen.value;
}

const errorMsg = ref('')

async function updateProduct(updatedProduct){
  try{
    await productStore.updateProduct(id.value, updatedProduct)
    isDialogOpen.value = false
    await router.push('/')
  } catch (error) {
    console.error(error)
    if (error.response.status === 401 || error.response.status === 403) errorMsg.value = "Fehler! Sie haben keine Berechtigung Produkte zu bearbeiten"
  }
}

</script>

<template>
  <h2>Produktdetails</h2>
  <table class="w-50">
    <tr>
      <th>Produkttitel</th>
      <td>{{ product.title }}</td>
    </tr>
    <tr>
      <th>Produktbeschreibung</th>
      <td>{{ product.description }}</td>
    </tr>
    <tr>
      <th>Preis</th>
      <td>{{ product.price }}</td>
    </tr>
    <tr>
      <th>Produktbild</th>
      <td><img :src="product.imageUrl" :alt="product.title" width="200"></td>
    </tr>
  </table>
  <!--  TODO: entfernen-->
  {{ product.id }}
  <div class="mt-3">
    <button @click="isDialogOpen = true" class="btn btn-secondary m-1"><i class="bi bi-pencil-square"></i></button>
  </div>

  <CustomDialog
      :product="product"
      :is-dialog-open="isDialogOpen"
      :errorMsg = "errorMsg"
      @update:model-value="toggleDialogOpen"
  >
    <ProductForm
    :product="product"
    :submitButton="'Änderung bestätigen'"
    @saveProduct="updateProduct"
    />
  </CustomDialog>
</template>