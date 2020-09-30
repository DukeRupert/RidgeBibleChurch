<script>
  import Fa from "svelte-fa";
  import { faPaypal } from "@fortawesome/free-brands-svg-icons";
  import { donation } from "../store";

  let title = "Giving";
</script>

<style>
  div {
    padding: 2em;
  }

  img {
    width: 100%;
  }

  button {
    padding: 0.5em 1em;
  }

  h1 {
    font-weight: bold;
  }

  .italics {
    font-style: italic;
  }

  /*Larger Screen*/
  @media only screen and (min-width: 655px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>{title}</title>
  <script src="https://app.breezechms.com/js/give.js">

  </script>
</svelte:head>

<div>
  <h1>{title}</h1>

  <p>
    Every man shall give as he is able, according to the blessing of the Lord
    your God which He has given you. Deuteronomy 16:17
  </p>
</div>
<div
  id="breeze_giving_embed"
  data-subdomain="theridgebiblechurch"
  data-width="100%"
  data-background_color="fffff"
  data-text_color="000"
  data-donate_button_background_color="777777"
  data-donate_button_text_color="ffffff"
  data-fund_id=""
  data-frequency=""
  data-amount="" />
