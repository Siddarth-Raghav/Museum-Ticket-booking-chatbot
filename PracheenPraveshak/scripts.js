// Function to load the chatbot script dynamically
function loadChatbot() {
    // Load the Botpress webchat inject script
    var injectScript = document.createElement('script');
    injectScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    injectScript.onload = function() {
        // Load the Botpress webchat config script after the inject script is loaded
        var configScript = document.createElement('script');
        configScript.src = 'https://mediafiles.botpress.cloud/9d38ec10-ec3a-4d75-98d3-4bcbcdd6f8d9/webchat/config.js';
        configScript.defer = true;
        configScript.onload = function() {
            // Initialize the chatbot if needed
            if (typeof initChatbot === 'function') {
                initChatbot(); // Assuming initChatbot is the function to initialize your chatbot
            } else {
                console.log('Chatbot initialization function not found.');
            }
        };
        configScript.onerror = function() {
            console.error('Failed to load the chatbot config script.');
        };
        document.body.appendChild(configScript);
    };
    injectScript.onerror = function() {
        console.error('Failed to load the chatbot inject script.');
    };
    document.body.appendChild(injectScript);
}

// Load the chatbot when the window loads
window.onload = loadChatbot;