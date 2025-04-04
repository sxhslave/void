window.onload = function () {
    let audio = document.getElementById("bg-music");
    let passwordScreen = document.getElementById("password-screen");
    let mainContent = document.getElementById("main-content");
    let passwordInput = document.getElementById("password-input");
    let submitButton = document.getElementById("submit-key");
    let accessStatus = document.getElementById("access-status");

    function playAudio() {
        audio.play().catch(error => {
            console.log("Autoplay blocked. Waiting for user interaction...");
        });
    }

    function activateOwnerMode() {
        accessStatus.innerHTML = "Owner Mode Activated";
        accessStatus.style.color = "#ff006e";

        document.querySelectorAll(".invite-button").forEach(button => {
            button.contentEditable = "true";
            button.style.border = "1px dashed #ff006e";
            button.onclick = function () {
                let newLink = prompt("Enter new URL for this button:");
                if (newLink) {
                    this.setAttribute("onclick", `window.open('${newLink}', '_blank')`);
                }
            };
        });
    }

    function activateViewerMode() {
        accessStatus.innerHTML = "Viewer Mode Activated";
        accessStatus.style.color = "#9d00ff";
    }

    submitButton.addEventListener("click", function () {
        let enteredKey = passwordInput.value.trim();

        if (enteredKey === "cartiwontdrop") {
            passwordScreen.style.display = "none";
            mainContent.style.display = "block";
            playAudio();
            activateOwnerMode();
        } else if (enteredKey === "dehsetpurna") {
            passwordScreen.style.display = "none";
            mainContent.style.display = "block";
            playAudio();
            activateViewerMode();
        } else {
            accessStatus.innerHTML = "Incorrect Key!";
            accessStatus.style.color = "red";
        }
    });

    passwordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            submitButton.click();
        }
    });

    function createRain() {
        for (let i = 0; i < 100; i++) {
            const drop = document.createElement("div");
            drop.classList.add("rain");
            drop.style.left = Math.random() * 100 + "vw";
            drop.style.animationDuration = (0.5 + Math.random()) + "s";
            drop.style.opacity = Math.random();
            drop.style.height = Math.random() * 20 + 10 + "px";
            document.getElementById("rain-container").appendChild(drop);
        }
    }
    createRain();
};
