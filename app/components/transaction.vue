<template>
	<div class="grid grid-cols-2 border-b pb-5 mt-5">
		<div class="flex items-center justify-between">
			<div class="flex items-center space-x-1">
				<UIcon :name="icon" :class="iconColor" class="w-5 h-5 text-green-600" />
				<p>{{ transaction.description }}</p>
			</div>
			<UBadge color="white" variant="solid" v-if="transaction.category">{{ transaction.category }}</UBadge>
		</div>
		<div class="flex items-center space-x-2 justify-end">
			<p>{{ currency }}</p>
			<UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
				<!-- variant ghost make button without border -->
				<UButton color="white" variant="ghost" trailing-icon="i-hugeicons-drag-drop-vertical" />
			</UDropdown>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		transaction: Object
	})

	const isIncome = computed(() => {
		// return props.transaction.type == "Income" || props.transaction.type == "Incvestment" || props.transaction.type == "Saving"
		return ["Income", "Investment", "Saving"].includes(props.transaction.type);
	})

	const icon = computed(() => {
		return isIncome.value ? 'i-hugeicons-arrow-up-right-01' : 'i-hugeicons-arrow-down-left-01'
	})

	const iconColor = computed(() => {
		return isIncome.value ? 'dark:text-green-600 text-green-900' : 'dark:text-red-600 text-red-900'
	})

	const { currency } = useCurrency(props.transaction.amount)

	const items = [
		[
			{
				label: 'Edit',
				icon: 'i-hugeicons-pencil-edit-02',
				click: () => {
					console.log('Edit')
				}
			},
			{
				label: 'Detete',
				icon: 'i-hugeicons-delete-02',
				click: () => {
					console.log('Delete')
				}
			},
		]
	]
</script>