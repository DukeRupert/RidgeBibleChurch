
<script>
	import SermonCard from '../components/SermonCard.svelte';
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

	/*Larger Screen*/
	@media only screen and (min-width: 655px) {

		h1 {
			font-size: 4em;
		} 

		.container {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-around;
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
	<script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
</svelte:head>


<div class='wrapper'>

	<h1>Sermons</h1>

	<p>But we preach Christ crucified, a stumbling block to Jews and folly to Gentiles, but to those who are called, both Jews and Greeks, Christ the power of God and the wisdom of God. 1 Corinthians 1:23-24</p>

	<div id="fb-root"></div>
	<div class='container'>
		<SermonCard 
			url={'https://www.facebook.com/grahamcovenant.org/videos/301039404267923'} 
			title={'Word of God Speak'}
			subTitle={'Psalms 51 and 32'}
			date={'21 June 2020'}
		/>
		<SermonCard 
			url={'https://www.facebook.com/grahamcovenant.org/videos/600093297295708'} 
			title={'Word of God Speak'}
			subTitle={'Psalm 23'}
			date={'14 June 2020'}
		/>
		<SermonCard 
			url={'https://www.facebook.com/grahamcovenant.org/videos/557006348539776'} 
			title={'Word of God Speak'}
			subTitle={'Journey through the Psalms'}
			date={'7 June 2020'}
		/>
		<SermonCard 
			url={'https://www.facebook.com/grahamcovenant.org/videos/2599261980321589'} 
			title={'Homecoming'}
			subTitle={'Outdoor Service'}
			date={'31 May 2020'}
		/>
		<SermonCard 
			url={'https://www.facebook.com/grahamcovenant.org/videos/1394706044047007'} 
			title={'I Am the True Vine'}
			subTitle={'John 15'}
			date={'7 June 2020'}
		/>
		<div class='blankCard'></div>
	</div>
</div>


