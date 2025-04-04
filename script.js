window.onload = function() {
    let audio = document.getElementById("bg-music");
    let passwordScreen = document.getElementById("password-screen");
    let mainContent = document.getElementById("main-content");
    let passwordInput = document.getElementById("password-input");
    let submitButton = document.getElementById("submit-key");

    function playAudio() {
        audio.play().catch(error => {
            console.log("Autoplay blocked. Waiting for user interaction...");
        });
    }

    submitButton.addEventListener("click", function() {
        if (passwordInput.value === "dehsetpurna" {
            passwordScreen.style.display = "none";
            mainContent.style.display = "block";
            playAudio();
        } else {
            alert("wrong.");
        }
    });

    // Also allow pressing "Enter" to submit
    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            submitButton.click();
        }
    });
};
