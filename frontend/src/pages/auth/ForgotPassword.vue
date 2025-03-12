<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const message = ref('')

const requestReset = async () => {
  try {
    await axios.post('/api/auth/forgot-password', { email: email.value })
    message.value = 'Silakan cek email Anda untuk reset password.'
  } catch (error) {
    console.error('Gagal mengirim permintaan reset password', error)
  }
}
</script>

<template>
  <div class="forgot-password">
    <h2>Lupa Password</h2>
    <input v-model="email" type="email" placeholder="Masukkan email Anda" />
    <button @click="requestReset">Kirim Permintaan Reset</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<style scoped>
.forgot-password {
  max-width: 400px;
  margin: auto;
  text-align: center;
}
</style>
