<script>
	import Navbar from '../components/Navbar.svelte';
	import NavbarHome from '../components/NavbarHome.svelte';
	import Footer from '../components/Footer.svelte';
	export let segment;
</script>

<style>
	main {
		position: relative;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

{#if segment === undefined}
<NavbarHome />
{:else}
<Navbar />
{/if}

<main>
	<slot></slot>
</main>
 
<Footer />