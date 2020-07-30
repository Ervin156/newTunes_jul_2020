const radio = document.querySelector('.radio');
const radioCoverImg = document.querySelector('.radio-cover__img');
const radioMainHeader = document.querySelector('.radio-header__big');
// const radioHeader = document.querySelector('.radio-header');
const radioNavigation = document.querySelector('.radio-navigation');
const radioItem = document.querySelectorAll('.radio-item');
const radioStop = document.querySelector('.radio-stop');
export const radioPlayerInit = () => {

  const audio = new Audio();
  audio.type = 'audio/aac';
  const toggleIconPlay = () => {
    if (audio.paused) {
      radio.classList.remove('play');
      radioStop.classList.add('fa-play');
      radioStop.classList.remove('fa-stop');
    } else {
      radio.classList.add('play');
      radioStop.classList.remove('fa-play');
      radioStop.classList.add('fa-stop');
    }
  }
  radioStop.disabled = true;

  const toggleSelectActiveRadiostantion = currentElement => {
    radioItem.forEach(item => item.classList.remove('select'))
    currentElement.classList.add('select');


  }
  radioNavigation.addEventListener('change', e => {
    const target = e.target;
    const parrent = target.closest('.radio-item');
    const title = parrent.querySelector('.radio-name').textContent;
    const currentRadiostantionImg = parrent.querySelector('.radio-img').src;

    console.log('title: ', title);
    radioMainHeader.textContent = title;
    radioCoverImg.src = currentRadiostantionImg;

    audio.src = target.dataset.radioStantion;
    audio.play();
    radioStop.disabled = false;
    toggleIconPlay();
    toggleSelectActiveRadiostantion(parrent);


  });
  radioStop.addEventListener('click', () => {
    audio.paused ? audio.play() : audio.pause();
    toggleIconPlay();
  })
}