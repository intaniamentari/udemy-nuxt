<template>
	<div>
		<section v-if="pending">Data Pending...</section>
		<section v-else-if="error">Sorry data error... please try again</section>
		<section v-else v-for="repositori in filtered" :id="repositori.id">
			<a :href="repositori.html_url" target="_blank" class="grid p-5 grid-cols-1 rounded-lg border-solid border-2 mb-7 border-gray-300 sepia-hover dark:hover:bg-cyan-900">
				<div class="flex items-center justify-between mb-4">
					<h3 class="font-semibold">{{ repositori.name }}</h3>
					<p>{{ repositori.language }}</p>
				</div>
				<p>{{ repositori.description }}</p>
			</a>
		</section>
	</div>
</template>

<script setup>
	// this destructuring data is created by $fetch {pending, error, data}
	const {error, pending, data} = await useFetch('https://api.github.com/users/intaniamentari/repos')

	// computed for reactive updated data
	const filtered = computed(() => 
		{
			if (!data.value) return [] // must check data is ready before maping
			return data.value.map(repo => ({
				...repo,
				description: repo.description ?? `Lets check it out!`,
				language: repo.language ? 'with ' + repo.language + ' 🖥️' : 'with ❤️'
			}))
		}
	) 
</script>

<style scoped>
	.sepia-mode a:hover {
		background-color: rgb(120 53 15);
		color: white;
	}
	.sepia-mode a {
		border-color: rgb(120 53 15);
	}

	.light-mode a:hover {
		background-color: rgb(245 245 245);
	}
</style>