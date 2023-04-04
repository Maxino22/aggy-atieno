// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/image-edge',
		'@vueuse/nuxt',
		'@nuxtjs/tailwindcss',
		'nuxt-icon',
		'@nuxtjs/color-mode',
	],
	image: {
		provider: 'storyblok',
		storyblok: {
			baseURL: 'https://a.storyblok.com',
		},
	},
	colorMode: {
		classSuffix: '',
	},
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config.js',
		exposeConfig: false,
		injectPosition: 0,
		viewer: true,
	},
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
