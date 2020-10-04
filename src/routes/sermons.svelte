<script>
  import SermonCard from "../components/SermonCard.svelte";
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
    margin: 12em 0;
  }

  /*Larger Screen*/
  @media only screen and (min-width: 655px) {
    h1 {
      font-size: 4em;
    }

    .container {
      padding: 0 2em;
    }

    .blankCard {
      height: 0px;
      width: 40vw;
      margin-left: 2em;
      margin-right: 2em;
    }
  }
</style>

<svelte:head>
  <title>Sermons</title>
  <script
    async
    defer
    src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2">

  </script>
</svelte:head>

<div class="wrapper">

  <h1>Sermons</h1>

  <p>
    But we preach Christ crucified, a stumbling block to Jews and folly to
    Gentiles, but to those who are called, both Jews and Greeks, Christ the
    power of God and the wisdom of God. 1 Corinthians 1:23-24
  </p>

  <!-- <div id="fb-root"></div>
	<div class='container'>
		<SermonCard 
			url={'https://www.facebook.com/grahamcovenant.org/videos/301039404267923'} 
			title={'Word of God Speak'}
			subTitle={'Psalms 51 and 32'}
			date={'21 June 2020'}
		/>
		
		<div class='blankCard'></div>
	</div> -->
  <div class="container">
    <p>This site is under construction.</p>
    <p>The Ridge Bible Church sermons will be located here soon.</p>
  </div>
</div>
