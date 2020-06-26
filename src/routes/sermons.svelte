
<script>
	import SermonCard from '../components/SermonCard.svelte';
</script>

<style>
	.container {
		padding: 2em;
	}
</style>

<svelte:head>
	<title>Sermons</title>
	<script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
</svelte:head>


<div class='container'>
	<h1>Sermons</h1>
	<div id="fb-root"></div>
	<SermonCard 
		url={'https://www.facebook.com/grahamcovenant.org/videos/301039404267923'} 
		title={'Word of God Speak'}
		subTitle={'Psalms 51 and 32'}
		date={'21 June 2020'}
		description={'Pastor Alec\'s sermon covers two Psalms for the price of one. Psalms 51 and 32 were both written by David with marvelous insights of the sinful human condition and the way of salvation. Also, Psalm 51 provides a great template for prayer.'}
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
		description={'Pastor Alec Paul leads our church to its first indoor service since March, and preaches a great sermon on Psalm 22. This begins a new series called "Word of God speak" focusing mainly on the book of Psalms.'}
	/>
	<SermonCard 
		url={'https://www.facebook.com/grahamcovenant.org/videos/2599261980321589'} 
		title={'Homecoming'}
		subTitle={'Outdoor Service'}
		date={'31 May 2020'}
		description={'In compliance with COVID-19 restrictions and the Washington State Governors regulations, GECC conducted its first ever outdoor worship service.'}
	/>
	<SermonCard 
		url={'https://www.facebook.com/grahamcovenant.org/videos/1394706044047007'} 
		title={'I Am the True Vine'}
		subTitle={'John 15'}
		date={'7 June 2020'}
		description={'This is the final sermon on the "I AM" statements found in the Book of John. Pastor Alec preaches on biblical truths from John 15: 1-17.'}
	/>
	
</div>


