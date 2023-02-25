// global variable for the player
var player;
var playButton = document.getElementById("btnplay");

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player("video", {
    events: {
      // call this function when player is ready to use
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  // bind events
  playButton.addEventListener("click", function () {
    player.playVideo();
  });
}

function pressPlay() {
  window.location.href = 'https://youtu.be/aLRU9UzvBi4';
}

// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
window.onload = pressPlay;
