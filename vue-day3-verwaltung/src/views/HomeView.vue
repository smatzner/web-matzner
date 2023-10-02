<script setup>
import PersonTable from "@/components/PersonTable.vue";
import {ref} from "vue";
import {usePersonStore} from "@/store/PersonStore";

const personStore = usePersonStore()

// const persons = ref([
//   // TODO: entfernen
//   {
//     firstName: 'Max',
//     lastName: 'Mustermann',
//     birthYear: 1993
//   }
// ])

// function deletePerson(index) {
//   persons.value.splice(index)
// }
//
// function updatePerson(index, person) {
//   persons.value.splice(index,1,person)
// }
</script>

<template>
<!--  <PersonTable-->
<!--      :persons="persons"-->
<!--      @delete="deletePerson"-->
<!--      @update="updatePerson"-->
<!--  />-->
  <PersonTable
    :persons="personStore.persons"
  />
</template>

<style scoped>

</style>