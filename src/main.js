import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import router from './router'
import '@mdi/font/css/materialdesignicons.min.css'

createApp(App).use(router).mount('#app')
