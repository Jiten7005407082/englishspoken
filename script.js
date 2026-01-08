const chatBox = document.getElementById('chatBox');
const robotAvatar = document.getElementById('robotAvatar');

function addMessage(msg, sender) {
  const div = document.createElement('div');
  div.className = sender === 'user' ? 'user-msg' : 'bot-msg';
  div.textContent = msg;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function speak(text) {
  // Add talking animation
  robotAvatar.classList.add('talking');

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';

  utter.onend = function() {
    robotAvatar.classList.remove('talking'); // Stop animation after speech
  };

  speechSynthesis.speak(utter);
}

// Bot logic
function botResponse(text) {
  let response = "Sorry, I didn't understand. Can you try again?";
  const user = text.toLowerCase();

  if(user.includes("hello") || user.includes("hi")) {
    response = "Hello! How are you today?";
  } else if(user.includes("how are you")) {
    response = "I'm fine, thank you! How about you?";
  } else if(user.includes("i am good") || user.includes("i'm good") || user.includes("i am fine")) {
    response = "That's great! You can also say: 'I'm doing well, thank you.'";
  } else if(user.includes("i am ")) {
    response = `Good! You said: "${text}". You can also say: "I'm ${text.slice(5)}."`;
  } else if(user.includes("help") || user.includes("teach me")) {
    response = "Sure! Let's practice. Try saying: 'I am learning English.'";
  }

  addMessage(response, 'bot');
  speak(response);
}

// Speech-to-text
function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = function(event) {
    const userText = event.results[0][0].transcript;
    addMessage(userText, 'user');
    botResponse(userText);
  };

  recognition.onerror = function(event) {
    addMessage("Error recognizing speech: " + event.error, 'bot');
  };
}

// Welcome message
botResponse("Hi! I am your English tutor chatbot. Click the 🎤 button and speak to me.");
