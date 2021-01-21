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
const removeButton = document.getElementById('remove-fav');
const innerModal = document.querySelector('[data-modal="inner"]');
const outerModal = document.querySelector('[data-modal="outer"]');
let favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || [];
const blueSquare = document.querySelectorAll('.blue-square');

// Find which keys to use and display
let currentId = 1;
let currentPokemon;
let HP;
let type;
const catchemAll = (pokemon = 1) => {
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then( res => res.json()).then( data => {
    let id = ('00' + data.id).slice(-3);
    currentId = data.id;
    currentPokemon = data;
    HP = data.base_experience;
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

const save = new Audio();
save.src = 'audio/save.wav';
save.volume = 0.09;

const toss = new Audio();
toss.src = 'audio/toss.wav';
// toss.volume = 0.1;

const clickSound = (song) => {
    song.currentTime = 0;
    song.play();
}

const incrementPoke = () => {
    if(currentId === 898){
        catchemAll(898)
        clickSound(errorSound);
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
const mute = (sound1, sound2, sound3, sound4) => {
    sound1.muted = true;
    sound2.muted = true;
    sound3.muted = true;
    sound4.muted = true;
};

const unmute = (sound1, sound2, sound3, sound4) => {
        sound1.muted = false;
        sound2.muted = false;
        sound3.muted = false;
        sound4.muted = false;
};

muteBtn.addEventListener("click", () => {
    if(song.muted === true || errorSound.muted === true || save.muted === true||  toss.muted === true){
        unmute(song, errorSound, save, toss);
        muteLight.classList.add('light-red');
        muteLight.classList.remove('red')
    }else{
        mute(song, errorSound, save, toss);
        muteLight.classList.add('red');
        muteLight.classList.remove('light-red')
    }
});

// List Favorite Pokemon
function displayFavorites() {
    for(let j = 0; j <= 9; j++){
        document.getElementById(j).innerHTML = "";
    }
    for (let i = 0; i <= favoriteList.length - 1; i++) {
        document.getElementById(i).innerHTML = `<img src="${favoriteList[i].sprites.front_default}" alt="${currentPokemon}">`;
    }
}
displayFavorites();

function saveFavorite(e) {
    clickSound(save);
    if(favoriteList.length >= 10){
        alert("Your favorites are full! You can delete a Pokemon to make room.")
    }else{
        favoriteList.push(currentPokemon);
        localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
        displayFavorites();
    }
}

let selectedPokemon;

blueSquare.forEach(square => square.addEventListener('click', (e) => {
    selectedPokemon = e.currentTarget.id;
    let substr = e.currentTarget.innerHTML;
    let id = substr.slice(83, substr.lastIndexOf('.'));
    catchemAll(id);
}))

function removeFavorite(e) {
    // Check if button is the current target.
    // Match contents to remove from local storage
    // Remove from local storage and the array
    clickSound(toss);
    favoriteList.splice(selectedPokemon, 1)
    localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
    displayFavorites();
}

favoriteButton.addEventListener('click', saveFavorite);
removeButton.addEventListener('click', removeFavorite);

// Open Modal
// innerModal - outerModal

const handleModal = (event) => {
    const id = currentId;
    hp = HP;
    innerModal.innerHTML = 
    `<div class="card">
        <div class="card-title">
            <h1 class="capitalize">${currentPokemon.name}</h1>
            <span>${hp} HP</span>
        </div>
        <div class="card-body">
            <div class="img-container">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${('00' + id).slice(-3)}.png" alt="A pokemon named: ${currentPokemon.name}">
            </div>
        </div>
    </div>`;
    outerModal.classList.add('open');
}

const closeModal = () => {
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

window.addEventListener('keydown', event => {

    if (event.key === 'ArrowRight' && currentId !== 898) {
        catchemAll(currentId + 1);
        closeModal();
        clickSound(song);
    } 
    
    if (event.key === 'ArrowLeft') {
        catchemAll(currentId - 1);
        closeModal();
        clickSound(song);
    }

    if (event.key === 'Enter') {
        catchemAll(inputField.value);
    }

})

// LocalStorage
// animate lights