<script>
  export let label = "FixMe";
  export let route = "";
  export let center = false;
</script>

<style>
  button {
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

  button:hover,
  button:active {
    transform: scale(1.15, 1.15);
  }

  .center {
    align-self: center;
  }
</style>

<a href={route} class:center>
  <button>{label}</button>
</a>
