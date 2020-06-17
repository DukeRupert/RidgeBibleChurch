<script>
	import Navbar from '../components/Navbar.svelte';

</script>

<style>
	main {
		position: relative;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Navbar />

<main>
	<slot></slot>
</main>