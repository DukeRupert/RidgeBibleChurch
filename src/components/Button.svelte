<script>
  export let label = "FixMe";
  export let route = "";
  export let center = false;
</script>

<style>
  button {
    background-color: var(--buttonBackground);
    border: none;
    border-radius: 10px;
    color: white;
    padding: 0.5em 1em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.5em;
    transition: all 300ms;
    align-self: center;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  button:hover {
    background-color: var(--buttonBackgroundHover);
    color: var(--pink);
  }

  .center {
    align-self: center;
  }
</style>

<a href={route} class:center> <button> {label} </button> </a>
