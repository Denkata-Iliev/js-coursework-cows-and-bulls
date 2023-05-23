import { digitsArray, generateRandomNumberWithUniqueDigits as randUniqueDigits } from './random-number-generator.js';
import { numberOfDigits } from './modal.js';
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
function guess() {

    if (!guessInput.value || isNaN(guessInput.value)) {
        errorMsgEl.innerHTML = `You must enter a ${numberOfDigits}-digit number.`;
        return;
    }

    const guessVal = guessInput.value;

    const [cows, bulls] = getBullsAndCows(rand, guessVal);

    addGuessValToHistory(guessVal);
    updateBullsAndCowsNumbers(bulls, cows);
    playAudio(bulls, cows);

    // TODO implement budget for guesses
    if (bulls === numberOfDigits) {
        revealNumbers();
        confettiEl.style.display = 'flex';
        guessHistoryEl.lastElementChild.classList.add('winning-guess');
        return;
    }

    // TODO get a few more cow sounds into an array and choose a random one to play (audio-player.js)
    console.log(`cows: ${cows}`);
    console.log(`bulls: ${bulls}`);
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
    guessInput.value = '';
    errorMsgEl.innerHTML = '';
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

document.getElementById('log-btn').onclick = () => console.log(numberOfDigits);

export { newGame };