<template>
	<section class="flex justify-between mmb-10">
		<h1 class="text-4xl font-extrabold"> Summary</h1>
		<USelectMenu v-model="optionSelected" :options="summaryOptions" />
	</section>

	<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10">
		<Trend color="green" title="Income" :amount="4000" :last-amount="4000" :loading="false" />
		<Trend color="red" title="Income" :amount="4000" :last-amount="4000" :loading="false" />
		<Trend color="green" title="Income" :amount="4000" :last-amount="4000" :loading="false" />
		<Trend color="red" title="Income" :amount="4000" :last-amount="4000" :loading="false" />
	</section>
</template>

<script setup>
	import {summaryOptions} from '~/constant'
	const optionSelected = ref(summaryOptions[1])
</script>