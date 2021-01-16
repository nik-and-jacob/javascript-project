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
const favoriteButton = document.getElementById('fav-btn');
const innerModal = document.querySelector('[data-modal="inner"]');
const outerModal = document.querySelector('[data-modal="outer"]');


// Find which keys to use and display
let currentId = 1;
let currentPokemon;

const catchemAll = pokemon => {
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then( res => res.json()).then( data => {
    let id = ('00' + data.id).slice(-3);
    currentId = data.id;
    currentPokemon = data;
    console.log(data);
    imageScreen.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
    nameScreen.innerHTML = data.name;
    typeScreen.innerHTML = data.types[0].type.name;
    idScreen.innerHTML = id;
    aboutScreen.innerHTML = `Height:${data.height * 10}cm Weight:${data.weight / 10}kg` 
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
    if(currentId === 898){
        clickSound(errorSound);
        catchemAll(898)
    } else
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

function alert(e) {
    console.log(`Adding ${currentPokemon.name} to your favorites`);
    console.log(e);
}

favoriteButton.addEventListener('click', alert);


// Open Modal
// innerModal - outerModal

const handleModal = (event) => {
    innerModal.innerHTML = 
    `<div class="card">
        <div class="card-title">
            <h1 class="capitalize">${currentPokemon.name}</h1>
            <span>${('00' + currentId).slice(-3)}</span>
        </div>
        <div class="card-body">
            **add image**
        </div>
    </div>`;
    outerModal.classList.add('open');
}

const closeModal = (event) => {
    outerModal.classList.remove('open');
}

imageScreen.addEventListener('click', handleModal);

outerModal.addEventListener('click', event => {
    const isOutside = !event.target.closest('.modal-inner');
    if (isOutside) {
    outerModal.classList.remove('open');
    }
});

window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeModal();
    }
})
// LocalStorage
// animate lights