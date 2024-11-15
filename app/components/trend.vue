<template>
	<div>
		<div class="font-bold" :class="{'green': trendingUp, 'red': !trendingUp}">{{ title }}</div>
	
		<div class="text-2xl font-extrabold text-black dark:text-white mb-2">
			<USkeleton v-if="loading" class="h-8 w-full"  />
			<div v-else>
				{{ currency }}
			</div>
		</div>
	
		<div>
			<USkeleton v-if="loading" class="h-6 w-full"  />
			<div v-else class="flex space-x-1 items-center text-sm">
				<UIcon :name="icon" class="w-6 h-6" :class="{'green': trendingUp, 'red': !trendingUp}" />
				<div class="text-gray-500 dark:text-gray-400">
					{{ percentage }} vs last period
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useCurrency } from '~/composables/useCurrency';
import Transaction from './transaction.vue';

	const props = defineProps({
		title: String,
		amount: Number,
		loading: Boolean,
		lastAmount: Number,
		color:String
	})

	const { currency } = useCurrency(props.amount)

	const trendingUp = computed(() => props.lastAmount <= props.amount)
	const icon = computed(() => trendingUp.value ? 'i-hugeicons-trade-up' : 'i-hugeicons-trade-down')

	const percentage = computed(() => {
		if (props.amount == 0 || props.lastAmount == 0) '-%'

		let bigger = Math.max(props.amount, props.lastAmount)
		let lower = Math.min(props.amount, props.lastAmount)

		return `${Math.ceil(((bigger - lower) / lower) * 100)}%`
	})
</script>

<style>
	.green {
		@apply text-green-900 dark:text-green-600
	}

	.red {
		@apply text-red-900 dark:text-red-600
	}
</style>