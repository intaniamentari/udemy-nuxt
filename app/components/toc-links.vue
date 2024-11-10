<template>
	<div v-for="link in links" :key="link.id">
		<!-- bring style indent if level header is smaller -->
		<NuxtLink class="hover:underline" :class="{'ml-4':level}" :to="{path: route.path, hash:`#${link.id}`}">
			{{ link.text }}
		</NuxtLink>
		<TocLinks :links="link.children" :level="level + 1" />
	</div>
</template>

<script setup>
	const route = useRoute()
	defineProps({
		links: Array,
		level: {
			default: 0,
			types: Number 
		}
	})
</script>