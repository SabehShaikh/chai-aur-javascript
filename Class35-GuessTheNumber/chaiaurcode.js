// generating random number 1 - 100

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numOfGues = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

// validate if value is between 1-100
const validateGuess = (guess) => {
    if (isNaN(guess)) {
        alert("please enter a valid number")
    } else if (guess < 1) {
        alert("please enter a number more than 1")
    }
    else if (guess > 100) {
        alert("please enter a number less than 100")
    } else {
        prevGuess.push(guess);
        if (numOfGues === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

const checkGuess = (guess) => {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is Tooo Low`)
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is Tooo High`)
    }
}

// for cleaningup
const displayGuess = (guess) => {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} , `
    numOfGues++;
    remaining.innerHTML = `${11 - numOfGues}`
}

const displayMessage = (message) => {
    lowOrHi.innerHTML = `<h2> ${message} </h2>`
}

const endGame = () => {
    userInput.value = '';
    userInput.setAttribute("disabled", '')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

const newGame = () => {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numOfGues = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numOfGues}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })

}
