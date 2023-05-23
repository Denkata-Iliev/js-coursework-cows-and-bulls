import { digitsArray, generateRandomNumberWithUniqueDigits as randUniqueDigits } from './random-number-generator.js';
import { numberOfDigits } from './modal.js';

const bullsNumberEl = document.getElementById('bulls-number');
const cowsNumberEl = document.getElementById('cows-number');
const guessInput = document.getElementById('guess');
const guessHistoryEl = document.getElementById('guess-history');
const errorMsgEl = document.getElementById('error-msg');

guessInput.value = '';
document.getElementById('guess-btn').addEventListener('click', guess);

function playAudio() {
    // TODO toggle for sound effects is done
    if (!document.getElementById('soundsToggle').checked) {
        return;
    }

    new Audio('Voicy_Say3 - cow.mp3').play();
}

// TODO game logic is done
let rand = randUniqueDigits(numberOfDigits);
function guess() {

    if (!guessInput.value || isNaN(guessInput.value)) {
        errorMsgEl.innerHTML = `You must enter a ${numberOfDigits}-digit number.`;
        return;
    }

    const guessVal = guessInput.value;

    let cows = 0;
    let bulls = 0;
    for (let i = 0; i < rand.length; i++) {
        const c = rand.charAt(i);
        if (!guessVal.includes(c)) {
            continue;
        }

        if (guessVal.charAt(i) === c) {
            bulls++;
        } else {
            cows++;
        }
    }

    addGuessValToHistory(guessVal);
    updateBullsAndCowsNumbers(bulls, cows);

    if (bulls === numberOfDigits) {
        // TODO when game finishes, reveal secret number (just change innerHTML)
        revealNumbers();
        return;
    }

    // TODO get a few more cow sounds into an array and choose a random one to play
    console.log(`cows: ${cows}`);
    console.log(`bulls: ${bulls}`);
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