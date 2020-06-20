<script>
	import Fa from 'svelte-fa';
    import { faPaypal } from '@fortawesome/free-brands-svg-icons';
</script>

<style>
	div {
		padding: 2em;
	}

	img {
		width: 100%;
	}
</style>

<svelte:head>
	<title>Giving</title>
</svelte:head>

<img src='/mtRange.jpg' alt='A mountain range.'/>
<div>
	<h2>Thank you for your generosity.</h2>
	<p>Please use any of the methods provided below: </p>
	<button><Fa icon={faPaypal} size='2x' />Paypal</button>
</div>