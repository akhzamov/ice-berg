import './assets/style/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import i18n from './i18n'
import Trans from './i18n/translation'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import phoneMask from './plugins/phone-mask'

const head = createHead()
const pinia = createPinia()
const app = createApp(App)

async function initApp() {
	const initialLocale = Trans.guessDefaultLocale()
	await Trans.switchLanguage(initialLocale)
}

app.use(pinia)
app.use(i18n)
app.use(head)
app.use(router)
app.use(ElementPlus)
app.use(phoneMask)
app.mount('#app')
initApp()
