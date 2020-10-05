<script>
  import AboutUs from "../components/AboutUs.svelte";
  import AnimatedLogo from "../components/AnimatedLogo.svelte";
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
    margin-top: 80px;
    width: 100vw;
  }
</style>

<svelte:head>
  <title>The Ridge Bible Church</title>
</svelte:head>

<section>
  <div class="logo">
    <AnimatedLogo />
  </div>
  <div>
    <AboutUs />
  </div>
</section>
