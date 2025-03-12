export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const isValidPassword = (password: string): boolean => {
  return password.length >= 8
}

export const isValidPhone = (phone: string): boolean => {
  return /^\+?\d{10,15}$/.test(phone)
}
