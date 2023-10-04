<script setup>
import PersonTable from "@/components/PersonTable.vue";
import {usePersonStore} from "@/store/PersonStore";

const personStore = usePersonStore()

</script>

<template>
  <PersonTable
    :persons="personStore.persons"
  />
</template>

<style scoped>

</style>