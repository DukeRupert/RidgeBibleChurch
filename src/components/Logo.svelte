<script>
  export let segment;

  // Ensure menu is not toggled on when navigating home
  import { dropdownOpen } from "../store";

  function closeDropdown() {
    dropdownOpen.set(false);
  }
</script>

<style>
  img {
    max-height: 100px;
    visibility: hidden;
  }
  a {
    margin-right: auto;
    margin-top: 10px;
  }

  .segment {
    visibility: visible;
  }

  @media (max-width: 400px) {
    img {
      max-height: 70px;
    }
  }
</style>

<a href="/" on:click={closeDropdown}>
  <img src="LogoMobile.svg" alt="Ridge Church logo" class:segment />
</a>
