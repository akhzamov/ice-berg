// src/plugins/phone-mask.js

function formatPhoneNumber(value) {
	// Удаляем все, кроме чисел
	value = value.replace(/\D/g, '')

	// Если первые цифры совпадают с "998", пропускаем их
	if (value.startsWith('998')) {
		value = value.slice(3)
	}

	let phoneNumber = '+998 '

	if (value.length > 0) {
		phoneNumber += value.substring(0, 2)
	}
	if (value.length > 2) {
		phoneNumber += ' ' + value.substring(2, 5)
	}
	if (value.length > 5) {
		phoneNumber += ' ' + value.substring(5, 7)
	}
	if (value.length > 7) {
		phoneNumber += ' ' + value.substring(7, 9)
	}

	return phoneNumber
}

function debounce(func, timeout = 300) {
	let timer
	return event => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			func(event)
		}, timeout)
	}
}

export default {
	install(Vue) {
		Vue.directive('phone-mask', {
			mounted(el) {
				const handleInput = e => {
					if (!e.isTrusted || !e.target) return

					// Обновляем значение с учетом текущего ввода
					e.target.value = formatPhoneNumber(e.target.value)
				}

				el.oninput = debounce(handleInput, 300)

				el.onfocus = function () {
					if (!el.value) {
						el.value = '+998 '
					}
				}

				el.onkeydown = function (e) {
					if (
						el.selectionStart !== null &&
						el.selectionStart < 5 &&
						(e.key === 'Backspace' || e.key === 'Delete')
					) {
						e.preventDefault()
					}
				}
			},
		})
	},
}
