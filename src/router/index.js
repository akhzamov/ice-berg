import { createRouter, createWebHistory, RouterView } from 'vue-router'

import Tr from '@/i18n/translation'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_BASE_URL),
	routes: [
		{
			path: '/:locale?',
			component: RouterView,
			beforeEnter: Tr.routeMiddleware,
			children: [
				{
					path: '',
					name: 'home',
					component: Home,
				},
			],
		},
	],
	scrollBehavior() {
		return {
			top: 0,
		}
	},
})

export default router
