<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Document {
  id: number
  title: string
}

const history = ref<Document[]>([])

onMounted(async () => {
  const response = await axios.get('/api/documents/history')
  history.value = response.data
})
</script>

<template>
  <div>
    <h2>Riwayat Dokumen</h2>
    <ul>
      <li v-for="doc in history" :key="doc.id">
        <router-link :to="'/document/' + doc.id">{{ doc.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
