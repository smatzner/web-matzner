<script setup>
import PersonTable from "@/components/PersonTable.vue";
import {usePersonStore} from "@/store/PersonStore";
import {computed} from "vue";

const personStore = usePersonStore()

const adults = computed(() => personStore.persons.filter(person => person.birthYear <= new Date().getFullYear() - 18))
const children = computed(() => personStore.persons.filter(person => person.birthYear > new Date().getFullYear() - 18))

</script>

<template>
  <h2>Erwachsene</h2>
  <PersonTable :persons="adults"/>
  <h2>Kinder</h2>
  <PersonTable :persons="children"/>
</template>

<style scoped>

</style>