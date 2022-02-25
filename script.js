let audio = document.getElementById("audio1")

function avancar(){

    audio.currentTime += 15
}

function retroceder(){

    VideoPlaybackQuality.currentTime -= 15
}

function play(){
    
    if (audio.paused)
  audio.play();
else
  audio.pause();
}