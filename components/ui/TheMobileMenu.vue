<template>
	<transition name="fade-in">
		<div
			v-if="mobileMenu"
			class="absolute top-0 flex flex-col justify-center lg:hidden items-center w-full min-h-screen py-5 space-y-4 text-white text-xl bg-black"
		>
			<nuxt-link @click="closeMobileMenu" to="/" class="cursor-pointer">
				Aggy Otieno
			</nuxt-link>
			<nuxt-link @click="closeMobileMenu" to="" class="hover:text-pink-500"
				>About Me</nuxt-link
			>
			<nuxt-link @click="closeMobileMenu" to="" class="hover:text-pink-500"
				>Portfolio</nuxt-link
			>
			<nuxt-link @click="closeMobileMenu" to="" class="hover:text-pink-500"
				>Contact Me</nuxt-link
			>
		</div>
	</transition>
</template>

<script setup>
const mobileMenu = useState('mobileMenu')

const closeMobileMenu = () => {
	mobileMenu.value = false
}
</script>

<style>
.fade-in-enter-from,
.fade-in-leave-to {
	opacity: 0;
	transform: translateX(80px);
}

.fade-in-enter-active,
.fade-in-leave-active {
	transition: all 0.3s ease-in;
}
</style>
