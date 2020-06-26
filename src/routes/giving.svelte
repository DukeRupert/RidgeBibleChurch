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

	h1 {
		font-weight: bold;
	}

	.italics {
		font-style: italic;
	}

	/*Larger Screen*/
	@media only screen and (min-width: 655px) {

		h1 {
			font-size: 4em;
		} 

	}
	
</style>

<svelte:head>
	<title>Giving</title>
</svelte:head>

<img src='/mtRange.jpg' alt='A mountain range.'/>
<div>
	<h1>Giving</h1>
	<p class='italics'>You will be enriched in every way to be generous in every way, which through us will produce thanksgiving to God...2 Corinthians 9:11</p>
	<p>Cash or check donations can be placed in the labeled wooden dropbox in the foyer whenever the church is open.</p>
	<p>Electronic payment options are also available for your convenience. Please use any of the methods provided below: </p>
	<button><Fa icon={faPaypal} size='2x' /> Paypal</button>
</div>