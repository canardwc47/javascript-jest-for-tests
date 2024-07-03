// script.js
const addButton = document.getElementById('add-class-button');
const element = document.getElementById('element');

function addClassToElement() {
  element.classList.add('new-class');
  // Your code here: Add a CSS class to the 'element' div.
}

addButton.addEventListener('click', addClassToElement);



