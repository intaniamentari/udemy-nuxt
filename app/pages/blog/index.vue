<template>
	<h2 class="mt-10 text-2xl font-semibold mb-10">My Blog List</h2>
	<div v-for="post in posts" :key="post._path">
		<NuxtLink :to="post._path">
			<div class="prose dark:prose-invert grid p-5 grid-cols-1 rounded-lg border-solid border-2 mb-7 border-gray-300 sepia-hover dark:hover:bg-cyan-900 max-w-none">
				<h3 class="">{{ post.title }}</h3>
				<p>{{ post.description }}</p>
			</div>
		</NuxtLink>
	</div>
</template>

<script setup>
	const {data : posts} = await useAsyncData('content-data', () => queryContent('/blog').only(['title', 'description', '_path']).find())
	useHead({
		title: 'Blog'
	})
</script>

<style scoped>
	.column {
		@apply flex py-4 items-center
	}
	.sepia-mode div:hover {
		background-color: rgb(120 53 15);
		color: white;
	}
	.sepia-mode div {
		border-color: rgb(120 53 15);
	}

	.light-mode div:hover {
		background-color: rgb(245 245 245);
	}

	.light-mode div {
		color: black;
	}

	.light-mode h3 {
		color: black;
	}

	h1,h2,h3,h4 {
		font-family: "Playwrite GB S"; 
		font-weight: 400
	} 

</style>