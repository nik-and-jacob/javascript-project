const searchBtn = document.getElementById('search-btn'); // search button
const inputField = document.getElementById('name-input'); // search field input
const nameScreen = document.getElementById('name-screen'); //name-screen
const imageScreen = document.getElementById('main-screen'); // image screen
const aboutScreen = document.getElementById('about-screen'); // about-text screen
const typeScreen = document.getElementById('type-screen'); // type screen
const idScreen = document.getElementById('id-screen'); // spices screen
const rightBtn = document.getElementById('nav-button-horizontal-right'); // right d-pad button 
const leftBtn = document.getElementById('nav-button-horizontal-left'); // left d-pad button 
const muteBtn = document.getElementById('mute-button'); // mute button 
const muteLight = document.getElementById('mute-light'); // mute light 


// Find which keys to use and display
let currentId = 1;
const catchemAll = pokemon => {
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then( res => res.json()).then( data => {
    let id = ('00' + data.id).slice(-3);
    currentId = data.id;
    console.log(data);
    imageScreen.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
});
}

catchemAll(currentId);

searchBtn.addEventListener("click", () => catchemAll(inputField.value));


var song = new Audio();
song.src = 'audio/press.wav';
song.volume = 0.05;

var errorSound = new Audio();
errorSound.src = 'audio/error.wav';
errorSound.volume = 0.09;

const clickSound = (song) => {
    song.currentTime = 0;
    song.play();
}

const incrementPoke = () => {
    clickSound(song);
    catchemAll(currentId + 1);
}

const decrementPoke = () => {
    if(currentId === 1){
        clickSound(errorSound);
        catchemAll(1)
    }else{
        clickSound(song);
        catchemAll(currentId - 1)
    }
};

rightBtn.addEventListener("click", () => incrementPoke());
leftBtn.addEventListener("click", () => decrementPoke());

// MUTE FUNCTIONALITY
const mute = (sound1, sound2) => {
    sound1.muted = true;
    sound2.muted = true;
};

const unmute = (sound1, sound2) => {
        sound1.muted = false;
        sound2.muted = false;
};

muteBtn.addEventListener("click", () => {
    if(song.muted === true || errorSound.muted === true){
        unmute(song, errorSound);
        muteLight.classList.add('light-red');
        muteLight.classList.remove('red')
    }else{
        mute(song, errorSound);
        muteLight.classList.add('red');
        muteLight.classList.remove('light-red')
    }
});

// Think of Animations

