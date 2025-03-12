import api from './api'

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password })
  localStorage.setItem('token', response.data.token)
  return response.data
}

export const register = async (userData: { name: string; email: string; password: string }) => {
  return api.post('/auth/register', userData)
}

export const logout = () => {
  localStorage.removeItem('token')
}
