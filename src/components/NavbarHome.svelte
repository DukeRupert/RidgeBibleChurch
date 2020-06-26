<script>
  import Logo from './Logo.svelte';
  import NavItem from "./NavItem.svelte";
  import Dropdown from './dropdown.svelte';
  let width;
  let mobile = false;
  $: if (width < 450) {
    mobile = true;
    }
    else {
      mobile = false;
    }
</script>

<style>
  nav {
    height: 80px;
    background-color: white;
    color: black;
    display: flex;
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
    justify-content: flex-end;
    z-index: 101;
  }

@media only screen and (max-width: 655px) {

  nav {
    position: relative;
    top: 0px;
  }
}
</style>

<svelte:window bind:innerWidth={width}/>

{#if mobile}
  <nav>
    <Dropdown />
  </nav>
{:else}
<nav>
  <NavItem title="Staff" route='/staff'/>
  <NavItem title="Giving" route='/giving'/>
  <NavItem title="Sermons" route='/sermons'/>
  <NavItem title="Blog" route='/blog'/>
  <NavItem title="Statement of Faith" route='/statement'/>
</nav>
{/if}
