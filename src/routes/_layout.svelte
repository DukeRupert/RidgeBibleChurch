<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import { dropdownOpen } from "../store";

  //renaming store value to make markup more concise (ie. class:active)
  $: active = $dropdownOpen;

  export let segment;
</script>

<style>
  .active {
    overflow: hidden;
  }
</style>

<main class:active>
  <header>
    <Navbar {segment} />
  </header>
  <content>
    <slot />
  </content>
  <footer>
    <Footer />
  </footer>
</main>
