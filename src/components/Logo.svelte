<script>
  import { draw } from "svelte/transition";
  import { quintIn } from "svelte/easing";

  // Ensure menu is not toggled on when navigating home
  import { dropdownOpen } from "../store";

  function closeDropdown() {
    dropdownOpen.set(false);
  }
</script>

<style>
  img {
    max-height: 100px;
  }
  a {
    margin-right: auto;
    margin-top: 10px;
  }

  @media (max-width: 400px) {
    img {
      max-height: 80px;
    }
  }
</style>

<a href="/" on:click={closeDropdown}>
  <img src="LogoMobile.svg" alt="Ridge Church logo" />
</a>
