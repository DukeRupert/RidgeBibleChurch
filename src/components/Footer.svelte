<script>
  import Fa from "svelte-fa";
  import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1em 0;
    background: #2f2f2f;
  }

  p {
    color: white;
    margin: 0.5em 0.5em;
  }
</style>

<div>
  <p>10609 234th St E | Graham, WA 98338</p>
  <p>(253) 847-2223</p>
  <a href="https://www.facebook.com/The-Ridge-Bible-Church-114166370450267/">
    <p>
      <Fa icon={faFacebookSquare} size="2x" />
    </p>
  </a>
  <p>&copy; 2020 The Ridge Bible Church</p>
</div>
