<script setup>
import {ref} from "vue";

const persons = ref([])
const firstName = ref('')
const lastName = ref('')
const birthYear = ref()

function addPerson() {
  persons.value.push(createPersonsObject(firstName.value, lastName.value, birthYear.value))

  firstName.value = ''
  lastName.value = ''
  birthYear.value = ''
}

function deleteLastPerson() {
  persons.value.pop();
}

function clearAll() {
  persons.value = [];
}

function createPersonsObject(firstName, lastName, birthYear) {
  return {
    firstName,
    lastName,
    birthYear,
    get age() {
      return new Date().getFullYear() - this.birthYear
    },
    set age(age) {
      this.birthYear = new Date().getFullYear() - age
    }
  }
}
</script>

<template>
  <div class="container">
    <h1 class="my-5">Übung: Personen Array</h1>
    <div class="row">
      <div class="col-12 col-md-5">
        <div class="p-4 bg-light">
          <h2 class="mb-4">Person anlegen</h2>
          <form class="mb-5" @submit.prevent="addPerson">
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
            <button type="submit" class="btn btn-success">Hinzufügen</button>
          </form>
          <h2 class="mb-4">Aktionen</h2>
          <div class="d-flex gap-3">
            <button type="button" class="btn btn-danger" @click="deleteLastPerson">Letztes Element löschen</button>
            <button type="button" class="btn btn-danger" @click="clearAll">Alles löschen</button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-7">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>Alter</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="person in persons">
            <td>{{ person.firstName }}</td>
            <td>{{ person.lastName }}</td>
            <td>{{ person.age }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>