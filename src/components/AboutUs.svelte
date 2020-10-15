<script>
  let map =
    "https://maps.googleapis.com/maps/api/staticmap?center=10609+234th+St+E,+Graham,+WA+98338&markers=47.044315,-122.289675&zoom=13&scale=false&size=500x500&maptype=roadmap&key=AIzaSyAszovcVRw3UM8gOQNG1gc3D29L3iAakL8&format=png&visual_refresh=true";
  let directions = "https://goo.gl/maps/atKvzA6CZgkVAtTP8";
  import Button from "../components/Button.svelte";
</script>

<style>
  /* 1em = 16px */

  div {
    display: flex;
    justify-content: space-around;
  }

  h1 {
    font-size: 1.5em;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin: 1em 1em;
  }

  img {
    width: 100%;
    border-radius: 5%;
  }

  a {
    text-decoration: none;
  }

  h4 {
    font-size: 1.25em;
  }

  p {
    margin-block-start: 0;
  }

  .col {
    width: 25%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
  }

  .link {
    color: blue;
  }

  /* Smaller screens only */
  /* 1em = 14px */
  @media only screen and (max-width: 475px) {
    div {
      display: flex;
      flex-direction: column;
    }

    .col {
      width: 100%;
      margin: 0;
      margin-bottom: 1em;
      padding: 0;
      align-content: unset;
    }
  }
</style>

<div>
  <div class="col">
    <h1>About Us</h1>
    <p>
      The Ridge Bible Church has roots in this community going back over 75
      years. If you are seeking a church that values authentic worship and
      expository preaching, you will feel right at home here. We welcome all
      people who humbly acknowledge the universal need for more of God in their
      lives. We have saved a seat for you!
    </p>
    <img
      src="./building/summer600px.jpg"
      alt="A view of the church building from the road." />
  </div>
  <div class="col">
    <h1>Location</h1>
    <a href={directions}>
      <p>10609 234th St E, Graham, WA 98338</p>
      <img src={map} alt="A map to the ridge bible church." />
    </a>
  </div>
  <div class="col">
    <h1>Contact Us</h1>

    <h4>Services</h4>
    <p style="margin-block-end: 0.25em;">
      <strong>Sunday</strong>
      &nbsp;&nbsp; 9:30am
    </p>
    <p>
      <strong>Sunday</strong>
      &nbsp;&nbsp; 11:00am
    </p>

    <a href="tel:1-253-847-2223">
      <p class="link">253-847-2223</p>
    </a>

    <Button label="Contact Us" route="contact-us" center />
  </div>
</div>
