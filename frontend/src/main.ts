import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index' // Import router utama
import { createPinia } from 'pinia'
import { setupRouterGuard } from './router/router-guard' // Proteksi Routes
import '@/assets/styles/global.css' // Import global styles

const app = createApp(App)

// Gunakan Pinia (State Management)
const pinia = createPinia()
app.use(pinia)

// Gunakan Router
app.use(router)
setupRouterGuard(router) // Setup proteksi route

// Mount aplikasi ke DOM
app.mount('#app')
