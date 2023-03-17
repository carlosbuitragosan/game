
let computerOrder = []; //keep track of the order of the lights and how they flash //
let playerOrder = []; // order that the player is pressing the buttons //
let numberOfFlashes; // the number of flashes that have appeared //
let round; //keep track of what turn we're on //
let noErrors; //boolean, it player has hit the right colours then = true //
let computerTurn; // to keep track of whose turn it is //
let intervalId;
let win; // boolean. if you win then win  = true //


//////////////// *** BUTTONS ***   ////////////////////////
const allButtons = [...document.querySelectorAll('.play-buttons')];
const redButton = document.querySelector('.button__top-left');
const blueButton = document.querySelector('.button__top-right');
const yellowButton = document.querySelector('.button__bottom-left');
const greenButton = document.querySelector('.button__bottom-right');
const startButton = document.querySelector('.menu__button_start');
///


//////////////////// *** MODALS *** //////////////////////////////
const modalWin = document.querySelector('.modal__win');
const modalWinCloseButton = document.querySelector('.win__button_close');
const modalGameover = document.querySelector('.modal__gameover');
const modalGameoverCloseButton =document.querySelector('.gameover__button_close');






//////////////// *** AUDIO SAMPLES ***   //////////////////
const  audioA = document.querySelector('#sample__a');
const audioG = document.querySelector('#sample__g');
const audioD = document.querySelector('#sample__d');
const audioE = document.querySelector('#sample__e');
const audioError = document.querySelector('#error');
const audioWinGame = document.querySelector('#win');
///


//////////////// *** FLASH COLOUR FUNCTION *** /////////
const flashColour = (button, className) => {
    button.classList.toggle(className);
    setTimeout(() => button.classList.toggle(className), 500);
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

        ///play the audio and check for player's round
        // switch (buttonClassValue) { 
        //     case 'button__top-left':
        //         playAudio(audioA);
        //         playerOrder.push(1);
        //         checkPlayerRound();
        //         break;
        //     case 'button__top-right':
        //         playAudio(audioG)
        //         playerOrder.push(2);
        //         checkPlayerRound();
        //         break;
        //     case 'button__bottom-left':
        //         playAudio(audioD);
        //         playerOrder.push(3);
        //         checkPlayerRound();
        //         break;
        //     case 'button__bottom-right':
        //         playAudio(audioE);
        //         playerOrder.push(4);
        //         checkPlayerRound();
        //         break;
        //     }
        }
    });
});
//////



//// REPLACEMENT CODE FOR SWITCH STATEMENT ABOVE TO TEST THE DIFFERENCE /////////
redButton.addEventListener('click', () => {
    if (computerTurn === false) {
        playAudio(audioA);
        playerOrder.push(1);
        checkPlayerRound();
    }
});

blueButton.addEventListener('click', () => {
    if (computerTurn === false) {
        playAudio(audioG)
        playerOrder.push(2);
        checkPlayerRound();
    }
});

yellowButton.addEventListener('click', () => {
    if (computerTurn === false) {
        playAudio(audioD);
        playerOrder.push(3);
        checkPlayerRound();
    }
});

greenButton.addEventListener('click', () => {
    if (computerTurn === false) {
        playAudio(audioE);
        playerOrder.push(4);
        checkPlayerRound();
    }
});
/////////////










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
    if (numberOfFlashes === round) {
        computerTurn = false; //so that: the first round (flash=0 & round=1)=computerTurn = true but when flash increases then flash==round and computer stops, therefore first round there's only one sound;
        clearInterval(intervalId);
    }

    if (computerTurn) { 
        setTimeout(() => {
            if (computerOrder[numberOfFlashes] === 1) {
                playAudio(audioA);
                flashColour(redButton, 'button__top-left_flash');
            }
            if (computerOrder[numberOfFlashes] === 2) {
                playAudio(audioG);
                flashColour(blueButton, 'button__top-right_flash');
            }
            if (computerOrder[numberOfFlashes] === 3) {
                playAudio(audioD);
                flashColour(yellowButton, 'button__bottom-left_flash');
            }
            if (computerOrder[numberOfFlashes] === 4) {
                playAudio(audioE);
                flashColour(greenButton, 'button__bottom-right_flash');
            }
            numberOfFlashes ++;
        }, 200);
    }
};
/////


/////////////// *** CHECK PLAYER'S ROUND FUNCTION *** /////////////
const checkPlayerRound = () => {
    if (playerOrder[playerOrder.length -1] !== computerOrder[playerOrder.length - 1]) {///this checks for the player round against the computer round and if error then game is reset. It also needs to go first otherwise the first round wont be checked for errors.
        noErrors = false;
    }

    if (noErrors === false) {
        gameOver();
        resetGame();
    }

    if (playerOrder.length === 20 && noErrors) {
        winGame();
    }

    if (round === playerOrder.length) { ///this piece of code generates the next round
        round ++;
        playerOrder = [];
        computerTurn = true;
        numberOfFlashes = 0;
        setTimeout(() => { /// I put this timer to give some time between player and next computer round
        intervalId = setInterval(gameTurn, 600);
        }, 500) 
    } 

    
}
//////


////////////// *** RESET VARIABLES *** /////////////////////
const resetGame = () => {
    computerOrder = [];
    playerOrder = [];
    numberOfFlashes = 0;
    intervalId = 0;
    round = 1; 
    win = false;
    noErrors = true;;
}
///





///////////// *** WIN FUNCTION **** ////////////////
const winGame = () => {
    allButtons.forEach(button => button.style.boxShadow = ' 0 0 8px #D5A418, 0 0 24px #D5A418,0 0 36px #D5A418, 0 0 48px #D5A418, 0 0 56px #D5A418');
    setTimeout(() => {
        allButtons.forEach(button => button.style.boxShadow = '2px 2px  8px #000, 4px 4px 16px #000')
    }, 8000)
    playAudio(audioWinGame);
    modalWin.showModal();
    setTimeout(() => modalWin.close(), 8000);
    resetGame(); 
    computerTurn = true; // so that when the game is finihed you cant press anything.
};

modalWinCloseButton.addEventListener('click', () => {
    modalWin.close();
    audioWinGame.pause();
});
/////



///////////// *** GAME OVER FUNCTION *** /////////////////
const gameOver = () => {
    resetGame();
    computerTurn = true;
    playAudio(audioError);
    
    modalGameover.showModal();
    setTimeout(() => modalGameover.close(), 6000);
}

modalGameoverCloseButton.addEventListener('click', () => modalGameover.close());
//////