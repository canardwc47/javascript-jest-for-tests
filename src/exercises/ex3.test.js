// Importez les fonctions nécessaires pour manipuler le DOM dans Jest
const { JSDOM } = require('jsdom');

// Créez un DOM simulé pour nos tests
const dom = new JSDOM(`
  <form id="email-form">
    <input type="email" id="email-input" />
    <p id="validation-message"></p>
  </form>
`);

global.document = dom.window.document;

const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const validationMessage = document.getElementById('validation-message');

// Importez la fonction à tester
require('./ex3');  // Assurez-vous que le chemin d'accès est correct

describe('Email validation', () => {
  test('should display "Valid email address!" for a valid email', () => {
    emailInput.value = 'test@example.com';
    emailForm.dispatchEvent(new dom.window.Event('submit'));

    expect(validationMessage.textContent).toBe('Valid email address!');
    expect(validationMessage.style.color).toBe('green');
  });

  test('should display "Invalid email address!" for an invalid email', () => {
    emailInput.value = 'invalid-email';
    emailForm.dispatchEvent(new dom.window.Event('submit'));

    expect(validationMessage.textContent).toBe('Invalid email address!');
    expect(validationMessage.style.color).toBe('red');
  });
});
