<script setup>
import {ref, watch} from "vue";
import {useBasketStore} from "@/stores/BasketStore";

const props = defineProps({
  product: {
    required: true,
    type: Object
  }
})

const editMode = ref(false)
const itemCounter = ref(0)
const remark = ref('')
const basketStore = useBasketStore()

function toggleEditMode() {
  editMode.value = !editMode.value
}

watch(() => props.product, () => {
  if (props.product) {
    itemCounter.value = props.product.amount
    remark.value = props.product.remark
  }
}, {immediate: true})

const basketItem = ref({
      amount: itemCounter,
      remark: remark
    }
)

async function updateBasketItem(basketItem) {
  await basketStore.updateBasketItem(props.product.productId, basketItem)
  await toggleEditMode()
}

async function deleteBasketItem() {
  await basketStore.deleteBasketItem(props.product.productId);
}

</script>


<template>
  <tr>
    <td>{{ product.title }}</td>
    <td v-if="editMode">
      <div class="input-group">
        <button @click="itemCounter = (itemCounter > 0) ? itemCounter - 1 : itemCounter"
                class="btn btn-secondary form-control">-
        </button>
        <input v-model="itemCounter" type="number" class="form-control text-center">
        <button @click="itemCounter++" class="btn btn-secondary form-control">+</button>
      </div>
    </td>
    <td v-else>{{ product.amount }}</td>
    <td v-if="editMode">
      <input type="text" class="form-control" v-model="remark">
    </td>
    <td v-else>{{ product.remark }}</td>
    <td>{{ product.unitPrice * itemCounter }}</td>
    <td v-if="editMode">
      <button @click="updateBasketItem(basketItem)" class="btn btn-success"><i class="bi bi-check"></i></button>
    </td>
    <td v-else>
      <button @click="toggleEditMode" class="btn btn-secondary"><i class="bi bi-pencil-square"></i></button>
    </td>
    <td>
      <button @click="deleteBasketItem" class="btn btn-danger"><i class="bi bi-trash"></i></button>
    </td>
  </tr>
</template>

<style scoped>
td {
  width: min-content;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>