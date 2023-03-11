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


const audio1 = () => {
    let audio = document.querySelector('#sample__a');
    audio.play();
}

topLeftButton.addEventListener('click', () => {
    audio1();
})

const audio2 = () => {
    let audio = document.querySelector('#sample__g');
    audio.play();
}

topRighButton.addEventListener('click', () => {
    audio2();
})

const audio3 = () => {
    let audio = document.querySelector('#sample__d');
    audio.play();
}
bottomLeftButton.addEventListener('click', () => {
    audio3();
})

const audio4 = () => {
    let audio = document.querySelector('#sample__e');
    audio.play();
}
bottomRightButton.addEventListener('click', () => {
    audio4();
})