<script>
  // your script goes here
  export let title = "";
  export let icon = "";
  export let route;
  export let primary = false;
  export let segment;
</script>

<style>
  .primary {
    background-color: #b60000;
    border-radius: 15px;
    color: white;
  }

  li {
    display: block;
    float: left;
    font-size: 19px;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    padding: 0.5em 1em;
    display: block;
    font-weight: bold;
    color: black;
    transition: all 200ms ease-in-out;
  }

  a:hover {
    transform: scale(1.15, 1.15);
  }
  [aria-current] {
    color: var(--red);
  }
  @media only screen and (max-width: 900px) {
    li {
      font-size: 19px;
    }
  }
</style>

<li>
  <a
    class:primary
    aria-current={segment === route ? 'page' : undefined}
    href={route}>
    {icon} {title}
  </a>
</li>
