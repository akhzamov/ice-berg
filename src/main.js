import './assets/style/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import i18n from './i18n'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const head = createHead()
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.use(head)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
