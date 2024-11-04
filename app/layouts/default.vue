<template>
	<div class="container mx-auto max-w-2xl">
		<header class="flex justify-between items-center mt-5">
			<div>
				<NuxtLink to="/" class="text-xl font-semibold" id="logo">Intania</NuxtLink>
			</div>
			<!-- use component menu and it imported automatically -->
			<Menu />
			<SwitchTheme />
		</header>
		<slot />
	</div>
</template>

<script setup>
	useSeoMeta({
		titleTemplate: '%s - Intania Mentari',
	})

	useHead({
		htmlAttrs: {
			lang: 'en'
		},
		link: [
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap'
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap'
			}
		]
	})
</script>

<style>
	body {
		font-family: 'Nunito';
		font-weight: 300;
	}

	#logo {
		font-family: "Playwrite GB S", cursive;
		font-weight: 400;
	}
</style>