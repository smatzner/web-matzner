<script setup>
import {useUserStore} from "../stores/UserStore";
import {ref} from "vue";
import {router} from "../router";

const userStore = useUserStore()

const user = ref({
  email: '',
  password: ''
})

const errorMsg = ref('')

async function login() {
  try {
    await userStore.login(user.value)
    await router.push('/')
  } catch (error) {
    if (error.response.status === 401) errorMsg.value = "Email oder Passwort inkorrekt"
  }
}
</script>

<template>
  <div class="w-50 mx-auto mt-5">
    <div v-if="errorMsg" class="alert alert-danger">{{ errorMsg }}</div>
    <div class="card">
      <form @submit.prevent="login" class="m-5">
        <label class="d-block mb-3">
          <span class="form-label">E-Mail</span>
          <input v-model="user.email" type="email" class="form-control">
        </label>
        <label class="d-block mb-3">
          <span class="form-label">Passwort</span>
          <input v-model="user.password" type="password" class="form-control">
        </label>
        <button type="submit" class="btn btn-secondary">Login</button>
      </form>
    </div>
  </div>
</template>

<style>

</style>