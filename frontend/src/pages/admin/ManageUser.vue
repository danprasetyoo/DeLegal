<template>
  <div>
    <h1 class="text-xl font-bold">Manajemen Pengguna</h1>
    <button @click="fetchUsers">Muat Pengguna</button>

    <table v-if="users.length">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Email</th>
          <th>Peran</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>
            <button @click="deleteUser(user.id)">Hapus</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import userService from '@/services/userService'

const users = ref([])

const fetchUsers = async () => {
  try {
    users.value = await userService.getAll()
  } catch (error) {
    console.error('Gagal memuat pengguna:', error)
  }
}

const deleteUser = async (id) => {
  if (confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) {
    await userService.delete(id)
    fetchUsers()
  }
}

onMounted(fetchUsers)
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th {
  background: #f4f4f4;
  font-weight: bold;
}

th,
td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

button {
  background-color: #e3342f;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #cc1f1a;
}
</style>
