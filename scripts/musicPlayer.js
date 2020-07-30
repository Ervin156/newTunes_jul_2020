import { addZero } from './utils/utils.js'

const audio = document.querySelector('.audio');
const audioImg = document.querySelector('.audio-img');
const audioHeader = document.querySelector('.audio-header');
const audioPlayer = document.querySelector('.audio-player');
const audioNavigation = document.querySelector('.audio-navigation');
const audioBtnPlay = document.querySelector('.audio-button__play');
const audioProress = document.querySelector('.audio-progress');
const audioProgressTiming = document.querySelector('.audio-progress__timing');
const audioTimePassed = document.querySelector('.audio-time__passed');
const audioTimeTotal = document.querySelector('.audio-time__total');

export const musicPlayerInit = () => {

  const playList = ['hello', 'flow', 'speed'];

  let trackIndex = 0;

  const loadTrack = () => {
    const isPlayed = audioPlayer.paused;
    const currentTrack = playList[trackIndex];
    audioPlayer.src = `./audio/${currentTrack}.mp3`;
    audioImg.src = `audio/${currentTrack}.jpg`;
    audioHeader.textContent = currentTrack.toUpperCase();
    if (isPlayed) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
  }
  const nextTrack = () => {
    if (trackIndex === playList.length - 1) {
      trackIndex = 0;
    } else {
      trackIndex++;
    }
    loadTrack();
  };

  const prevTrack = () => {
    if (trackIndex !== 0) {
      trackIndex--
    } else {
      trackIndex = playList.length - 1;
    }
    loadTrack();
  }

  audioNavigation.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('audio-button__play')) {
      audio.classList.toggle('play');
      audioBtnPlay.classList.toggle('fa-play');
      audioBtnPlay.classList.toggle('fa-pause');

      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause()
      };
      const currentTrack = playList[trackIndex];

      audioHeader.textContent = currentTrack.toUpperCase()

    }
    if (target.classList.contains('audio-button__prev')) {
      prevTrack();
    };
    if (target.classList.contains('audio-button__next')) {
      nextTrack();
    }

  });

  audioPlayer.addEventListener('ended', () => {
    nextTrack();
    audioPlayer.play();
  });

  audioPlayer.addEventListener('timeupdate', () => {
    const duration = audioPlayer.duration;
    const currentTime = audioPlayer.currentTime;
    const progress = (currentTime / duration) * 100;
    const minutesPassed = Math.floor(currentTime / 60) || '0';
    const secondsPassed = Math.floor(currentTime % 60) || '0';
    const minutesTotal = Math.floor(duration / 60) || '0';
    const secondsTotal = Math.floor(duration % 60) || '0';

    audioProgressTiming.style.width = progress + '%';


    audioTimePassed.textContent = `${addZero(minutesPassed)}:${addZero(secondsPassed)}`
    audioTimeTotal.textContent = `${addZero(minutesTotal)}:${addZero(secondsTotal)}`

    audioProress.addEventListener('click', (e) => {

      const currentProgress = e.offsetX;
      const allWidthTrack = audioProress.clientWidth;
      const progress = (currentProgress / allWidthTrack) * audioPlayer.duration;

      audioPlayer.currentTime = progress;


    })

  })



}