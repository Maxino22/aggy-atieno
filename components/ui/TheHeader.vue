<template>
	<header>
		<nav class="container mx-auto my-6 flex justify-between items-center">
			<nuxt-link to="/">
				<h2 class="text-primary font-sans font-semibold text-2xl">
					Aggy Otieno
				</h2>
			</nuxt-link>
			<div class="hidden lg:flex lg:space-x-8 items-center">
				<nuxt-link class="text-primary uppercase text-lg" to="/"
					>home</nuxt-link
				>
				<nuxt-link class="text-primary uppercase text-lg" to="/about-me"
					>about-me</nuxt-link
				>
				<nuxt-link class="text-primary uppercase text-lg" to="/portfolio"
					>Portfolio</nuxt-link
				>
				<nuxt-link class="text-primary uppercase text-lg" to="/contact"
					>contact</nuxt-link
				>
			</div>
			<div class="flex items-center space-x-10">
				<button>
					<Icon name="uil:sun" />
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
						id="menu-btn"
						type="button"
						class="z-40 block hamburger md:hidden focus:outline-none"
					>
						<span class="hamburger-top"></span>
						<span class="hamburger-middle"></span>
						<span class="hamburger-bottom"></span>
					</button>
				</div>
			</div>
		</nav>
	</header>
</template>
