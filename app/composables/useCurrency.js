export const useCurrency = (amount) => {
	const currency = computed(() => {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			currencyDisplay: 'symbol', // You can also use 'code' or 'name' for different formats
			minimumFractionDigits: 0,  // Optional: adjust for decimal places
			maximumFractionDigits: 2  // Optional: limit the decimal places
		}).format(isRef(amount) ? amount.value : amount)
	})

	return {
		currency
	}
}