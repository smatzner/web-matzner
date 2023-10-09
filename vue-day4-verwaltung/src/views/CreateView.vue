<script setup>
import PersonForm from "@/components/PersonForm.vue";
import {usePersonStore} from "@/store/PersonStore";
import {router} from "@/router";

const personStore = usePersonStore()

async function addPerson(person) {
  console.log('Person hinzugefügt')
  await personStore.createPerson({
    firstName: person.firstName,
    lastName: person.lastName,
    birthYear: person.birthYear
  })
  await router.push('/')
}
</script>

<template>
  <h2>Person anlegen</h2>
  <PersonForm @savePerson="addPerson"/>
</template>

<style scoped>

</style>