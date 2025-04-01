window.onload = function() {
    let audio = document.getElementById("bg-music");
    audio.play().catch(error => console.log("Auto-play blocked, user interaction needed"));
};
