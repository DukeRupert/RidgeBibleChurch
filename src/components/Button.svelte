<script>
  export let label = "FixMe";
  export let route = "";
</script>

<style>
  a {
    background-color: var(--buttonBackground);
    border: none;
    border-radius: 15px;
    color: var(--buttonColor);
    padding: 0.5em 1em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.5em;
    transition: all 200ms ease-in-out;
    align-self: center;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  a:hover,
  a:active {
    transform: scale(1.15, 1.15);
  }

  .center {
    align-self: center;
  }
</style>

<a href={route} class={$$props.class}>{label}</a>
