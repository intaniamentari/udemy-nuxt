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
				<!-- :loading is UButton have -->
				<UButton color="white" variant="ghost" trailing-icon="i-hugeicons-drag-drop-vertical" :loading="isLoading" />
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

	const isLoading = ref(false)
	const supabase = useSupabaseClient()
	const toast = useToast()

	const deleteToast = async () => {
		isLoading.value = true

		try {
			await supabase.from('transactions').delete().eq('id', props.transaction.id)

			toast.add({
				title: 'Success deleted!',
				icon: 'i-hugeicons-checkmark-circle-03',
				color: 'green'
			})

		} catch (error) {
			toast.add({
				title: 'Error',
				icon: 'i-hugeicons-bug-02',
				color: 'red'
			})
		} finally {
			isLoading.value = false
		}
	} 

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
				click: deleteToast
			},
		]
	]
</script>