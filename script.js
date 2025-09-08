const chatBody = document.getElementById('chatBody');
const userInput = document.getElementById('userInput');

// Replace with your OpenRouter API Key
let OPENROUTER_API_KEY = API_KEY = "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"  
BASE_URL = "https://openrouter.ai/api/v1/chat/completions"
;

// Load saved chats
window.onload = () => {
    let savedChats = JSON.parse(localStorage.getItem('demonChat')) || [];
    let lastDate = null;
    savedChats.forEach(chat => {
        let chatDate = new Date(chat.time).toDateString();
        if (chatDate !== lastDate) displaySectionLabel(chatDate);
        lastDate = chatDate;
        displayMessage(chat.text, chat.sender);
    });
    scrollToBottom();
};

// ✅ Enter = Send, Shift+Enter = new line
userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});

// Send message
function sendMessage() {
    let text = userInput.value.trim();
    if (!text) return;

    saveAndDisplay(text, "user");
    userInput.value = "";

    showTyping();

    // Call AI
    fetchAIResponse(text);
}

// SiriWave animation
const canvas = document.getElementById('siriWave');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let t = 0;
function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#00ffcc';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x++) {
        let y = canvas.height/2 + Math.sin((x+t)/10) * 10;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();
    t += 0.1;
    requestAnimationFrame(drawWave);
}
drawWave();

// Show typing animation
function showTyping() {
    document.getElementById('siriWave').style.display = 'block';
}

// Remove typing
function removeTyping() {
    document.getElementById('siriWave').style.display = 'none';
}

// Display message
function displayMessage(text, sender) {
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = text;
    chatBody.appendChild(messageDiv);
    scrollToBottom();
}

// Save message
function saveMessage(text, sender) {
    let chats = JSON.parse(localStorage.getItem('demonChat')) || [];
    chats.push({text, sender, time: new Date()});
    localStorage.setItem('demonChat', JSON.stringify(chats));
}

// Save + display + section
function saveAndDisplay(text, sender) {
    let chatDate = new Date().toDateString();
    let sections = document.querySelectorAll('.section-label');
    let lastSection = sections[sections.length-1]?.textContent;

    if (chatDate !== lastSection) displaySectionLabel(chatDate);

    displayMessage(text, sender);
    saveMessage(text, sender);
}

// Scroll to bottom
function scrollToBottom() {
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Section label
function displaySectionLabel(date) {
    let section = document.createElement('div');
    section.classList.add('section-label');
    section.textContent = date;
    chatBody.appendChild(section);
}

// Voice recognition
function startVoice() {
    if (!('webkitSpeechRecognition' in window)) {
        alert("Voice not supported!");
        return;
    }
    let recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onresult = (event) => {
        let voiceText = event.results[0][0].transcript;
        userInput.value = voiceText;
        sendMessage();
    };
}

// Voice output
function speak(text) {
    let synth = window.speechSynthesis;
    let utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1;
    utter.pitch = 1;
    synth.speak(utter);
}

// AI Call with OpenRouter + fallback
async function fetchAIResponse(userText) {
    try {
        let response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENROUTER_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: userText }]
            })
        });

        let data = await response.json();
        let botText = data.choices[0]?.mess
