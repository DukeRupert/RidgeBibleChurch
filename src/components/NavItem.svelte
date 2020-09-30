<script>
  // your script goes here
  export let title = "";
  export let icon = "";
  export let route;
  export let primary = false;
</script>

<style>
  li {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 22px;
    transition: all 300ms;
  }

  a {
    padding: 0 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 300ms;
  }

  .primary {
    background-color: #b60000;
    border-radius: 20px;
    color: white;
  }

  @media only screen and (max-width: 900px) {
    li {
      font-size: 19px;
    }

    a {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
</style>

<li>
  <a class:primary href={route}>{icon} {title}</a>
</li>
