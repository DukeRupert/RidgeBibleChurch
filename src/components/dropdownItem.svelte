<script>
  import { dropdownOpen } from "../store";
  export let title = "";
  export let route;
  export let primary = false;
  export let segment;

  function toggle() {
    dropdownOpen.update((value) => !value);
  }
</script>

<style>
  a {
    height: 50px;
    display: flex;
    align-items: center;
    transition: background var(--speed);
    padding: 1em;
    color: black;
  }

  [aria-current] {
    border-color: var(--red);
  }

  button {
    font-size: 17px;
    font-weight: bold;
    padding: 0.5em 0em;
    border: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-color: var(--grey);
    border-bottom: 2px solid white;
  }

  .primary {
    background-color: var(--red);
    padding: 0.75em 2em;
    border-radius: 20px;
    border: none;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<a href={route} on:click={toggle}>
  <button aria-current={segment === route ? 'page' : undefined} class:primary>
    {title}
  </button>
</a>
