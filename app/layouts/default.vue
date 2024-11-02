<template>
	<div class="container mx-auto max-w-2xl">
		<header class="flex justify-between items-center mt-5">
			<div>
				<NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200">Intania</NuxtLink>
			</div>
			<!-- use component menu and it imported automatically -->
			<Menu />
		</header>
		<slot />
	</div>
</template>