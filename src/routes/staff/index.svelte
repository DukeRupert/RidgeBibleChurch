<script>
	import StaffCard from '../../components/StaffCard.svelte';

	const alecPaul = {
		src: '/alec.jpg', 
		route: '/staff/alecPaul',
		name: 'Alec Paul',
		title: 'Pastor - Chairman',
		email: 'pastor@theridgebiblechurch.com'
	};

	const dennisRiksen = {
		//src: '/alec.jpg', 
		name: 'Dennis Riksen',
		title: 'Vice-Chairman',
		email: 'pastor@theridgebiblechurch.com'
	};

	const mattArmstrong = {
		//src: '/alec.jpg', 
		name: 'Matt Armstrong',
		title: 'Secretary',
		email: 'pastor@theridgebiblechurch.com'
	};

	const kenKlubberud = {
		//src: '/alec.jpg', 
		name: 'Ken Klubberud',
		title: 'Financial Officer',
		email: 'pastor@theridgebiblechurch.com'
	};

	const daleForrester = {
		//src: '/alec.jpg', 
		name: 'Dale Forrester',
		title: 'Elder',
		email: 'pastor@theridgebiblechurch.com'
	};

	const gregBennet = {
		//src: '/alec.jpg', 
		name: 'Greg Bennett',
		title: 'Elder',
		email: 'pastor@theridgebiblechurch.com'
	};

	const sueArmstrong = {
		//src: '/alec.jpg', 
		name: 'Sue Armstrong',
		title: 'Childrens\'s Ministry Director',
		email: 'pastor@theridgebiblechurch.com'
	};

	const reamenWilliams = {
		//src: '/alec.jpg', 
		name: 'Reamen Williams',
		title: 'Youth Ministry Director',
		email: 'pastor@theridgebiblechurch.com'
	};

	const debbieNewton = {
		//src: '/alec.jpg', 
		name: 'Debbie Newton',
		title: 'Church Secretary',
		email: 'pastor@theridgebiblechurch.com'
	};

	const edKyllonen = {
		//src: '/alec.jpg', 
		name: 'Ed Kyllonen',
		title: 'Deacon',
		email: 'pastor@theridgebiblechurch.com'
	};

	const jessKady = {
		//src: '/alec.jpg', 
		name: 'Jess Kady',
		title: 'Deacon',
		email: 'pastor@theridgebiblechurch.com'
	};

	const mattCrowell = {
		//src: '/alec.jpg', 
		name: 'Matt Crowell',
		title: 'Deacon',
		email: 'pastor@theridgebiblechurch.com'
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

<div>
	<h1>Our Leadership</h1>

	<p>It shall not be so among you. But whoever would be great among you must be your servant... Matthew 20:26</p>
	
	<h2>Board of Elders</h2>
	<hr>
	<div class='wrapper'>
		<StaffCard {...alecPaul}/>
		<StaffCard {...dennisRiksen}/>
		<StaffCard {...mattArmstrong}/>
		<StaffCard {...kenKlubberud}/>
		<StaffCard {...daleForrester}/>
		<StaffCard {...gregBennet}/>
	</div>

	<h2>Deacons</h2>
	<hr>
	<div class='wrapper'>
		<StaffCard {...edKyllonen}/>
		<StaffCard {...jessKady}/>
		<StaffCard {...mattCrowell}/>
	</div>

	<h2>Directors</h2>
	<hr>
	<div class='wrapper'>
		<StaffCard {...sueArmstrong}/>
		<StaffCard {...reamenWilliams}/>
	</div>

	<h2>Support</h2>
	<hr>
	<div class='wrapper'>
		<StaffCard {...debbieNewton}/>
	</div>

</div>