// Remove the 'main' element with id 'main'
const mainElement = document.querySelector('#main');
mainElement.remove();

// Create a new header with id 'victory' and a sweet message
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';

// Append the new header to the body of the document
document.body.appendChild(newHeader);
