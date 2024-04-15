const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const btnEnviar = document.getElementById('sendButton')

function sendMessage() {
    const message = userInput.value.trim();
    if (message !== '') {
        displayMessage(message, 'user');
        userInput.value = '';
        respondToMessage(message);
    }
}
let currentLanguage = 'es';
function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    if(sender==='bot'){
        messageElement.classList.add('bot-message')
    }
    if(sender==='user'){
        messageElement.classList.add('user-message')
    }
  
    
}
function changeLanguage() {
    currentLanguage = document.getElementById('language-select').value;
}

function respondToMessage(message) {
    let response = '';
    if (message.toLowerCase() === 'hola') {
        response = getTranslation('¡Hola! Soy un chatbot.', 'Hello! I am a chatbot.');
    } else if (message.toLowerCase() === 'como te llamas?') {
        response = getTranslation('Me llamo Chatbot.', 'My name is Chatbot.');
    } else if (message.toLowerCase() === 'que hora es?') {
        const date = new Date();
        response = getTranslation(`La hora actual es ${date.getHours()}:${date.getMinutes()}`, `The current time is ${date.getHours()}:${date.getMinutes()}`);
    } else if (message.toLowerCase() === 'que fecha es hoy?') {
        const date = new Date();
        response = getTranslation(`Hoy es ${date.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`, `Today is ${date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`);
    } else {
        response = getTranslation('Lo siento, no entiendo esa pregunta.', 'Sorry, I don\'t understand that question.');
    }
    displayMessage(response, 'bot');
}

function getTranslation(spanish, english) {
    return currentLanguage === 'es' ? spanish : english;
}

displayMessage('¡Hola! ¿En qué puedo ayudarte?', 'bot');






