<script setup>
import PersonForm from "@/components/PersonForm.vue";
import {usePersonStore} from "@/store/PersonStore";
import {router} from "@/router";

const personStore = usePersonStore()

function addPerson(person) {
  console.log('Person hinzugefügt')
  const id = Math.round(Math.random() * 100000)
  personStore.persons.push({
    id,
    firstName: person.firstName,
    lastName: person.lastName,
    birthYear: person.birthYear
  })
  router.push('/')
}
</script>

<template>
  <PersonForm @savePerson="addPerson"/>
</template>

<style scoped>

</style>