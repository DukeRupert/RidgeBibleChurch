<script>
	import Navbar from '../components/Navbar.svelte';
	import NavbarHome from '../components/NavbarHome.svelte';
	import Footer from '../components/Footer.svelte';
	export let segment;
	import { dropdownOpen } from '../store';
</script>

<style>
	main {
		position: relative;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.fixed {
		position: fixed;
	}
</style>

{#if segment === undefined}
<NavbarHome />
{:else}
<Navbar />
{/if}

<main class='{$dropdownOpen ? 'fixed' : undefined}'>
	<slot></slot>
</main>
 
<Footer />