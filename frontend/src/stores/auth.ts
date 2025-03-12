import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
  interface User {
    role: string
    // add other properties as needed
  }

  const user = ref<User | null>(null)
  const token = ref(localStorage.getItem('token') || '')

  const isAuthenticated = computed(() => !!token.value)
  const isAdmin = computed(() => user.value?.role === 'admin')

  const login = async (credentials: { email: string; password: string }) => {
    const response = await axios.post('/api/auth/login', credentials)
    token.value = response.data.token
    localStorage.setItem('token', token.value)
    await fetchUser()
  }

  const fetchUser = async () => {
    if (!token.value) return
    try {
      const response = await axios.get('/api/auth/me', {
        headers: { Authorization: `Bearer ${token.value}` },
      })
      user.value = response.data
    } catch (error) {
      console.error('Gagal mengambil data user', error)
      logout()
    }
  }

  const logout = () => {
    token.value = ''
    user.value = null
    localStorage.removeItem('token')
  }

  return { user, token, isAuthenticated, isAdmin, login, fetchUser, logout }
})
