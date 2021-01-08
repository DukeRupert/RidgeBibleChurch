<script>
    import { onMount } from "svelte";
    export let videoId = "";

    onMount(() => {
        // Load the IFrame Player API code asynchronously.
        var tag = document.createElement("script");
        tag.src = "https://www.youtube.com/player_api";
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Replace the 'ytplayer' element with an <iframe> and
        // YouTube player after the API code downloads.
        var player;
        function onYouTubePlayerAPIReady() {
            player = new YT.Player("ytplayer", {
                height: "360",
                width: "640",
                videoId: { videoId },
            });
        }
    });
</script>

<style>
    /* your styles go here */
</style>

<!-- Component which recieves a videoId and renders it in an iFrame player using 
YouTube's iFrame PLayer API @ https://developers.google.com/youtube/ -->
<!-- markup (zero or more items) goes here -->
<div id="ytplayer" />
