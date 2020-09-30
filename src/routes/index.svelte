<script>
  import AboutUs from "../components/AboutUs.svelte";
  import AnimatedLogo from "../components/AnimatedLogo.svelte";
  export let segment;
</script>

<style>
  div {
    padding: 2em;
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

<div class="logo">
  <AnimatedLogo />
</div>
<div>
  <p>{segment}</p>
  <AboutUs />
</div>
