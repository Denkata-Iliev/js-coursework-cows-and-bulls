import { generateRandomNumberWithUniqueDigits as randUniqueDigits } from './random-number-generator.js';
import { numberOfDigits } from './modal.js';

document.getElementsByClassName('btn')[0].addEventListener('click', guess);

function playAudio() {
    // TODO toggle for sound effects is done
    if (!document.getElementById('f').checked) {
        return;
    }

    new Audio('Voicy_Say3 - cow.mp3').play();
}

// TODO game logic is done
let rand = randUniqueDigits(numberOfDigits);
function guess() {
    const guessVal = document.getElementById('guess').value;

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

    if (bulls === numberOfDigits) {
        alert('won');
        return;
    }

    // TODO get a few more cow sounds into an array and choose a random one to play
    console.log(`cows: ${cows}`);
    console.log(`bulls: ${bulls}`);
}

function newGame(digitNumber) {
    rand = randUniqueDigits(digitNumber);
}

document.getElementById('log-btn').onclick = () => console.log(numberOfDigits);

export { newGame };