// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { 
		enabled: true 
	},
	future: {
		compatibilityVersion: 4,
	},
	content: {
		highlight: {
		  theme: {
			default: 'vitesse-light',
			dark: 'vitesse-dark',
			sepia: 'monokai'
		  }
		}
	},
	nitro: {
		prerender: {
		  routes: ['/sitemap.xml']
		}
	},
  	modules: [
		'@nuxtjs/tailwindcss', 
		'@nuxtjs/color-mode',
		'@nuxt/content',
		'@nuxt/icon'
	]
})