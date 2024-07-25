import Home from '../views/Home.vue'

export const router = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: ()=> import('../views/404.vue'),
	},
]
