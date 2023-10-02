<script setup>
import {useRoute} from "vue-router";
import {computed} from "vue";
import {usePersonStore} from "@/store/PersonStore";

const id = computed(() => useRoute().params.id)
const personStore = usePersonStore()


</script>

<template>
  <div>Details</div>
</template>

<style scoped>

</style>