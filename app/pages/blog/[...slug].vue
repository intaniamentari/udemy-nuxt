<template>
	<!-- use prose-invert for change the color theme text when theme is dark -->
	<article class="prose dark:prose-invert prose-pre:bg-white prose-a:no-underline prose-pre:dark:bg-gray-900 max-w-none">
		<!-- access the main content : doc -->
		<ContentDoc v-slot="{doc}">
			<div class="grid grid-cols-6 gap-16">
				<div :class="{'lg:col-span-4 col-span-6': doc.toc, 'col-span-6': !doc.toc}">
					<ContentRenderer :value="doc" />
				</div>
				<div class="hidden lg:block lg:col-span-2" v-if="doc.toc">
					<aside class="top-8 sticky not-prose">
						<div class="font-semibold">Table of Content</div>
						<nav>
							<!-- send list of data links -->
							<TocLinks :links="doc.body.toc.links" />
						</nav>
					</aside>
				</div>
			</div>
		 </ContentDoc>
	</article>
</template>

<script setup>
	const route = useRoute()
	console.log(route.params.slug)
</script>

<style scoped>
	h1,h2,h3,h4 {
		font-family: "Playwrite GB S"; 
		font-weight: 400
	} 
</style>