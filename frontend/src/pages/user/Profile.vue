<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const user = ref({ name: '', email: '' })

onMounted(async () => {
  const response = await axios.get('/api/auth/me')
  user.value = response.data
})

const updateProfile = async () => {
  await axios.put('/api/auth/me', user.value)
  alert('Profil berhasil diperbarui')
}
</script>

<template>
  <div>
    <h2>Profil Saya</h2>
    <label>Nama</label>
    <input v-model="user.name" type="text" />

    <label>Email</label>
    <input v-model="user.email" type="email" disabled />

    <button @click="updateProfile">Simpan Perubahan</button>
  </div>
</template>
