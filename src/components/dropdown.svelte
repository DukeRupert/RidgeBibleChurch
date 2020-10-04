<script>
  import DropdownItem from "./dropdownItem.svelte";
  import { slide } from "svelte/transition";
  import { quadOut } from "svelte/easing";
  import { dropdownOpen } from "../store";

  export let segment;
  //renaming store value to make markup more concise (ie. class:active)
  $: active = $dropdownOpen;

  //toggle dropdown status on click
  function toggle() {
    dropdownOpen.update((value) => !value);
  }
</script>

<style>
  .menu {
    position: fixed;
    overflow: hidden;
    z-index: 99;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100% - 60px);
    box-sizing: border-box;
    border-top: 2px black solid;
    background-color: #2f2f2f;
  }
</style>

<svelte:head>
  {#if active}
    <style>
      body {
        overflow: hidden;
      }
    </style>
  {/if}
</svelte:head>

<button
  on:click={toggle}
  class="hamburger hamburger--collapse {active ? 'is-active' : ''}"
  type="button">
  <span class="hamburger-box">
    <span class="hamburger-inner" />
  </span>
</button>
{#if $dropdownOpen}
  <div
    class="menu"
    transition:slide={{ duration: 400, opacity: 0.8, easing: quadOut }}>
    <DropdownItem title="Staff" route="staff" onClick={toggle} {segment} />
    <DropdownItem title="Giving" route="giving" onClick={toggle} {segment} />
    <DropdownItem title="Sermons" route="sermons" onClick={toggle} {segment} />

    <DropdownItem
      title="Statement of Faith"
      route="statement"
      onClick={toggle}
      {segment} />
    <DropdownItem
      title="Contact Us"
      route="contact-us"
      onClick={toggle}
      {segment} />
    <DropdownItem
      primary
      title="Sign In"
      route="https://theridgebiblechurch.breezechms.com/login"
      onClick={toggle}
      {segment} />
  </div>
{/if}
