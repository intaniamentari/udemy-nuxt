<template>
	<UModal v-model="modalOpen">
		<UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
			<template #header>
				Finance Tracking
			</template>

			<UForm :schema="schema" :state="state" class="space-y-4">
				<UFormGroup label="Type" name="type" required class="mb-4">
					<USelect v-model.number="state.type" :options="types" />
				</UFormGroup>
				<UFormGroup label="Amount" name="amount" required class="mb-4">
					<UInput v-model="state.amount" type="number" />
				</UFormGroup>
				<UFormGroup label="Date" name="created_at" required class="mb-4">
					<UInput v-mode="state.date" type="date" icon="i-hugeicons-calendar-03" />
				</UFormGroup>
				<UFormGroup label="Category" name="category" class="mb-4">
					<USelect v-model="state.category" :options="categories" />
				</UFormGroup>
				<UFormGroup label="Description" name="description" class="mb-4">
					<UTextarea v-mode="state.description" color="white" variant="outline" placeholder="" />
				</UFormGroup>
			</UForm>


			<UButton class="mt-10" block type="submit" variant="solid">
				Save
			</UButton>
		</UCard>
	</UModal>
</template>

<script setup>
	import { types, categories } from '~/constant';
	import { z } from 'zod'

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

	const schema = z.object({
		amount: z.number().positive('Amount must be greater than 0'),
		description: z.string().optional(),
		created_at: z.string(),
	})

	const typeSelected = ref(types[0])
	const categorySelected = ref(categories[0])

	// the default value in form input
	const state = ref({
		'type': typeSelected,
		'amount': 0,
		'description': undefined,
		'date': undefined,
		'category': categorySelected
	})

</script>