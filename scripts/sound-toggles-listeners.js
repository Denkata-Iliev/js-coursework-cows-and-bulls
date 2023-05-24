const allSoundsToggle = document.getElementById('all-sounds-toggle');
const bullsCowsSoundsToggle = document.getElementById('bulls-cows-sounds-toggle');
const winLoseSoundsToggle = document.getElementById('win-lose-sounds-toggle');

initSoundToggleListeners();

function initSoundToggleListeners() {
    allSoundsToggle.oninput = toggleAllSounds;
    bullsCowsSoundsToggle.oninput = () => setSoundToggleChecked(allSoundsToggle, false);
    winLoseSoundsToggle.oninput = () => setSoundToggleChecked(allSoundsToggle, false);
}

function toggleAllSounds() {
    setSoundToggleChecked(bullsCowsSoundsToggle, allSoundsToggle.checked);
    setSoundToggleChecked(winLoseSoundsToggle, allSoundsToggle.checked);
}

function setSoundToggleChecked(soundToggleInput, checked) {
    soundToggleInput.checked = checked;
}

const bullsCowsToggleChecked = () => bullsCowsSoundsToggle.checked;
const winLoseToggleChecked = () => winLoseSoundsToggle.checked;

export { initSoundToggleListeners, bullsCowsToggleChecked, winLoseToggleChecked };