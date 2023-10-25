<script setup>
import {useUserStore} from "../stores/UserStore";
import {ref} from "vue";
import {router} from "@/router";

const userStore = useUserStore()

const newUser = ref({
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  role: 'user'
})

async function register() {
  await userStore.register(newUser.value)
  await router.push('/')
}
</script>

<template>
  <div class="card mt-5 w-50 mx-auto">
    <form @submit.prevent="register" class="m-5">
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
