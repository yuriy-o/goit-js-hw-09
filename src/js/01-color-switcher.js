const refs = {
  bodyEl: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  btnStartActive: document.querySelector('button[data-start].btn-active'),
  btnStopActive: document.querySelector('button[data-stop].btn-active'),
};
// const viewColorBgr = document.querySelector('.view-color-bgr'); //!

let timerId = null;

refs.btnStart.addEventListener('click', clickOnStartButton);
refs.btnStop.addEventListener('click', clickOnStopButton);
refs.btnStartActive.addEventListener('mouseenter', newTextForStartButton);
refs.btnStopActive.addEventListener('mouseenter', newTextForStopButton);

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function changeBgc(color) {
  refs.bodyEl.style.backgroundColor = color;
}

function clickOnStartButton() {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;

  refs.btnStart.classList.remove('btn-active');
  refs.btnStop.classList.add('btn-active');

  timerId = setInterval(() => {
    changeBgc(getRandomHexColor());
  }, 1000);

  refs.btnStart.removeEventListener('click', clickOnStartButton);
  refs.btnStop.addEventListener('click', clickOnStopButton);

  refs.btnStartActive.removeEventListener('mouseenter', newTextForStartButton);
  refs.btnStopActive.addEventListener('mouseenter', newTextForStopButton);

  // btnStop.insertAdjacentHTML('afterend', showColor()); //!
}

function clickOnStopButton() {
  refs.btnStop.disabled = true;
  refs.btnStart.disabled = false;

  refs.btnStop.classList.remove('btn-active');
  refs.btnStart.classList.add('btn-active');

  clearInterval(timerId);

  refs.btnStart.addEventListener('click', clickOnStartButton);
  refs.btnStop.removeEventListener('click', clickOnStopButton);

  refs.btnStopActive.removeEventListener('mouseenter', newTextForStopButton);
  refs.btnStartActive.addEventListener('mouseenter', newTextForStartButton);

  // viewColorBgr.remove(); //!
}

// //!
// function showColor() {
//   return `<p class="view-color-bgr">Color: ${getRandomHexColor()}</p>`;
// }

function newTextForStartButton() {
  refs.btnStartActive.textContent = 'Слава Україні!';
  refs.btnStopActive.textContent = 'Stop';
}
function newTextForStopButton() {
  refs.btnStopActive.textContent = 'Смерть москалям!';
  refs.btnStartActive.textContent = 'Start';
}
