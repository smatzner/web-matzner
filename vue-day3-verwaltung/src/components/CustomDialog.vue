<script setup>
import {computed} from "vue";

const props = defineProps({
  person: {
    required: true,
    type: Object
  },
  isDialogOpen: {
    type: Boolean
  }
})

const title = computed(() => props.person.firstName + ' ' + props.person.lastName)

const emit = defineEmits(['update:modelValue'])

</script>

<template>
  <dialog :open="isDialogOpen">
    <div @click.stop>
      <div class="d-flex justify-content-between">
        <h1 class="h3">{{ title }}</h1>
        <button @click="emit('update:modelValue')" class="btn-close"></button>
      </div>

      <slot/>
    </div>
  </dialog>
</template>

<style scoped>
dialog {
  background: #00000033;
  backdrop-filter: blur(1px);
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  border: none;
  align-items: center;
  justify-content: center;
}

dialog[open] {
  display: flex;
}

dialog > div {
  background: white;
  min-width: 700px;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 6px 12px #00000066;
}
</style>