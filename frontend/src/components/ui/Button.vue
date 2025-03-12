<script setup lang="ts">
defineProps<{ label: string; type?: 'button' | 'submit' | 'reset' }>()
</script>

<template>
  <button :type="type || 'button'" class="btn">
    {{ label }}
  </button>
</template>

<style scoped>
.btn {
  padding: 8px 16px;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>
