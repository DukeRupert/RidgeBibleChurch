<script>
  export let url = '';
  export let title = '';
  export let subTitle = '';
  export let date = '';
  export let description = '';
</script>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  .video {
    width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .time {
    color: gray;
  }

  h1 {
		font-size: 1.5em;
		font-weight: bold;
    margin: 0em;
    margin-bottom: 0.25em;
	}

  h2 {
    font-size: 1em;
    margin: 0em;
    margin-bottom: 0.25em;
  }

  p {
    margin: 0em;
  }

  /*Larger Screen*/
	@media only screen and (min-width: 655px) {

    .wrapper {
      width: 40vw;
      margin-left: 2em;
      margin-right: 2em;
    }
  }

</style>

<div class="wrapper">
  <h1>{title}</h1>
  <h2>{subTitle}</h2>
  <p class="time">{date}</p>
  <div class='video'>
    <div
      class="fb-video"
      data-href="{url}"
      data-allowfullscreen="true"
    ></div>
  </div>
  <p>{description}</p>
</div>
