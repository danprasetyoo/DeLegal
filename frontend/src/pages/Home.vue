<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Selamat Datang di Legal Docs')
</script>

<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <p>Temukan dokumen hukum yang Anda butuhkan dengan mudah.</p>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
</style>
