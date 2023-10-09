<script setup>
import {computed, ref} from "vue";

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
    <td class="text-end">
      <RouterLink :to="`/persons/${person.userId}`" class="btn btn-secondary">Details</RouterLink>
    </td>
  </tr>
</template>
