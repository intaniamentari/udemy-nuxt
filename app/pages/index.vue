<template>
    <!-- You must keep add this for route "/" -->
	<div class="prose dark:prose-invert prose-a:no-underline prose-h1:text-2xl prose-h2:text-2xl mb-20 max-w-none">
		<ContentDoc />
		<IconLink />
	</div>
</template>

<script setup>
	useHead({
		title: 'Main'
	})
</script>

<style>
	h1,h2,h3 {
		font-family: "Playwrite GB S"; 
		font-weight: 400
	} 
</style>