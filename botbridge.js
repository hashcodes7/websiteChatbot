(function() {
    // Create chatbot container
    const chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'chatbot-container';
    document.body.appendChild(chatbotContainer);

    // Add styles
    const style = document.createElement('style');
    style.innerHTML = `
        #chatbot-container {
            position: fixed;
            bottom: 10px;
            right: 10px;
            width: 300px;
            height: 400px;
            border: 1px solid #ccc;
            background: #fff;
            overflow: hidden;
        }
        #chatbot-messages {
            height: 350px;
            overflow-y: scroll;
            padding: 10px;
        }
        #chatbot-input {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
        }
    `;
    document.head.appendChild(style);

    // Create chatbot UI
    chatbotContainer.innerHTML = `
        <div id="chatbot-messages"></div>
        <input type="text" id="chatbot-input" placeholder="Type a message...">
    `;

    // Handle user input
    document.getElementById('chatbot-input').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const input = e.target.value;
            const messages = document.getElementById('chatbot-messages');
            const userMessage = document.createElement('div');
            userMessage.textContent = 'User: ' + input;
            messages.appendChild(userMessage);

            // Simple bot response
            const botMessage = document.createElement('div');
            botMessage.textContent = 'Bot: ' + 'Hello! How can I help you?';
            messages.appendChild(botMessage);

            e.target.value = ''; // Clear input
            messages.scrollTop = messages.scrollHeight; // Auto-scroll to bottom
        }
    });
})();
