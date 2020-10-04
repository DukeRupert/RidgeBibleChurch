<script>
  import StaffCard from "../../components/StaffCard.svelte";

  const alecPaul = {
    src: "/staff/Alec400px.png",
    // route: "/staff/alecPaul",
    name: "Alec Paul",
    title: "Pastor - Chairman",
  };

  const dennisRiksen = {
    src: "/staff/Dennis400px.png",
    name: "Dennis Riksen",
    title: "Elder",
  };

  const mattArmstrong = {
    src: "/staff/Matt400px.png",
    name: "Matt Armstrong",
    title: "Secretary",
  };

  const gregBennet = {
    src: "/staff/Greg400px.png",
    name: "Greg Bennett",
    title: "Elder",
  };

  const colinKertson = {
    src: "staff/Colin400px.png",
    name: "Colin Kertson",
    title: "Vice-Chairman",
  };

  const sueArmstrong = {
    src: "staff/Sue400px.png",
    name: "Sue Armstrong",
    title: "Childrens's Ministry Director",
  };

  const reamenWilliams = {
    src: "staff/Reamen400px.png",
    name: "Reamen Williams",
    title: "Youth Ministry Director",
  };

  const debbieNewton = {
    src: "staff/Debbie400px.png",
    name: "Debbie Newton",
    title: "Church Secretary",
  };

  const edKyllonen = {
    //src: '/alec.jpg',
    name: "Ed Kyllonen",
    title: "Deacon",
  };

  const jessKady = {
    //src: '/alec.jpg',
    name: "Jess Kady",
    title: "Deacon",
  };

  const mattCrowell = {
    //src: '/alec.jpg',
    name: "Matt Crowell",
    title: "Deacon",
  };
</script>

<style>
  div {
    padding: 0 0.5em;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  hr {
    width: 100%;
    margin-left: 0;
    margin: 0;
  }

  h1 {
    font-weight: bold;
  }

  h2 {
    margin-top: 2em;
    font-size: 1.5em;
    font-weight: bold;
  }

  p {
    font-style: italic;
  }

  /*Larger Screen*/
  @media only screen and (min-width: 655px) {
    div {
      padding: 2em;
    }

    .wrapper {
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
    }

    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Staff</title>
</svelte:head>

<section>
  <div>
    <h1>Our Leadership</h1>

    <p>
      It shall not be so among you. But whoever would be great among you must be
      your servant... Matthew 20:26
    </p>

    <h2>Board of Elders</h2>
    <hr />
    <div class="wrapper">
      <StaffCard {...alecPaul} />
      <StaffCard {...colinKertson} />
      <StaffCard {...dennisRiksen} />
      <StaffCard {...mattArmstrong} />
      <StaffCard {...gregBennet} />
    </div>

    <!-- <h2>Deacons</h2>
  <hr />
  <div class="wrapper">
    <StaffCard {...edKyllonen} />
    <StaffCard {...jessKady} />
    <StaffCard {...mattCrowell} />
  </div> -->

    <h2>Directors</h2>
    <hr />
    <div class="wrapper">
      <StaffCard {...sueArmstrong} />
      <StaffCard {...reamenWilliams} />
    </div>

    <h2>Support</h2>
    <hr />
    <div class="wrapper">
      <StaffCard {...debbieNewton} />
    </div>

  </div>

</section>
