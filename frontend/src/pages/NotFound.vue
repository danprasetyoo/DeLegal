<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/')
  }, 5000) // Redirect ke halaman utama setelah 5 detik
})
</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Halaman yang Anda cari tidak ditemukan.</p>
    <p>Anda akan diarahkan ke beranda dalam 5 detik...</p>
    <RouterLink to="/">Atau klik di sini untuk kembali sekarang</RouterLink>
  </div>
</template>
