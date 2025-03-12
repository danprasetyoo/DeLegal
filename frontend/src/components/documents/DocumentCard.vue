<script setup lang="ts">
defineProps<{ title: string; description: string }>()
</script>

<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <router-link to="/documents/1">Lihat Detail</router-link>
  </div>
</template>

<style scoped>
.card {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
