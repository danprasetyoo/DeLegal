import api from './api'

export const getDocuments = async () => {
  const response = await api.get('/documents')
  return response.data
}

export const getDocumentById = async (id: number) => {
  const response = await api.get(`/documents/${id}`)
  return response.data
}

export const createDocument = async (data: FormData) => {
  return api.post('/documents', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export const deleteDocument = async (id: number) => {
  return api.delete(`/documents/${id}`)
}
