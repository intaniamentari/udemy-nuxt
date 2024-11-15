<template>
	<div class="grid grid-cols-2 border-b pb-5 mt-5">
		<div class="flex items-center justify-between">
			<div class="flex items-center space-x-1">
				<UIcon name="i-hugeicons-arrow-up-right-01" class="w-5 h-5 text-green-600" />
				<p>Salary</p>
			</div>
			<UBadge color="white" variant="solid">category</UBadge>
		</div>
		<div class="flex space-x-2 justify-end">
			<p>{{ currency }}</p>
			<UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
				<UButton color="white" label="Options" trailing-icon="i-heroicons-chevron-down-20-solid" />
			</UDropdown>
		</div>
	</div>
</template>

<script setup>
	const {currency} = useCurrency(3000)
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