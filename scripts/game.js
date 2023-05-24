import { digitsArray, generateRandomNumberWithUniqueDigits as randUniqueDigits } from './random-number-generator.js';
import { guessesRemainingEl, numberOfDigits, numberOfGuessesDict } from './modal.js';
import { playAudio } from './audio-player.js';

const bullsNumberEl = document.getElementById('bulls-number');
const cowsNumberEl = document.getElementById('cows-number');
const guessInput = document.getElementById('guess');
const guessHistoryEl = document.getElementById('guess-history');
const errorMsgEl = document.getElementById('error-msg');
const confettiEl = document.getElementById('confetti-element');

guessInput.value = '';
document.getElementById('guess-btn').addEventListener('click', guess);

let rand = randUniqueDigits(numberOfDigits);
let numberOfGuesses = numberOfGuessesDict[numberOfDigits];
function guess() {
    if (!guessInput.value || isNaN(guessInput.value) || guessInput.value.length !== numberOfDigits) {
        errorMsgEl.innerHTML = `You must enter a ${numberOfDigits}-digit number!`;
        return;
    } else {
        errorMsgEl.innerHTML = '';
    }

    const guessVal = guessInput.value;

    if (numberOfGuesses <= 0) {
        revealNumbers();
        errorMsgEl.innerHTML = `You lost!`;
        errorMsgEl.classList.add('game-lost');
        return;
    }

    const [cows, bulls] = getBullsAndCows(rand, guessVal);

    numberOfGuesses--;
    guessesRemainingEl.innerHTML = numberOfGuesses;

    addGuessValToHistory(guessVal);
    updateBullsAndCowsNumbers(bulls, cows);
    playAudio(bulls, cows);

    if (bulls === numberOfDigits) {
        revealNumbers();
        confettiEl.style.display = 'flex';
        guessHistoryEl.lastElementChild.classList.add('winning-guess');
        return;
    }
}

function getBullsAndCows(randomNumberStr, guessValue) {
    let cows = 0;
    let bulls = 0;

    for (let i = 0; i < randomNumberStr.length; i++) {
        const c = randomNumberStr.charAt(i);
        if (!guessValue.includes(c)) {
            continue;
        }

        if (guessValue.charAt(i) === c) {
            bulls++;
        } else {
            cows++;
        }
    }

    return [cows, bulls];
}

function addGuessValToHistory(guessVal) {
    const span = document.createElement('span');
    span.innerHTML = guessVal;
    guessHistoryEl.appendChild(span);
}

function updateBullsAndCowsNumbers(bulls, cows) {
    bullsNumberEl.innerHTML = bulls;
    cowsNumberEl.innerHTML = cows;
}

function newGame(digitNumber) {
    rand = randUniqueDigits(digitNumber);
    numberOfGuesses = numberOfGuessesDict[digitNumber];
    guessInput.value = '';
    errorMsgEl.style.display = 'none';
    confettiEl.style.display = 'none';
    guessHistoryEl.innerHTML = '<p>Guesses: </p>';
}

function revealNumbers() {
    const numbers = document.getElementsByClassName('circle');
    Array.from(numbers).forEach((el, index) => {
        setTimeout(() => {
            el.innerHTML = digitsArray[index];
        }, index * 300);
    });
}

export { newGame };