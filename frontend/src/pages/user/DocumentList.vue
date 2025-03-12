<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
interface Document {
  title: string
  description: string
  fileUrl: string
}

const document = ref<Document | null>(null)

onMounted(async () => {
  const response = await axios.get(`/api/documents/${route.params.id}`)
  document.value = response.data
})
</script>

<template>
  <div v-if="document">
    <h2>{{ document.title }}</h2>
    <p>{{ document.description }}</p>
    <a :href="document.fileUrl" target="_blank">Unduh Dokumen</a>
  </div>
  <div v-else>
    <p>Dokumen tidak ditemukan.</p>
  </div>
</template>
