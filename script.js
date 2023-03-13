let computerOrder = []; //keep track of the order of the lights and how they flash //
let playerOrder = []; // order that the player is pressing the buttons //
let flash; // the number of flashes that have appeared //
let round; //keep track of what turn we're on //
let noErrors; //boolean, it player has hit the right colours then = true //
let computerTurn; // to keep track of whose turn it is //
let intervalId;
let sound = true; // if we're playing sound //
let win; // boolean. if you win the = true //


//////////////// *** BUTTONS ***   ////////////////////////
const allButtons = [...document.querySelectorAll('.play-buttons')];
const redButton = document.querySelector('.button__top-left');
const blueButton = document.querySelector('.button__top-right');
const yellowButton = document.querySelector('.button__bottom-left');
const greenButton = document.querySelector('.button__bottom-right');
const startButton = document.querySelector('.menu__button_start');
///

//////////////// *** AUDIO SAMPLES ***   //////////////////
const  audioA = document.querySelector('#sample__a');
const audioG = document.querySelector('#sample__g');
const audioD = document.querySelector('#sample__d');
const audioE = document.querySelector('#sample__e');
const audioError = document.querySelector('#error');
///


//////////////// *** FLASH COLOUR FUNCTION *** /////////
const flashColour = (button, value) => {
    button.classList.toggle(value);
    setTimeout(() => button.classList.toggle(value), 500);
};
///


////////////// *** PLAY AUDIO FUNCTION *** //////////////
const playAudio = (track) => {
    track.play();
};
///


////////////////////// *** CLICK BUTTONS EVENT *** ////////////////////
allButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        if (computerTurn === false) {

            /////flash the colour
        let buttonClassValue = event.currentTarget.classList.value.split(' ')[1];
        let flashColourClassvalue = buttonClassValue + '_flash';
        flashColour(button, flashColourClassvalue);

        ///play the audio
        switch (buttonClassValue) { 
            case 'button__top-left':
                playAudio(audioA);
                playerOrder.push(1);
                    checkPlayerRound();
                break;
            case 'button__top-right':
                playAudio(audioG)
                playerOrder.push(2);
                checkPlayerRound();
                break;
            case 'button__bottom-left':
                playAudio(audioD);
                playerOrder.push(3);
                checkPlayerRound();
                break;
            case 'button__bottom-right':
                playAudio(audioE);
                playerOrder.push(4);
                checkPlayerRound();
                break;
            }
        }
    });
});
//////


// const flashColourRed = () => {
//     redButton.style.backgroundColor = '#FB78B1';
//     redButton.style.border = '#FB78B1';
//     setTimeout(() => redButton.style.backgroundColor = '#FF006F', 200);
// }

// const flashColourBlue = () => {
//     blueButton.style.backgroundColor = '#7E8FF9';
//     blueButton.style.border = '#7E8FF9';
//     setTimeout(() => blueButton.style.backgroundColor = '#4A62FF', 200);
// }

// const flashColourYellow = () => {
//     yellowButton.style.backgroundColor = '#FCFFBA';
//     yellowButton.style.border = '#FCFFBA';
//     setTimeout(() => yellowButton.style.backgroundColor = '#f4fc09', 200);
// }

// const flashColourGreen = () => {
//     greenButton.style.backgroundColor = '#9AFB9A';
//     greenButton.style.border = '#9AFB9A';
//     setTimeout(() => greenButton.style.backgroundColor = '#009700', 200);
// }







//////////////////////////////////////////////////////
        // **** BUTTON FLASH & SOUND FUNCTIONS ****
////////////////////////////////////////////////////////


// allButtons.forEach(button => {
//     button.addEventListener('click', event => {
//         console.log(event.currentTarget.classList.value.split(' ')[1])
//         switch (event.currentTarget.classList.value.split(' ')[1]) {
//             case 'button__top-left':
//                 playAudio(audioA);
//                 break;
//             case 'button__top-right':
//                 playAudio(audioG)
//                 break;
//             case 'button__bottom-left':
//                 playAudio(audioD);
//                 break;
//             case 'button__bottom-right':
//                 playAudio(audioE);
//         }
//     })
// })

// const playAudioRed = () => {
//     audioA.play();
//     // flashColourRed();
// }

// const playAudioBlue = () => {
//     audioG.play();
//     // flashColourBlue();
// }

// const playAudioYellow = () => {
//     audioD.play();
//     // flashColourYellow();
// }

// const playAudioGreen = () => {
//     audioE.play();
//     // flashColourGreen();
// }





/////////////////////////////////////////////////////////
                // **** PLAYER CLICKING BUTTONS  ****
//////////////////////////////////////////////////////////
// redButton.addEventListener('click', () => {
//     playAudioRed();  
// })

// blueButton.addEventListener('click', () => {
//     playAudioBlue();
// })

// yellowButton.addEventListener('click', () => {
//     playAudioYellow();
// })

// greenButton.addEventListener('click', () => {
//     playAudioGreen();
// })




///////////////////// **** START GAME ****** ///////////////////
startButton.addEventListener('click', () => {
    clearInterval(intervalId); //if this is not cleared when button is pressed again it creates a mess (maybe several functions running together)
    play();
})
//////




////////////////// *** PLAY FUNCTION *** ////////////////////////////
const play = () => {
    resetGame();
    for (let i = 0; i < 20; i ++) {
        computerOrder.push(Math.floor(Math.random() * 4) + 1);
    }
    computerTurn = true; //the first round starts with the computer
    intervalId = (setInterval(gameTurn, 600));
};
//////




//////////////// *** GAME TURN FUNCTION *** ///////////////////////////////
const gameTurn = () => {
    console.log('gameTurn', {computerTurn})
    if (flash === round) {
        computerTurn = false; //so that: the first round (flash=0 & round=1)=computerTurn = true but when flash increases then flash==round and computer stops, therefore first round there's only one sound;
        clearInterval(intervalId);
        console.log('if statement', {computerTurn})
    }
    if (computerTurn) { 
        setTimeout(() => {
            if (computerOrder[flash] === 1) {
                playAudio(audioA);
                flashColour(redButton, 'button__top-left_flash');
            }
            if (computerOrder[flash] === 2) {
                playAudio(audioG);
                flashColour(blueButton, 'button__top-right_flash');
            }
            if (computerOrder[flash] === 3) {
                playAudio(audioD);
                flashColour(yellowButton, 'button__bottom-left_flash');
            }
            if (computerOrder[flash] === 4) {
                playAudio(audioE);
                flashColour(greenButton, 'button__bottom-right_flash');
            }
            flash ++;
        }, 200);
    }
};
/////


/////////////// *** CHECK PLAYER'S ROUND FUNCTION *** /////////////
const checkPlayerRound = () => {
    if (round === playerOrder.length) { ///this piece of code generates the next round
        round ++;
        playerOrder = [];
        computerTurn = true;
        flash = 0;
        setTimeout(() => { /// I put this timer to give some time between player and next computer round
            intervalId = setInterval(gameTurn, 600);
        }, 500) 
    }
    if (playerOrder[playerOrder.length -1] !== computerOrder[playerOrder.length - 1]) {///this checks for the player round against the computer round and if error then game is reset
        noErrors = false;
    }
    if (noErrors ===false) {
        gameOver();
        resetGame();

    }
}
//////


////////////// *** RESET VARIABLES *** /////////////////////
const resetGame = () => {
    computerOrder = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    round = 1; 
    win = false;
    noErrors = true;
    console.log('GAME RESET');
}
///

const gameOver = () => {
    console.log('GAME OVER');
    playAudio(audioError);
}