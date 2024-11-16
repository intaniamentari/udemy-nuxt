<template>
	<div class="grid grid-cols-2 border-b border-gray-900 dark:border-gray-600 pb-5 mt-5 dark:text-gray-600 text-gray-900">
		<div class="flex items-center">
			<div class="flex items-center space-x-1">
				<p>{{ props.date }}</p>
			</div>
		</div>
		<div class="flex items-center space-x-2 justify-end mr-10">
			<p>{{ currency }}</p>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		date: String,
		transactions: Array
	})

	const totalSum = computed(() => {
		let sum = null
		for(const transaction of props.transactions) {
			if(["Income", "Investment", "Saving"].includes(transaction.type)){
				sum += transaction.amount
			} else {
				sum -= transaction.amount
			}
		}

		return sum
	})

	const { currency } = useCurrency(totalSum.value)
</script>