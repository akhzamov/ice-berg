import './assets/style/main.scss'

import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import i18n from './i18n'
import App from './App.vue'
import { router } from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import phoneMask from './plugins/phone-mask'

const pinia = createPinia()

export const createApp = ViteSSG(
	App,
	{ routes: router },
	({ app, router, initialState }) => {
		app.use(pinia)
		app.use(i18n)
		app.use(ElementPlus)
		app.use(phoneMask)

		if (import.meta.env.SSR) initialState.pinia = pinia.state.value
		else pinia.state.value = initialState.pinia || {}

		router.beforeEach((to, from, next) => {
			next()
		})
	}
)
