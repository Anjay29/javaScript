let randomNo = parseInt(Math.random() * 100 + 1);
// console.log(randomNo);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}


const validateGuess = (guess) => {
    if (isNaN(guess)) {
        alert(`Please enter a valid Number`);
    } else if (guess > 100) {
        alert(`Please enter a value between 1 and 100`);
    } else if (guess < 1) {
        alert(`Please enter a value between 1 and 100`);
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            DisplayGuess(guess);
            displayMessage(`Game Over. Random Number is ${randomNo}`)
            endGame();
        } else {
            DisplayGuess(guess);
            checkGuess(guess);
        }
    }
}

const checkGuess = (guess) => {
    if (guess == randomNo) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess > randomNo) {
        displayMessage(`The number is high`);
    } else {
        displayMessage(`The number is low`);
    }
}

const DisplayGuess = (guess) => {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${
        11 - numGuess
    }`
}

const displayMessage = (message) => {
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

const endGame = () => {
    userInput.value = '';
    userInput.setAttribute('disable', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id='startGame'>Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

const newGame = () => {
    const newGameButton = document.querySelector('#startGame');
    newGameButton.addEventListener('click', (e) => {
        randomNo = parseInt(Math.random() * 100 + 1);
        // console.log(randomNo);
        userInput.removeAttribute('disable');
        guessSlot.innerHTML = ''
        numGuess = 1;
        remaining.innerHTML = `${
            11 - numGuess
        }`
        prevGuess = [];
        startOver.removeChild(p);
        playGame = true;
    })
}
