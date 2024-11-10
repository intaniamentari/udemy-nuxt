<template>
	<NuxtLayout>
		<div class="text-center">
			<div>
				<h2 class="text-7xl font-bold">{{ error.statusCode }}</h2>
				<p>{{ error.statusMessage }}</p>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup>
	defineProps({
		error: Object
	})
	useHead({
		title: error.statusCode
	})
</script>
