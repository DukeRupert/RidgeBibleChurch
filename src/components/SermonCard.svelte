<script>
  import Button from "./Button.svelte";
  export let id = "";
  export let title = "";
  export let date = "";
  export let description = "";
</script>

<style>
  .card {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    border-bottom: 1px solid;
    border-color: var(--textColor);
    padding: 1em 2%;
  }

  .date {
    display: flex;
    flex-direction: column;
    width: 30%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .day {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 70%;
  }

  .monthYear {
    font-size: 0.75em;
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    text-align: left;
  }

  .button-container {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .button-container :global(.button) {
    padding: 0.5em 2em;
    font-size: 1em;
    margin-top: 1em;
    margin-bottom: 0;
  }

  p {
    margin: 0em;
  }

  .primary-text {
    font-size: 1.5em;
    font-weight: bold;
  }

  .date-text {
    font-size: 2em;
    font-weight: bold;
  }

  /*Larger Screen*/
  @media only screen and (min-width: 655px) {
    .date {
      width: 20%;
    }

    .title {
      width: 50%;
    }
    .button-container {
      width: 30%;
    }
  }
</style>

<div class="card">
  <div class="date">
    <div class="date">
      <div class="day">
        <p class="date-text">{date.day}</p>
      </div>
      <div class="monthYear">
        <p>{date.month} 20{date.year}</p>
      </div>
    </div>
  </div>
  <div class="title">
    <p class="primary-text">{title}</p>
    <p>{description}</p>
  </div>
  <div class="button-container">
    <Button
      label="Watch"
      route="https://www.youtube.com/watch?v={id}"
      class="button" />
  </div>
</div>
