<script>
  import SermonCard from "../components/SermonCard.svelte";
  import Button from "../components/Button.svelte";
  import SermonPlayer from "../components/SermonPlayer.svelte";

  // Fetch sermons from youtube
  const url = "/.netlify/functions/youtube-sermons";

  async function fetchData() {
    const res = await fetch(url);
    const data = await res.json();

    if (res.ok) {
      console.log(data);
      return data;
    } else {
      throw new Error(data);
    }
  }
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
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 1000 px;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
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
</svelte:head>

<section>
  <div class="wrapper">

    <h1>Sermons</h1>

    <p>
      But we preach Christ crucified, a stumbling block to Jews and folly to
      Gentiles, but to those who are called, both Jews and Greeks, Christ the
      power of God and the wisdom of God. 1 Corinthians 1:23-24
    </p>
  </div>
  <div class="container">
    {#await fetchData()}
      <p>loading</p>
    {:then sermons}
      {#each sermons as sermon}
        {#if sermon.kind === 'youtube#video'}
          <SermonCard
            id={sermon.id}
            date={sermon.info.date}
            title={sermon.info.title}
            description={sermon.description}
            type={sermon.info.type} />
        {/if}
      {/each}
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}

  </div>
  <p>Past videos can be found on our Facebook page.</p>
  <div class="wrapper">
    <Button
      label="Archive"
      route="https://www.youtube.com/channel/UClnCId37ib0qSFxCqnXnbvQ" />
  </div>
</section>
