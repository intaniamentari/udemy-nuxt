<template>
	<!-- use prose-invert for change the color theme text when theme is dark -->
	<article class="prose dark:prose-invert">
		<ContentDoc />
	</article>
</template>

<script setup>
	const route = useRoute()
	console.log(route.params.slug)
</script>