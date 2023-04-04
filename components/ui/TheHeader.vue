<template>
	<header class="container max-w-7xl mx-auto py-12">
		<nav
			class="flex text-primary items-center justify-between px-6 dark:text-white"
		>
			<nuxt-link to="/">
				<h2 class="font-sans font-semibold text-2xl">Aggy Otieno</h2>
			</nuxt-link>
			<div class="hidden lg:flex lg:space-x-8 items-center">
				<nuxt-link class="uppercase text-lg" to="/">home</nuxt-link>
				<nuxt-link class="uppercase text-lg" to="/about-me">about-me</nuxt-link>
				<nuxt-link class="uppercase text-lg" to="/portfolio"
					>Portfolio</nuxt-link
				>
				<nuxt-link class="uppercase text-lg" to="/contact">contact</nuxt-link>
			</div>
			<div class="flex items-center space-x-5">
				<button
					@click="
						setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')
					"
				>
					<Icon
						size="27px"
						:name="$colorMode.value == 'dark' ? 'uil:sun' : 'uil:moon'"
					/>
				</button>
				<a
					class="hidden lg:block"
					href="https://www.instagram.com/aggy_otieno/"
					target="_blank"
				>
					<Icon name="uil:instagram" />
				</a>
				<!-- Hamburger Button -->
				<div class="lg:hidden">
					<button
						@click="toggleMobileMenu()"
						id="menu-btn"
						type="button"
						:class="IconClass"
						class="z-40 block hamburger lg:hidden focus:outline-none"
					>
						<span class="hamburger-top bg-black dark:bg-white"></span>
						<span class="hamburger-middle bg-black dark:bg-white"></span>
						<span class="hamburger-bottom bg-black dark:bg-white"></span>
					</button>
				</div>
			</div>
		</nav>
		<UiTheMobileMenu />
	</header>
</template>

<script setup lang="ts">
console.log(useColorMode().value)

type Theme = 'light' | 'dark'
const setColorTheme = (newTheme: Theme) => {
	useColorMode().preference = newTheme
}

const mobileMenu = useState('mobileMenu', () => false)

const toggleMobileMenu = useToggle(mobileMenu)

const IconClass = computed(() => {
	if (mobileMenu.value) return 'open'
})

// const ButtonIcon = computed(() => {
// 	if (useColorMode().value === 'dark') return 'uil:sun'
// 	if (useColorMode().value === 'light') return 'uil:moon'
// })
</script>
