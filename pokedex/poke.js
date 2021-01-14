const searchBtn = document.getElementById('search-btn'); // search button
const inputField = document.getElementById('name-input'); // search field input
const nameScreen = document.getElementById('name-screen'); //name-screen
const imageScreen = document.getElementById('main-screen'); // image screen
const aboutScreen = document.getElementById('about-screen'); // about-text screen
const typeScreen = document.getElementById('type-screen'); // type screen
const idScreen = document.getElementById('id-screen'); // spices screen
const rightBtn = document.getElementById('nav-button-horizontal-right'); // right d-pad button 
const leftBtn = document.getElementById('nav-button-horizontal-left'); // right d-pad button 


let currentId = 1;
const catchemAll = pokemon => {
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then( res => res.json()).then( data => {
    currentId = data.id;
     console.log(data)
});
}
catchemAll(currentId);

// searchBtn.addEventListener('click', catchemAll(inputField.value));

searchBtn.addEventListener("click", () => catchemAll(inputField.value));
console.log('TODO');

// Find which keys to use and display**

// Grab D-Pad to increment/decrement through Pokemon List
var song = new Audio();
var error = new Audio();
song.src = 'audio/press.wav';
error.src = 'audio/Teleport.wav'

const clickSound = (song) => {
    song.currentTime = 0;
    song.play();
}

const incrementPoke = () => {
    clickSound(song);
    catchemAll(currentId + 1);
}

const decrementPoke = () => {
    if(currentId <= 1){
        clickSound(error);
        return
    }else{
        clickSound(song);
    catchemAll(currentId - 1);
    }
};

rightBtn.addEventListener("click", () => incrementPoke());
leftBtn.addEventListener("click", () => decrementPoke());

// Add sound 

// Think of Animations