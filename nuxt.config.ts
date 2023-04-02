// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', 'nuxt-icon'],
	app: {
		head: {
			link: [
				{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
				{
					rel: 'preconnect',
					href: 'https://fonts.googleapis.com',
				},
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: 'anonymous',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;700&family=Open+Sans&display=swap',
				},
			],
		},
	},
})
