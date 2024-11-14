<template>
	<div>
		<div class="font-bold" :class="[color]">{{ title }}</div>
	
		<div class="text-2xl font-extrabold text-black dark:text-white mb-2">
			<USkeleton v-if="loading" class="h-8 w-full"  />
			<div v-else>
				{{ amount }}
			</div>
		</div>
	
		<div>
			<USkeleton v-if="loading" class="h-6 w-full"  />
			<div v-else class="flex space-x-1 items-center text-sm">
				<UIcon name="i-hugeicons-trade-up" class="w-6 h-6" :class="[color]" />
				<div class="text-gray-500 dark:text-gray-400">
					30% vs last period
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	defineProps({
		title: String,
		amount: Number,
		loading: Boolean,
		lastAmount: Number,
		color:String
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