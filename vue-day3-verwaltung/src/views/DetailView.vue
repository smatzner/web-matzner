<script setup>
import {useRoute} from "vue-router";
import {computed, ref} from "vue";
import {usePersonStore} from "@/store/PersonStore";
import PersonForm from "@/components/PersonForm.vue";
import CustomDialog from "@/components/CustomDialog.vue";

const id = computed(() => parseInt(useRoute().params.id))
const personStore = usePersonStore()
const person = computed(() => personStore.persons.find(person => person.id === id.value))
// const index = computed(() => personStore.persons.findIndex(person => person.id === id.value))

const isDialogOpen = ref(false)

console.log(id.value)
console.log(person)

function toggleDialogOpen() {
  isDialogOpen.value = !isDialogOpen.value;
}

function updatePerson(person) {
  const index = personStore.persons.findIndex(person => person.id === id.value)
  personStore.persons.splice(index,1, {
    id,
    firstName: person.firstName,
    lastName: person.lastName,
    birthYear: person.birthYear
  })
  isDialogOpen.value = false;
}

</script>

<template>
  <h2>Personendetails</h2>
  <table class="w-50">
    <tr>
      <th>Vorname</th>
      <td>{{ person.firstName }}</td>
    </tr>
    <tr>
      <th>Nachname</th>
      <td>{{ person.lastName }}</td>
    </tr>
    <tr>
      <th>Alter</th>
      <td>{{ person.birthYear }}</td>
    </tr>
  </table>
<!--  TODO: entfernen-->
  {{person.id}}
  <div class="mt-3">
    <button @click="isDialogOpen = true" class="btn btn-secondary m-1"><i class="bi bi-pencil-square"></i></button>
    <button class="btn btn-danger m-1"><i class="bi bi-trash"></i></button>
  </div>

  <CustomDialog
      :person="person"
      :is-dialog-open="isDialogOpen"
      @update:model-value="toggleDialogOpen"
  >
    <PersonForm
        :person="person"
        @savePerson="updatePerson"
    />
  </CustomDialog>
</template>

<style scoped>

</style>