<script>
  import { dropdownOpen } from '../store'
  export let title = '';
  export let route;

  function toggle() {
      dropdownOpen.update(value => !value);
  }
</script>


<a href={route}>
  <button on:click={toggle}>{title}</button>
</a>


<style>

  a {
    height: 50px;
    display: flex;
    align-items: center;
    transition: background var(--speed);
    padding: 0.5rem;
    color: var(--text-color);
  }

  button {
    font-size: 17px;
    font-weight: bold;
    border: none;
    background-color: white;
  }
      
</style>
