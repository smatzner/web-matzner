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
  <div>Details</div>
</template>

<style scoped>

</style>