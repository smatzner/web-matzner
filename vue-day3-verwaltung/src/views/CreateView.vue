<script setup>
import PersonForm from "@/components/PersonForm.vue";

function addPerson(person) {
  console.log('Person hinzugefügt')
}
</script>

<template>
  <PersonForm @savePerson="addPerson"/>
</template>

<style scoped>

</style>