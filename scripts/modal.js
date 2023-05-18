import { newGame } from "./test.js";

//TODO change button id
const modal = document.getElementById('number-of-digits-modal');
const btn = document.getElementById('myBtn');
const closeBtn = document.getElementById('modal-close-btn');
const rangeInput = document.getElementById('digitsRangeInput');
const newGameBtn = document.getElementById('new-game-btn');

rangeInput.oninput = () => document.getElementById('range-label').innerHTML = `Digits: ${rangeInput.value}`;

btn.onclick = () => modal.style.display = 'block';
closeBtn.onclick = () => modal.style.display = 'none';

// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

let numberOfDigits = rangeInput.value;
newGameBtn.onclick = () => {
    numberOfDigits = parseInt(rangeInput.value);
    newGame(numberOfDigits);
    modal.style.display = 'none';
}

export { numberOfDigits };