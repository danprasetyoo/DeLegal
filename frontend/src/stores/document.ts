import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useDocumentStore = defineStore('document', () => {
  const documents = ref([])
  const selectedDocument = ref(null)

  const fetchDocuments = async () => {
    const response = await axios.get('/api/documents')
    documents.value = response.data
  }

  const fetchDocumentById = async (id: number) => {
    const response = await axios.get(`/api/documents/${id}`)
    selectedDocument.value = response.data
  }

  return { documents, selectedDocument, fetchDocuments, fetchDocumentById }
})
