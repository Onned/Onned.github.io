const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause")
const progressBar = document.getElementById("progress")

playPauseButton.addEventListener("click", TogglePlayPause)
audio.addEventListener("timeupdate", updateProgressBar);

function TogglePlayPause(){
    if(audio.paused){
        audio.play();
        playPauseButton.textContent = "Pause";
    }else{
        audio.paused();
        playPauseButton.textContent = "Play";
    }
}
function updateProgressBar (){
    const percent = ( audio.currentTime/audio.duration)*100;
    progressBar.value = percent;
}