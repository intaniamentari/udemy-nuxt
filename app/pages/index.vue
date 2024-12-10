<template>
	<section class="flex justify-between mb-10">
		<h1 class="text-4xl font-extrabold"> Summary</h1>
		<USelectMenu v-model="optionSelected" :options="summaryOptions" />
	</section>

	<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-20">
		<Trend title="Income" :amount="incomeTotal" :last-amount="1000" :loading="isLoading" />
		<Trend title="Expense" :amount="expenseTotal" :last-amount="5000" :loading="isLoading" />
		<Trend title="Investments" :amount="4000" :last-amount="1000" :loading="isLoading" />
		<Trend title="Saving" :amount="4000" :last-amount="9000" :loading="isLoading" />
	</section>

	<section class="flex justify-between mb-10 items-center">
		<div>
			<h2 class="text-2xl font-extrabold">Transaction</h2>
			<div class="text-gray-500 dark:text-gray-400">
				You have {{ incomeCount }} incomes and {{ expenseCount }} expense count in this period
			</div>
		</div>
		<div>
			<UButton icon="i-hugeicons-plus-sign-circle" color="white" variant="solid" @click="isOpen = true" />
			<TransactionModal v-model="isOpen" />
		</div>
	</section>

	<section v-if="!isLoading">
		<!-- (value, key) in Object -->
		<div v-for="(transactions, date) in groupByTime" :key="date" class="mb-20">
			<TransactionDailySummary :date="date" :transactions="transactions" />
			<Transaction v-for="transaction in transactions" :key="transaction.id" :transaction="transaction" @deleted="refreshTransaction()" />
		</div>
	</section>

	<section v-else>
		<USkeleton class="h-8 w-full mb-2" v-for="i in 4" :key="i" />
	</section>
</template>

<script setup>
	import {summaryOptions} from '~/constant'
	// ref() use for get newst data from DOM automaticaly [just use for primitive value]
	// reactive() same like ref() but it use for object and array
	const optionSelected = ref(summaryOptions[1])
	const supabase = useSupabaseClient()
	
	const transactions = ref([])
	const isLoading = ref(false)

	const isOpen = ref(false)

	const fetchTransactions = async () => {
		isLoading.value = true

		try {
			const { data } = await useAsyncData('transactions', async () => {
				const { data, error } = await supabase
					.from('transactions')
					.select()
					.order('created_at', { ascending: false })

				if (error) return []

				return data // just fill value to the const data
			})

			return data.value // fill value to const fetchTransactions
		} finally {
			isLoading.value = false
		}
		
	}

	// refresh data
	const refreshTransaction = async () => transactions.value = await fetchTransactions()	
	await refreshTransaction()

	/**
	 * If you're debugging, you can use console.log inside the computed property, 
	 * but remember that it'll be executed every time the property is recomputed.
	 */
	const groupByTime = computed(() => {
		let timeGroup = {}

		// make const on for function
		for (const transaction of transactions.value) {
			// '2024-11-15T12:14:18.18547+00:00'
			// split: ['2024-11-15', '12:14:18.18547+00:00']
			// [0] : '2024-11-15'
			const date = new Date(transaction.created_at).toISOString().split('T')[0]

			if (!timeGroup[date]) {
				timeGroup[date] = []
			}

			timeGroup[date].push(transaction)
		}

		return timeGroup;
	})

	const income = computed(() => {
		return transactions.value.filter(t => t.type == "Income")
	})
	const expense = computed(() => {
		return transactions.value.filter(t => t.type == "Expense")
	})

	const incomeCount = computed(() => income.value.length)
	const expenseCount = computed(() => expense.value.length)

	const incomeTotal = computed(() => {
		//  argument sum (this the iteration) and transaction (this is the value iteration)
		// initial value sum is 0
		if (incomeCount) {
			return income.value.reduce((sum, transaction) => sum + transaction.amount, 0)
		}

		return 0
	})
	const expenseTotal = computed(() => {
		//  argument sum (this the iteration) and transaction (this is the value iteration)
		// initial value sum is 0
		if (expenseCount) {
			return expense.value.reduce((sum, transaction) => sum + transaction.amount, 0)
		}

		return 0
	})
</script>