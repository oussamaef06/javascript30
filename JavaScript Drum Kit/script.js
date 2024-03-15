function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode || e.target.getAttribute('data-key')}"]`);
    const key = document.querySelector(`.drum-key[data-key="${e.keyCode || e.target.getAttribute('data-key')}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0; // Rewind to the start
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.drum-key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('click', playSound));
