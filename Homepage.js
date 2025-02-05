function toggleMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("background-audio");

    if (audio) {
        // Wait for a user interaction (click anywhere on the page)
        document.body.addEventListener("click", function () {
            if (audio.paused) {
                audio.play().then(() => {
                    audio.volume = 0.5; // Adjust volume
                    console.log("Audio playing...");
                }).catch(error => console.log("Playback failed:", error));
            }
        }, { once: true }); // Ensures it only runs once
    }
});

setTimeout(() => {
    let audio = document.getElementById("background-audio");
    audio.muted = false; // Unmute after a short delay
}, 2000);