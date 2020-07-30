import {addZero} from './utils/utils.js'


export const videoPlayerInit = () => {

  const videoPlayer = document.querySelector('.video-player');
  const videoBtnPlay = document.querySelector('.video-button__play');
  const videoBtnStop = document.querySelector('.video-button__stop');
  const videoTimePassed = document.querySelector('.video-time__passed');
  const videoProgress = document.querySelector('.video-progress');
  const videoTimeTotal = document.querySelector('.video-time__total');

  const togglePlay = () => {
    videoPlayer.paused ? videoPlayer.play() : videoPlayer.pause();
    toggleIcon()
  }


  const toggleIcon = () => {
    if (videoPlayer.paused) {
      videoBtnPlay.classList.remove('fa-pause');
      videoBtnPlay.classList.add('fa-play')
    } else {
      videoBtnPlay.classList.remove('fa-play');
      videoBtnPlay.classList.add('fa-pause')
    }
  }

  const stopPlay = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    toggleIcon();
  }
  videoPlayer.addEventListener('click', togglePlay);
  videoBtnPlay.addEventListener('click', togglePlay);
  videoBtnStop.addEventListener('click', stopPlay);
  videoPlayer.addEventListener('timeupdate', () => {
    const curretTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;


    let minutesPassed = Math.floor(curretTime / 60);
    let secondsPassed = Math.floor(curretTime % 60);
    let minutesTotal = Math.floor(duration / 60);
    let secondsTotal = Math.floor(duration % 60);

    videoProgress.value = (curretTime / duration) * 100;


    videoTimePassed.textContent = `${addZero(minutesPassed)}:${addZero(secondsPassed)}`
    videoTimeTotal.textContent = `${addZero(minutesTotal)}:${addZero(secondsTotal)}`
  });

  videoProgress.addEventListener('change', () => {
    const duration = videoPlayer.duration;
    const value = videoProgress.value;
    videoPlayer.currentTime = (value * duration) / 100;
  })

}