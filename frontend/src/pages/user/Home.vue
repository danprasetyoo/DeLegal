<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Document {
  id: number
  title: string
}

const documents = ref<Document[]>([])

onMounted(async () => {
  const response = await axios.get('/api/documents')
  documents.value = response.data
})
</script>

<template>
  <div>
    <h2>Selamat Datang di Portal Legal</h2>
    <p>Temukan dokumen hukum yang Anda butuhkan.</p>

    <h3>Dokumen Terbaru</h3>
    <ul>
      <li v-for="doc in documents" :key="doc.id">
        <router-link :to="'/document/' + doc.id">{{ doc.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
