<script setup>
import {useRoute} from "vue-router";
import {computed} from "vue";

const id = computed(() => useRoute().params.id)

console.log(id.value)
</script>

<template>
  <div>Details</div>
</template>

<style scoped>

</style>