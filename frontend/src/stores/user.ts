import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
  interface User {
    id: number
    // add other properties as needed
  }

  const users = ref<User[]>([])

  const fetchUsers = async () => {
    const response = await axios.get('/api/users')
    users.value = response.data
  }

  const deleteUser = async (id: number) => {
    await axios.delete(`/api/users/${id}`)
    users.value = users.value.filter((user) => user.id !== id)
  }

  return { users, fetchUsers, deleteUser }
})
