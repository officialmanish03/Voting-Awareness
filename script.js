// Dark Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.innerText = document.body.classList.contains('dark-mode') ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Vote Counter
let votes = { BJP: 0, Congress: 0, AAP: 0 };

function castVote(party) {
    votes[party]++;
    alert(`You voted for ${party}. Your vote matters!`);
    document.querySelector(`#${party.toLowerCase()} .vote-count`).innerText = `Votes: ${votes[party]}`;
}

// Language Change Function
function changeLanguage() {
    let lang = document.getElementById("lang-select").value;
    if (lang === "hi") {
        document.querySelector("h1").innerText = "🗳️ हर वोट मायने रखता है! 🗳️";
        document.querySelector("p").innerText = "बेहतर भविष्य के लिए अपना वोट डालें।";
        document.querySelector(".info h2").innerText = "आपको वोट क्यों देना चाहिए?";
        document.querySelector(".info p").innerText = "वोटिंग एक मौलिक अधिकार है। हर वोट लोकतंत्र में महत्वपूर्ण भूमिका निभाता है।";
    } else {
        location.reload();
    }
}

// Social Media Share Function
function share() {
    alert("Share this page with your friends and family to spread election awareness!");
}
