<template>
  <nav class="navbar">
    <h1>Dokumen Hukum</h1>
    <div>
      <router-link to="/">Beranda</router-link>
      <router-link to="/documents">Dokumen</router-link>
      <router-link v-if="isAdmin" to="/admin">Admin</router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
const isAdmin = computed(() => authStore.user?.role === 'admin');
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  background-color: #2c3e50;
  padding: 10px 20px;
  color: white;
}
</style>
