<template>
	<UModal v-model="modalOpen">
		<UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
			<template #header>
				Expense
			</template>

			<div>Hello</div>
		</UCard>
	</UModal>
</template>

<script setup>
	const props = defineProps({
		'modalOpen': Boolean
	})

	console.log(props.isOpen)
	const emit = defineEmits(['update:modalOpen'])

	const modalOpen = computed({
		get: () => props.modalOpen,
		set: (value) => {
			emit('update:modalOpen', value)
		}
	})
</script>