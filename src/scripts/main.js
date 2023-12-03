"use strict";
const pianoKeys = document.querySelectorAll('.piano-keys .key');
let audio = new Audio('src/tunes/a.wav');
let mapedKeys = [];
let volume = document.querySelector('.input-volume');
let checkboxKey = document.querySelector('.checkbox');
pianoKeys.forEach((key) => {
    if (key.dataset.key) {
        mapedKeys.push(key.dataset.key);
    }
    key.addEventListener('click', () => {
        if (key.dataset.key) {
            playTune(key.dataset.key);
        }
        ;
    });
});
function playTune(keyName) {
    audio.src = `src/tunes/${keyName}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${keyName}"]`);
    if (clickedKey) {
        clickedKey.classList.add('active');
        setTimeout(() => {
            clickedKey.classList.remove('active');
        }, 150);
    }
    ;
}
;
document.addEventListener('keydown', (event) => {
    if (mapedKeys.includes(event.key)) {
        playTune(event.key);
    }
    ;
});
if (volume) {
    volume.addEventListener('input', function () {
        handleVolume(this.value);
    });
}
;
function handleVolume(volume) {
    audio.volume = Number(volume);
}
;
if (checkboxKey) {
    checkboxKey.addEventListener('input', function () {
        pianoKeys.forEach((key) => {
            key.classList.toggle('hide');
        });
    });
}
;
