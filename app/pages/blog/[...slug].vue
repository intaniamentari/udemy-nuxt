<template>
	<div>
		We Are inside a blog
	</div>
</template>

<script setup>
	const route = useRoute()
	console.log(route.params.slug)
</script>