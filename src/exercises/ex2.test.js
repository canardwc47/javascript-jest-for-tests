// Importez les fonctions ou les éléments nécessaires pour vos tests
const { JSDOM } = require('jsdom');

// Importez votre fichier JavaScript à tester
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

let dom;
let clickMeButton;
let message;

// Jest setup
beforeEach(() => {
  // Set up DOM environment
  dom = new JSDOM(html, { runScripts: 'dangerously' });
  global.document = dom.window.document;

  // Get references to elements
  clickMeButton = document.getElementById('click-me-button');
  message = document.getElementById('message');

  // Load your script file (ex2.js) into the DOM
  const scriptPath = path.resolve(__dirname, './ex2.js');
  require(scriptPath);
});

afterEach(() => {
  // Cleanup
  dom.window.document.body.innerHTML = '';
  jest.restoreAllMocks();
  delete global.document;
});

// Test case
test('showMessage updates message text on button click', () => {
  // Simulate button click
  clickMeButton.click();

  // Check if message text has been updated
  expect(message.textContent).toBe('Button clicked!');
});
