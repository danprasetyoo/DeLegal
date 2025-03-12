<script setup lang="ts">
defineProps<{ title: string; description: string }>()
</script>

<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
}
h3 {
  margin: 0;
  font-size: 18px;
}
p {
  font-size: 14px;
  color: #666;
}
</style>
