/**
 * @jest-environment jsdom
 */

const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Charge le contenu de index.html
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

describe('addClassToElement', () => {
  let dom;
  let document;

  beforeEach(() => {
    // Crée une nouvelle instance de JSDOM avec le contenu HTML
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;

    // Insère le script dans le DOM
    const scriptContent = fs.readFileSync(path.resolve(__dirname, './ex1.js'), 'utf8');
    const scriptElement = document.createElement('script');
    scriptElement.textContent = scriptContent;
    document.body.appendChild(scriptElement);
  });

  it('should add a CSS class to the element when the button is clicked', () => {
    const button = document.getElementById('add-class-button');
    const element = document.getElementById('element');
    
    button.click();
    
    expect(element.classList.contains('new-class')).toBe(true);
  });
});

