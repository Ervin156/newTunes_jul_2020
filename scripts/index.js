import { radioPlayerInit } from './radioPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';
import { activate, deActivate, hideElement } from './utils/utils.js';


const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const deactivationPlayer = () => {
  hideElement(temp)
  playerBtn.forEach(item => deActivate(item))
  playerBlock.forEach(item => deActivate(item))
};

playerBtn.forEach((btn, index) => btn.addEventListener('click', () => {
  deactivationPlayer();
  activate(btn)
  activate(playerBlock[index])
}));

radioPlayerInit();
musicPlayerInit();
videoPlayerInit();
