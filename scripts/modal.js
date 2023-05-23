import { newGame } from "./game.js";

const modal = document.getElementById('number-of-digits-modal');
const openNewGameModal = document.getElementById('open-new-game-modal-btn');
const closeBtn = document.getElementById('modal-close-btn');
const rangeInput = document.getElementById('digitsRangeInput');
const newGameBtn = document.getElementById('new-game-btn');
const rangeInputLabel = document.getElementById('range-label');
const secretNumbersWrapper = document.getElementById('secret-number-wrap');
const guessesRemainingEl = document.getElementById('guesses-remaining');

const numberOfGuessesDict = {
    4: 10,
    5: 15,
    6: 20,
    7: 25
};

rangeInput.value = 5;
rangeInput.oninput = () => rangeInputLabel.innerHTML = `Digits: ${rangeInput.value}`;

openNewGameModal.onclick = () => modal.style.display = 'block';
closeBtn.onclick = () => modal.style.display = 'none';

// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

let numberOfDigits = parseInt(rangeInput.value);
guessesRemainingEl.innerHTML = numberOfGuessesDict[numberOfDigits];
newGameBtn.onclick = () => {
    numberOfDigits = parseInt(rangeInput.value);
    newGame(numberOfDigits);
    rangeInput.value = numberOfDigits;
    rangeInputLabel.innerHTML = `Digits: ${rangeInput.value}`;
    guessesRemainingEl.innerHTML = numberOfGuessesDict[numberOfDigits];
    modal.style.display = 'none';

    createSecretNumberCircles(numberOfDigits);
}

function createSecretNumberCircles(number) {
    secretNumbersWrapper.innerHTML = '';
    for (let i = 0; i < number; i++) {
        const span = document.createElement('span');
        span.className = 'circle d-flex flex-column align-items-center justify-content-center';
        span.innerHTML = '?';
        secretNumbersWrapper.appendChild(span);
    }
}

createSecretNumberCircles(numberOfDigits);

export { numberOfDigits, numberOfGuessesDict, guessesRemainingEl };