<script setup>
import PersonEntry from "@/components/PersonEntry.vue";

defineProps({
  persons: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <table class="table table-striped">
    <thead>
    <tr>
      <th>Vorname</th>
      <th>Nachname</th>
      <th>Alter</th>
    </tr>
    </thead>
    <tbody>
<!--    <PersonEntry-->
<!--        v-for="(person,index) in persons"-->
<!--        :person="person"-->
<!--        @delete="emit('delete', index)"-->
<!--        @update="person => emit('update', index, person)"-->
<!--    /> -->
    <PersonEntry
        v-for="(person,index) in persons"
        :person="person"
    />
    </tbody>
  </table>
</template>

<style scoped>

</style>