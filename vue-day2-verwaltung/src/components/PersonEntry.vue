<script setup>
import {computed} from "vue";

const props = defineProps({
  person: {
    required: true,
    type: Object
  }
})

const age = computed(() => new Date().getFullYear() - props.person.birthYear)


</script>

<template>
  <tr>
    <td>{{ person.firstName }}</td>
    <td>{{ person.lastName }}</td>
    <td>{{ age }}</td>
  </tr>
</template>
