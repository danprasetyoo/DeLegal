<script setup lang="ts">
import Sidebar from '@/components/layout/Sidebar.vue';
</script>

<template>
  <div class="admin-layout">
    <Sidebar />
    <div class="admin-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  height: 100vh;
}
.admin-content {
  flex-grow: 1;
  padding: 20px;
  margin-left: 250px;
}
</style>
