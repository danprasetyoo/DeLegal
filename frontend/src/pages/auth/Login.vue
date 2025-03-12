<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const login = async () => {
  try {
    const response = await axios.post('/api/auth/login', {
      email: email.value,
      password: password.value,
    })
    localStorage.setItem('token', response.data.token)
    router.push('/admin')
  } catch (error) {
    console.error('Login gagal', error)
  }
}
</script>

<template>
  <div class="login">
    <h2>Login</h2>
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
</template>

<style scoped>
.login {
  max-width: 400px;
  margin: auto;
  text-align: center;
}
</style>
