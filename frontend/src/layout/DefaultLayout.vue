<script setup lang="ts">
import Sidebar from '@/components/layout/Sidebar.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="layout">
    <Sidebar />
    <div class="content">
      <slot />
      <!-- Menampilkan konten halaman -->
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}
.content {
  flex-grow: 1;
  padding: 20px;
  margin-left: 250px;
}
</style>
