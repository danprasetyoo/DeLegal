<script setup lang="ts">
defineProps<{ data: Array<{ id: number; title: string }> }>()
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Judul</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid black;
  padding: 8px;
}
</style>
