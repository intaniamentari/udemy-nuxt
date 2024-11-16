<template>
	<section class="flex justify-between mb-10">
		<h1 class="text-4xl font-extrabold"> Summary</h1>
		<USelectMenu v-model="optionSelected" :options="summaryOptions" />
	</section>

	<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-20">
		<Trend title="Income" :amount="4000" :last-amount="1000" :loading="false" />
		<Trend title="Expense" :amount="4000" :last-amount="5000" :loading="false" />
		<Trend title="Investments" :amount="4000" :last-amount="1000" :loading="false" />
		<Trend title="Saving" :amount="4000" :last-amount="9000" :loading="false" />
	</section>

	<section>
		<Transaction v-for="transaction in transactions" :key="transaction.id" :transaction="transaction" />
	</section>
</template>

<script setup>
	import {summaryOptions} from '~/constant'
	// ref() use for get newst data from DOM automaticaly [just use for primitive value]
	// reactive() same like ref() but it use for object and array
	const optionSelected = ref(summaryOptions[1])

	const supabase = useSupabaseClient()

	const { data: transactions } = await useAsyncData('transactions', async () => {
		const { data, error } = await supabase
			.from('transactions')
			.select()

		if (error) return []

		return data
	})

</script>