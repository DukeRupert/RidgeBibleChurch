<script>
	import Fa from 'svelte-fa';
    import { faPaypal } from '@fortawesome/free-brands-svg-icons';
	import { donation } from '../store';
</script>

<style>
	div {
		padding: 2em;
	}

	img {
		width: 100%;
	}

	button {
		padding: 0.5em 1em;
	}
	
</style>

<svelte:head>
	<title>Giving</title>
</svelte:head>

<img src='/mtRange.jpg' alt='A mountain range.'/>
<div>
	<h2>Thank you for your generosity.</h2>
	<p>Cash or check donations can be placed in the labeled wooden dropbox in the foyer whenever the church is open.</p>
	<p>Electronic payment options are also available for your convenience. Please use any of the methods provided below: </p>
	<button><Fa icon={faPaypal} size='2x' /> Paypal</button>
</div>