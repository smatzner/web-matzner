<script setup>
import {ref} from "vue";
import PersonForm from "@/components/PersonForm.vue";
import PersonEntry from "@/components/PersonEntry.vue";
import PersonTable from "@/components/PersonTable.vue";

const persons = ref([
    // TODO: entfernen
  {
    firstName : 'Max',
    lastName : 'Mustermann',
    birthYear : 1993
  }
])

function addPerson(person){
  persons.value.push(person)
}

function deleteLastPerson() {
  persons.value.pop();
}

function clearAll() {
  persons.value = [];
}

function deletePerson(index){
  persons.value.splice(index)
}

// function createPersonsObject(firstName, lastName, birthYear) {
//   return {
//     firstName,
//     lastName,
//     birthYear,
//     get age() {
//       return new Date().getFullYear() - this.birthYear
//     },
//     set age(age) {
//       this.birthYear = new Date().getFullYear() - age
//     }
//   }
// }
</script>

<template>
  <div class="container">
    <h1 class="my-5">Übung: Personen Array</h1>
    <div class="row">
      <div class="col-12 col-md-5">
        <div class="p-4 bg-light">
          <h2 class="mb-4">Person anlegen</h2>
          <PersonForm @addPerson="addPerson"/>
          <h2 class="mb-4">Aktionen</h2>
          <div class="d-flex gap-3">
            <button type="button" class="btn btn-danger" @click="deleteLastPerson">Letztes Element löschen</button>
            <button type="button" class="btn btn-danger" @click="clearAll">Alles löschen</button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-7">
        <PersonTable
            :persons="persons"
            @delete="deletePerson"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");
</style>