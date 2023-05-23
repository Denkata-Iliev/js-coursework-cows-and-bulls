const cowSounds = [];
const bullSounds = [];

function playAudio(bulls, cows) {
    if (!document.getElementById('soundsToggle').checked) {
        return;
    }

    for (let i = 0; i < bulls; i++) {
        setTimeout(() => new Audio(bullSounds[Math.floor(Math.random() * bullSounds.length)]).play(), i * 300);
    }
    
    for (let i = 0; i < cows; i++) {
        setTimeout(() => new Audio(cowSounds[Math.floor(Math.random() * cowSounds.length)]).play(), i * 300);
    }
}

export { playAudio };