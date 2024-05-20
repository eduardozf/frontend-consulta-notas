import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Madeira from './presets/madeira'
import ToastService from 'primevue/toastservice'

const app = createApp(App)
app.use(PrimeVue, {
  unstyled: true,
  pt: Madeira
})

app.use(ToastService)

app.mount('#app')
