<script setup>
import {computed} from "vue";

const props = defineProps({
  person: {
    required: true,
    type: Object
  }
})

const emit = defineEmits(['delete'])

const age = computed(() => new Date().getFullYear() - props.person.birthYear)

</script>

<template>
  <tr>
    <td>{{ person.firstName }}</td>
    <td>{{ person.lastName }}</td>
    <td>{{ age }}</td>
    <td><button @click="emit('delete')" class="btn btn-danger"><i class="bi bi-trash"></i></button></td>
  </tr>
</template>
