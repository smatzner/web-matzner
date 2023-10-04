<script setup>
import {ref, watch} from "vue";

const firstName = ref('')
const lastName = ref('')
const birthYear = ref()

const emit = defineEmits(['savePerson'])

const props = defineProps({
  person: {
    type: Object
  },
  submitButton: {
    type: String,
    default: 'Hinzufügen'
  }
})

watch(() => props.person, () => {
      if (props.person) {
        firstName.value = props.person.firstName
        lastName.value = props.person.lastName
        birthYear.value = props.person.birthYear
      }
    },
    {immediate: true})

function savePerson() {
  emit('savePerson', {
    firstName: firstName.value,
    lastName: lastName.value,
    birthYear: birthYear.value
  })

  firstName.value = '';
  lastName.value = '';
  birthYear.value = null;
}
</script>

<template>
  <form class="mb-5" @submit.prevent="savePerson">
    <label class="d-block mb-4">
      <span class="form-label">Vorname</span>
      <input type="text" name="firstName" class="form-control" v-model="firstName" required>
    </label>
    <label class="d-block mb-4">
      <span class="form-label">Nachname</span>
      <input type="text" name="lastName" class="form-control" v-model="lastName" required>
    </label>
    <label class="d-block mb-4">
      <span class="form-label">Geburtsjahr</span>
      <input type="number" name="birthYear" class="form-control" v-model.number="birthYear" required>
    </label>
    <button type="submit" class="btn btn-success">{{ submitButton }}</button>
  </form>
</template>

<style scoped>

</style>