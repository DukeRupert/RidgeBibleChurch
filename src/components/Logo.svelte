<script>
  import { draw } from 'svelte/transition';
  import { quintIn } from 'svelte/easing';


  export let title = "";

  // Ensure menu is not toggled on when navigating home
  import { dropdownOpen } from '../store';

  function closeDropdown() {
    dropdownOpen.set(false);
  }
</script>

<style>
  li {
    display: flex;
    align-items: center;
    margin-right: auto;
  }

  img {
    max-height: 80px;
    width: 75vw;
  }

  .title {
    margin-left: 10px;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 655px) {

    .title {
      font-size: 19px;
      letter-spacing: 1px;
    }
  }
</style>


<li>
  <a href="/" on:click={closeDropdown}>
    <img src='LogoMobile.svg' alt='Ridge Church logo'/>
  </a>
  <a href="/" on:click={closeDropdown} class="title">{title}</a>
</li>
