<script>
  import SermonCard from "../components/SermonCard.svelte";
  import Button from "../components/Button.svelte";
</script>

<style>
  .wrapper {
    padding: 2em;
  }

  h1 {
    font-weight: bold;
  }

  p {
    font-style: italic;
  }

  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  /*Larger Screen*/
  @media only screen and (min-width: 655px) {
    h1 {
      font-size: 4em;
    }

    .container {
      padding: 0 2em;
    }
  }
</style>

<svelte:head>
  <title>Sermons</title>
  <script
    defer
    src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2">

  </script>
</svelte:head>

<section>
  <div class="wrapper">

    <h1>Sermons</h1>

    <p>
      But we preach Christ crucified, a stumbling block to Jews and folly to
      Gentiles, but to those who are called, both Jews and Greeks, Christ the
      power of God and the wisdom of God. 1 Corinthians 1:23-24
    </p>

    <div id="fb-root" />
    <div class="container">
      <SermonCard
        url={'https://www.facebook.com/114166370450267/videos/768216880397943'}
        title={'Hebrews, Part 3'}
        date={'25 Oct 2020'} />

      <p>Past videos can be found on our Facebook page.</p>
      <Button
        label="Archive"
        route="https://www.facebook.com/The-Ridge-Bible-Church-114166370450267/" />

    </div>
  </div>
</section>
