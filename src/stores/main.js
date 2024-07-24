import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
	state: () => ({
		modalOpen: false,
		applicationModalActive: false,
		successModalActive: false,
		successModalText: '',
		errorModalActive: false,
		errorModalText: '',
		category: '',
	}),
	actions: {},
})
