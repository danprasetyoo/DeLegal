<template>
  <div>
    <h1 class="text-xl font-bold">Manajemen Dokumen</h1>
    <button @click="fetchDocuments">Muat Dokumen</button>

    <table v-if="documents.length">
      <thead>
        <tr>
          <th>Judul</th>
          <th>Deskripsi</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="doc in documents" :key="doc.id">
          <td>{{ doc.title }}</td>
          <td>{{ doc.description }}</td>
          <td>
            <button @click="deleteDocument(doc.id)">Hapus</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import documentService from '@/services/documentService'

const documents = ref([])

const fetchDocuments = async () => {
  try {
    documents.value = await documentService.getAll()
  } catch (error) {
    console.error('Gagal memuat dokumen:', error)
  }
}

const deleteDocument = async (id) => {
  if (confirm('Apakah Anda yakin ingin menghapus dokumen ini?')) {
    await documentService.delete(id)
    fetchDocuments()
  }
}

onMounted(fetchDocuments)
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
