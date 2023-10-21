<script setup>
import {userUserStore} from "../stores/UserStore";
import {ref} from "vue";

const userStore = userUserStore()

const newUser = ref({
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  role: 'user'
})

async function createNewUser() {
  await userStore.registerUser(newUser.value)
}
</script>

<template>
  <div class="card mt-5 w-50 mx-auto">
    <form @submit.prevent="createNewUser" class="m-5">
      <label class="d-block mb-3">
        <span class="form-label">E-Mail</span>
        <input v-model="newUser.email" type="email" class="form-control">
      </label>
      <label class="d-block mb-3">
        <span class="form-label">Vorname</span>
        <input v-model="newUser.firstName" type="text" class="form-control">
      </label>
      <label class="d-block mb-3">
        <span class="form-label">Nachname</span>
        <input v-model="newUser.lastName" type="text" class="form-control">
      </label>
      <label class="d-block mb-3">
        <span class="form-label">Passwort</span>
        <input v-model="newUser.password" type="password" class="form-control">
      </label>
      <button type="submit" class="btn btn-secondary">Registrieren</button>
    </form>
  </div>
</template>

<style>

</style>
