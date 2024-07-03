const clickMeButton = document.getElementById('click-me-button');
const message = document.getElementById('message');

function showMessage() {
  message.textContent = "Button clicked!";
  // Your code here: Change the text content of the 'message' paragraph.
}

clickMeButton.addEventListener('click', showMessage);