<template>
	<nav>
		<ul class="lg:ps-0 flex space-x-4" id="menu">
			<li>
				<NuxtLink to="/" class="link">Main</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/about" class="link">About</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/github" class="link">Git</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/blog" class="link">Blog</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
	/* use tailwind classes style */
	.link {
		@apply p-1 hover:underline
	}

	#menu {
		font-family: "Playwrite GB S", cursive;
		font-weight: 400;
	}
</style>