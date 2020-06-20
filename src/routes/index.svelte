<script>
	import AboutUs from '../components/AboutUs.svelte';

  // Animations do not play on initial load by default. Condition change used to trigger logo animation.
  let condition = false;
	setTimeout(() => condition = true)
</script>

<style>

  div {
    padding: 2em;
  }

  img {
    width: 100%;
    margin: 0 0 1em 0;
  }

</style>

<svelte:head>
  <title>The Ridge Bible Church</title>
</svelte:head>

<div>
  <img src="RidgeLogo.svg" alt='The Ridge Bible Church logo'/>
  <AboutUs />
</div>
