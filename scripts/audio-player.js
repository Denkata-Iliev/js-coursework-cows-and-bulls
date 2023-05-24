import { bullsCowsToggleChecked, winLoseToggleChecked } from "./sound-toggles-listeners.js";

const cowSound = 'sounds/cow.mp3';
const bullSound = 'sounds/bull.mp3';
const winSound = 'sounds/win.mp3';
const loseSound = 'sounds/lose.mp3';

function playCowsAndBullsAudio(bulls, cows) {
    if (!bullsCowsToggleChecked()) {
        return;
    }

    if (bulls > 0) {
        playAudioFile(bullSound);
    }

    if (cows > 0) {
        playAudioFile(cowSound);
    }
}

function playWinAudio() {
    if (winLoseToggleChecked()) {
        playAudioFile(winSound);
    }
}

function playLoseAudio() {
    if (winLoseToggleChecked()) {
        playAudioFile(loseSound);
    }
}

function playAudioFile(filePath) {
    new Audio(filePath).play();
}

export { playCowsAndBullsAudio, playWinAudio, playLoseAudio };