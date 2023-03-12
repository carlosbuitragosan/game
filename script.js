let buttonsOrder = []; //keep track of the order of the lights and how they flash //
let playerOrder = []; // order that the player is pressing the buttons //
let flash = 0; // the number of flashes that have appeared //
let round; //keep track of what turn we're on //
let good; //boolean, it player has hit the right colours then = true //
let computerTurn = true; // to keep track of whose turn it is //
let intervalId;
let sound = true; // if we're playing sound //
let win = false; // boolean. if you win the = true //

const redButton = document.querySelector('.button__top-left');
const blueButton = document.querySelector('.button__top-right');
const yellowButton = document.querySelector('.button__bottom-left');
const greenButton = document.querySelector('.button__bottom-right');
const startButton = document.querySelector('.menu__button_start');





//////////////////////////////////////////////////////
        // **** BUTTON FLASH & SOUND FUNCTIONS ****
////////////////////////////////////////////////////////
const one = () => {
    let audio = document.querySelector('#sample__a');
    audio.play();
    redButton.style.backgroundColor = '#FB78B1';
    redButton.style.border = '#FB78B1';
    setTimeout(() => redButton.style.backgroundColor = '#FF006F', 200);
}

const two = () => {
    let audio = document.querySelector('#sample__g');
    audio.play();
    blueButton.style.backgroundColor = '#7E8FF9';
    blueButton.style.border = '#7E8FF9';
    setTimeout(() => blueButton.style.backgroundColor = '#4A62FF', 200);
}

const three = () => {
    let audio = document.querySelector('#sample__d');
    audio.play();
    yellowButton.style.backgroundColor = '#FCFFBA';
    yellowButton.style.border = '#FCFFBA';
    setTimeout(() => yellowButton.style.backgroundColor = '#f4fc09', 200);
}

const four = () => {
    let audio = document.querySelector('#sample__e');
    audio.play();
    greenButton.style.backgroundColor = '#9AFB9A';
    greenButton.style.border = '#9AFB9A';
    setTimeout(() => greenButton.style.backgroundColor = '#009700', 200)
}





/////////////////////////////////////////////////////////
                // **** PLAYER CLICKING BUTTONS  ****
//////////////////////////////////////////////////////////
redButton.addEventListener('click', () => {
    one();  
})

blueButton.addEventListener('click', () => {
    two();
})

yellowButton.addEventListener('click', () => {
    three();
})

greenButton.addEventListener('click', () => {
    four();
})





//////////////////////////////////////////////
        // ****** PLAY FUNCTION **** 
//////////////////////////////////////////////
const play = () => {
    buttonsOrder = [];
    flash = 0;
    intervalId = 0;
    for (let i = 0; i < 20; i ++) {
        buttonsOrder.push(Math.floor(Math.random() * 4) + 1);
    }
    intervalId = setInterval(gameTurn, 800);
}





startButton.addEventListener('click', () => {
    clearInterval(intervalId); //if this is not cleared when button is pressed again it creates a mess (maybe several functions running together)
    play();
})



///////////////////////////////////////////////
    // **** GAME TURN FUNCTION ****
//////////////////////////////////////////////
const gameTurn = () => {
    setTimeout(() => {
        if (buttonsOrder[flash] === 1) one();
        if (buttonsOrder[flash] === 2) two();
        if (buttonsOrder[flash] === 3) three();
        if (buttonsOrder[flash] === 4) four();
        flash ++;
    }, 200);
}