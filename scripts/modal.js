import { newGame } from "./test.js";

//TODO change button id
const modal = document.getElementById('number-of-digits-modal');
const openNewGameModal = document.getElementById('open-new-game-modal-btn');
const closeBtn = document.getElementById('modal-close-btn');
const rangeInput = document.getElementById('digitsRangeInput');
const newGameBtn = document.getElementById('new-game-btn');
const rangeInputLabel = document.getElementById('range-label');
const secretNumbersWrapper = document.getElementById('secret-number-wrap');

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
newGameBtn.onclick = () => {
    numberOfDigits = parseInt(rangeInput.value);
    newGame(numberOfDigits);
    rangeInput.value = numberOfDigits;
    rangeInputLabel.innerHTML = `Digits: ${rangeInput.value}`;
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

export { numberOfDigits };