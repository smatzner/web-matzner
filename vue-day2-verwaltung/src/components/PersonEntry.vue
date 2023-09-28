<script setup>
defineProps({
  person: {
    required: true,
    type: Object
  }
})

</script>

<template>
  <tr>
    <td>{{ person.firstName }}</td>
    <td>{{ person.lastName }}</td>
    <td>{{ person.birthYear }}</td>
  </tr>
</template>

<style scoped>

</style>