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
    color: white;
  }

  [aria-current] {
    color: var(--red);
  }

  button {
    font-size: 17px;
    font-weight: bold;
    padding: 0.75em 1.5em;
    border: none;
    border-radius: 20px;
    background-color: #2f2f2f;
    color: white;
    text-transform: uppercase;
  }

  .primary {
    background-color: white;
    color: #b60000;
  }
</style>

<a href={route} on:click={toggle}>
  <button aria-current={segment === route ? 'page' : undefined} class:primary>
    {title}
  </button>
</a>
