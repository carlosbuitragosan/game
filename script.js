let buttonsOrder = []; //keep track of the order of the lights nad how they flash //
let playerOrder = []; // order that the player is pressing the buttons //
let flash; // the number of flashes that have appeared //
let round; //keep track of what turn we're on //
let good; //boolean, it player has hit the right colours then = true //
let computerTurn; // to keep track of whose turn it is //
let intervalId;
let sound = true; // if we're playing sound //
let win; // boolean. if you win the = true //

const topLeftButton = document.querySelector('.button__top-left');
const topRighButton = document.querySelector('.button__top-right');
const bottomLeftButton = document.querySelector('.button__bottom-left');
const bottomRightButton = document.querySelector('.button__bottom-right');
const startButton = document.querySelector('.menu__button_start');





/////////////////////////////////////////////////////////
                // **** PLAYER CLICKING BUTTONS  ****
//////////////////////////////////////////////////////////
const audio1 = () => {
    let audio = document.querySelector('#sample__a');
    audio.play();
}

topLeftButton.addEventListener('click', () => {
    audio1();
    topLeftButton.style.backgroundColor = '#FFD0E5';
    topLeftButton.style.border = '#FFD0E5';
    setTimeout(() => topLeftButton.style.backgroundColor = '#FF006F', 200)
})

const audio2 = () => {
    let audio = document.querySelector('#sample__g');
    audio.play();
    
}

topRighButton.addEventListener('click', () => {
    audio2();
    topRighButton.style.backgroundColor = '#C5CDFF';
    topRighButton.style.border = '#C5CDFF';
    setTimeout(() => topRighButton.style.backgroundColor = '#4A62FF', 200);
})

const audio3 = () => {
    let audio = document.querySelector('#sample__d');
    audio.play();
}
bottomLeftButton.addEventListener('click', () => {
    audio3();
    bottomLeftButton.style.backgroundColor = '#FCFFBA';
    bottomLeftButton.style.border = '#FCFFBA';
    setTimeout(() => bottomLeftButton.style.backgroundColor = '#f4fc09', 200);
})

const audio4 = () => {
    let audio = document.querySelector('#sample__e');
    audio.play();
}
bottomRightButton.addEventListener('click', () => {
    audio4();
    bottomRightButton.style.backgroundColor = '#9AFB9A';
    bottomRightButton.style.border = '#9AFB9A';
    setTimeout(() => bottomRightButton.style.backgroundColor = '#009700', 200)
})