const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US"; // आप चाहो तो "en-IN" भी कर सकते हो
recognition.interimResults = false;

const output = document.getElementById("output");
const startBtn = document.getElementById("startBtn");

recognition.onresult = function(event) {
    const command = event.results[0][0].transcript.toLowerCase();
    console.log("Command:", command);
    output.textContent = "You said: " + command;

    // --- Websites / Apps ---
    if (command.includes("google")) {
        window.open("https://www.google.com", "_blank");
    } else if (command.includes("whatsapp")) {
        window.open("https://whatsapp.com", "_blank");
    } else if (command.includes("facebook")) {
        window.open("https://www.facebook.com", "_blank");
    } else if (command.includes("youtube")) {
        window.open("https://www.youtube.com", "_blank");
    } else if (command.includes("google meet") || command.includes("meet")) {
        window.open("https://meet.google.com", "_blank");

    // --- New Features ---
    } else if (command.includes("maps") || command.includes("google maps")) {
        window.open("https://www.google.com/maps", "_blank");
    } else if (command.includes("gemini")) {
        window.open("https://gemini.google.com", "_blank");
    } else if (command.includes("calendar")) {
        window.open("https://calendar.google.com", "_blank");
    } else if (command.includes("photos") || command.includes("google photos")) {
        window.open("https://photos.google.com", "_blank");
    } else if (command.includes("news") || command.includes("google news")) {
        window.open("https://news.google.com", "_blank");

    // --- Fallback ---
    } else {
        alert("❌ Sorry, I don't recognize this command.");
    }
};

function startListening() {
    recognition.start();
    output.textContent = "🎙 Listening...";
}

startBtn.addEventListener("click", startListening);
