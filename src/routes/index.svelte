<script>
  import AboutUs from '../components/AboutUs.svelte';
  import AnimatedLogo from '../components/AnimatedLogo.svelte';
</script>

<style>

  div {
    padding: 2em;
  }

  img {
    width: 100%;
    margin: 0 0 1em 0;
  }

  svg {
    width: 100%;
    margin:  0 0 1em 0;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100vw;
  }

</style>

<svelte:head>
  <title>The Ridge Bible Church</title>
</svelte:head>

<div class='logo'>
  <AnimatedLogo />
</div>
<div>
  <AboutUs />
</div>
