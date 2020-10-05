<script>
  import { theRidge, ridgeline, bibleChurch } from "./shapes.js";
  import { sineIn, quartIn } from "svelte/easing";
  import { fade, draw } from "svelte/transition";

  // 1% = 1vw
  const width = "95%";

  const stroke = "stroke:#b61200; stroke-width: 0.5";
  const fill = "stroke:#b60000; fill: #b60000";

  // Animations do not play on initial load by default. Condition change used to trigger logo animation.
  let condition = false;
  setTimeout(() => (condition = true));
</script>

<style>

</style>

{#if condition}
  <svg
    {width}
    version="1.1"
    viewBox="0 0 268 116"
    xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(-16.4 -40.2)" fill="#b60000" stroke-width=".0847">
      <path d={theRidge}>
        <title>theRidge</title>
      </path>
      <g fill="#FFFFFF">
        <path
          in:draw={{ delay: 300, duration: 3000, easing: quartIn }}
          style={stroke}
          d={ridgeline}>
          <title>ridgeline</title>
        </path>
        <path
          in:fade={{ delay: 2400, duration: 900, easing: sineIn }}
          style={fill}
          d={ridgeline}>
          <title>ridgeline</title>
        </path>
      </g>
      <path d={bibleChurch}>
        <title>bibleChurch</title>
      </path>
    </g>
  </svg>
{/if}
