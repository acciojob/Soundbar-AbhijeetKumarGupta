//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttons = document.getElementById('buttons');

let currentAudio = null;

sounds.forEach(sound => {
  const button = document.createElement('button');
  button.classList.add('btn');
  button.textContent = sound;

  button.addEventListener('click', () => {
    stopSound();

    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();
  });

  buttons.appendChild(button);
});

const stopButton = document.createElement('button');
stopButton.classList.add('btn', 'stop');
stopButton.textContent = 'Stop';

stopButton.addEventListener('click', stopSound);

buttons.appendChild(stopButton);

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}