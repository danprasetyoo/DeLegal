<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getDocuments } from '@/services/documentService';
import DocumentCard from './DocumentCard.vue';

const documents = ref([]);

onMounted(async () => {
  documents.value = await getDocuments();
});
</script>

<template>
  <div>
    <h1>Daftar Dokumen</h1>
    <div class="document-list">
      <DocumentCard v-for="doc in documents" :key="doc.id" :title="doc.title" :description="doc.description" />
    </div>
  </div>
</template>

<style scoped>
.document-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}
</style>
