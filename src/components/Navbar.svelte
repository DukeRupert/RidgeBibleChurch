<script>
  import Logo from "./Logo.svelte";
  import NavItem from "./NavItem.svelte";
  import Dropdown from "./dropdown.svelte";

  export let segment;

  let width;
  let mobile = false;
  $: if (width < 1075) {
    mobile = true;
  } else {
    mobile = false;
  }
</script>

<style>
  nav {
    top: 0px;
    height: auto;
    background-color: white;
    color: black;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 2%;
    box-sizing: border-box;
    z-index: 101;
  }

  nav::after {
    position: absolute;
    content: "";
    width: calc(100vw - 360px);
    height: 2px;
    background-color: var(--red);
    display: block;
    top: 88px;
    right: 0px;
  }

  @media (max-width: 1075px) {
    nav::after {
      display: none;
    }
  }
</style>

<svelte:window bind:innerWidth={width} />

{#if mobile}
  <nav>

    <Logo {segment} />

    <Dropdown {segment} />
  </nav>
{:else}
  <nav>

    <Logo {segment} />
    <NavItem title="Staff" route="staff" {segment} />
    <NavItem title="Giving" route="giving" {segment} />
    <NavItem title="Sermons" route="sermons" {segment} />
    <NavItem title="Statement of Faith" route="statement" {segment} />
    <NavItem title="Covid" route="covid" {segment} />
    <NavItem
      primary
      title="Sign In"
      route="https://theridgebiblechurch.breezechms.com/login"
      {segment} />

  </nav>
{/if}
