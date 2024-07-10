const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const validationMessage = document.getElementById('validation-message');

function validateEmail() {
  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    validationMessage.textContent = 'Valid email address!';
    validationMessage.style.color = 'green';
  } else {
    validationMessage.textContent = 'Invalid email address!';
    validationMessage.style.color = 'red';
  }
}

emailForm.addEventListener('submit', function (e) {
  e.preventDefault();
  validateEmail();
});

