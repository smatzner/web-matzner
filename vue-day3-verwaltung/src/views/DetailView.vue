<script setup>
import {useRoute} from "vue-router";
import {computed} from "vue";
import {usePersonStore} from "@/store/PersonStore";

const id = computed(() => parseInt(useRoute().params.id))
const personStore = usePersonStore()
const person = computed(() => personStore.persons.find(person => person.id === id.value))

console.log(id.value)
console.log(person)

</script>

<template>
  <h2>Personendetails</h2>
  <table class="w-50">
    <tr>
      <th>Vorname</th>
      <td>{{person.firstName}}</td>
    </tr>
    <tr>
      <th>Nachname</th>
      <td>{{person.lastName}}</td>
    </tr>
    <tr>
      <th>Alter</th>
      <td>{{person.birthYear}}</td>
    </tr>
  </table>
</template>

<style scoped>

</style>