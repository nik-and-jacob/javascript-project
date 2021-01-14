const searchBtn = document.getElementById('search-btn'); // search button
const inputField = document.getElementById('name-input'); // search field input
const nameScreen = document.getElementById('name-screen'); //name-screen
const imageScreen = document.getElementById('main-screen'); // image screen
const aboutScreen = document.getElementById('about-screen'); // about-text screen
const typeScreen = document.getElementById('type-screen'); // type screen
const idScreen = document.getElementById('id-screen'); // spices screen


const catchemAll = pokemon => {
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then( res => res.json()).then( data => console.log(data));
}

// searchBtn.addEventListener('click', catchemAll(inputField.value));

searchBtn.addEventListener("click", () => catchemAll(inputField.value));
console.log('TODO');

// Find which keys to use and display**

// Grab D-Pad to increment/decrement through Pokemon List

// Add sound 

// Think of Animations