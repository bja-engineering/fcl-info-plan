// Try to disable pinch-to-zoom
/* document.addEventListener('touchmove', function (event) {
  if (event.scale !== 1) { event.preventDefault(); }
}, false);

// Try to disable double-touch-to-zoom
var lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
  var now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false); */

// Audio handling - pause currently playing element when new element is clicked variant 1
/*
document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);
*/

// Audio handling - pause currently playing element when new element is clicked variant 2
/* window.addEventListener("play", function(evt) {
    if(window.$_currentlyPlaying && window.$_currentlyPlaying != evt.target) {
        window.$_currentlyPlaying.pause();
    } 
    window.$_currentlyPlaying = evt.target;
}, true); */

// Add some non-repeat functionality to the HTML5 music player play() function
/* function resetAndPlay(audioId) {
    var audio = document.getElementById(audioId);
    if (audio.paused) {
    	audio.currentTime = 0
        audio.play();
    } else {
        audio.currentTime = 0
    }
} */

// Try to disable the scrolling and bouncing effect for mobile device (iOS) web apps
/* document.ontouchmove = function(event){
    event.preventDefault();
} */

//var overlayOn = false;

function turnOverlayOn(overlayId) {
	//if (overlayOn = false) {}
	//overlayOn = true;
    document.getElementById(overlayId).style.display = "block";
}

/* Goes through all elements of class "overlay" and hides them again */
function turnOverlayOff() {
	//overlayOn = false;
	
	var elementList = document.getElementsByClassName("overlay");
	
	for (var i = 0; i < elementList.length; i++) {
		elementList.item(i).style.display = "none";
	}
}