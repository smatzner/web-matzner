<script setup>
import {useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import {usePersonStore} from "@/store/PersonStore";
import PersonForm from "@/components/PersonForm.vue";
import CustomDialog from "@/components/CustomDialog.vue";
import {router} from "@/router";

const id = computed(() => parseInt(useRoute().params.userId))
const personStore = usePersonStore()
const person = computed(() => personStore.persons.find(person => person.userId === id.value) ?? {});
const index = computed(() => personStore.persons.findIndex(person => person.userId === id.value))

const isDialogOpen = ref(false)

onMounted(async () => {
  await personStore.loadPersonById(id.value)
})

function toggleDialogOpen() {
  isDialogOpen.value = !isDialogOpen.value;
}

async function updatePerson(updatedPerson) {
  await personStore.updatePerson(id.value,updatedPerson)
  isDialogOpen.value = false;
}

async function deletePerson() {
  await personStore.deletePerson(id.value)
  await router.push('/')
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
  {{ person.id }}
  <div class="mt-3">
    <button @click="isDialogOpen = true" class="btn btn-secondary m-1"><i class="bi bi-pencil-square"></i></button>
    <button @click="deletePerson" class="btn btn-danger m-1"><i class="bi bi-trash"></i></button>
  </div>

  <CustomDialog
      :person="person"
      :is-dialog-open="isDialogOpen"
      @update:model-value="toggleDialogOpen"
  >
    <PersonForm
        :person="person"
        :submitButton="'Änderung bestätigen'"
        @savePerson="updatePerson"
    />
  </CustomDialog>
</template>