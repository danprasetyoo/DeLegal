<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getDocumentById } from '@/services/documentService';

const route = useRoute();
const document = ref(null);

onMounted(async () => {
  document.value = await getDocumentById(route.params.id);
});
</script>

<template>
  <div v-if="document">
    <h1>{{ document.title }}</h1>
    <p>{{ document.description }}</p>
    <p><strong>Category:</strong> {{ document.category }}</p>
    <p><strong>Uploaded By:</strong> {{ document.uploadedBy }}</p>
  </div>
</template>
