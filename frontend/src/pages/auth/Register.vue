<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const register = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Password tidak cocok')
    return
  }

  try {
    await axios.post('/api/auth/register', {
      name: name.value,
      email: email.value,
      password: password.value,
    })

    alert('Registrasi berhasil, silakan login.')
    router.push('/login')
  } catch (error) {
    console.error('Registrasi gagal', error)
  }
}
</script>

<template>
  <div class="register">
    <h2>Daftar Akun</h2>
    <input v-model="name" type="text" placeholder="Nama Lengkap" />
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <input v-model="confirmPassword" type="password" placeholder="Konfirmasi Password" />
    <button @click="register">Daftar</button>
  </div>
</template>

<style scoped>
.register {
  max-width: 400px;
  margin: auto;
  text-align: center;
}
</style>
