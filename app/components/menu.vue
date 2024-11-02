<template>
	<nav class="font-mono">
		<ul class="flex space-x-4">
			<li>
				<NuxtLink to="/" class="link">Main</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/about" class="link">About</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
	/* use tailwind classes style */
	link {
		@apply p-1 hover:underline
	}
</style>