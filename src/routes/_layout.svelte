<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<main>
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
