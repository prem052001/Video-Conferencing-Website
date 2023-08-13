const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');
const sendButton = document.getElementById('sendButton');

// Get access to user's camera and microphone
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    localVideo.srcObject = stream;

    // Connect to remote user's video
    // This would typically involve a signaling server and WebRTC setup
    // For simplicity, this example doesn't cover the full process.
  })
  .catch(function(error) {
    console.error('Error accessing camera and microphone:', error);
  });

// Send chat message
sendButton.addEventListener('click', () => {
  const message = chatInput.value;
  if (message.trim() !== '') {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatInput.value = '';
  }
});
