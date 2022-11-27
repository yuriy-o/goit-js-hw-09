const bodyEl = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const btnStartActive = document.querySelector('button[data-start].btn-active');
const btnStopActive = document.querySelector('button[data-stop].btn-active');
// const viewColorBgr = document.querySelector('.view-color-bgr'); //!

let timerId = null;

btnStart.addEventListener('click', clickOnStartButton);
btnStop.addEventListener('click', clickOnStopButton);
btnStartActive.addEventListener('mouseenter', newTextForStartButton);
btnStopActive.addEventListener('mouseenter', newTextForStopButton);

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function changeBgc(color) {
  bodyEl.style.backgroundColor = color;
}

function clickOnStartButton() {
  btnStart.disabled = true;
  btnStop.disabled = false;

  btnStart.classList.remove('btn-active');
  btnStop.classList.add('btn-active');

  timerId = setInterval(() => {
    changeBgc(getRandomHexColor());
  }, 1000);

  btnStart.removeEventListener('click', clickOnStartButton);
  btnStop.addEventListener('click', clickOnStopButton);

  btnStartActive.removeEventListener('mouseenter', newTextForStartButton);
  btnStopActive.addEventListener('mouseenter', newTextForStopButton);

  // btnStop.insertAdjacentHTML('afterend', showColor()); //!
}

function clickOnStopButton() {
  btnStop.disabled = true;
  btnStart.disabled = false;

  btnStop.classList.remove('btn-active');
  btnStart.classList.add('btn-active');

  clearInterval(timerId);

  btnStart.addEventListener('click', clickOnStartButton);
  btnStop.removeEventListener('click', clickOnStopButton);

  btnStopActive.removeEventListener('mouseenter', newTextForStopButton);
  btnStartActive.addEventListener('mouseenter', newTextForStartButton);

  // viewColorBgr.remove(); //!
}

// //!
// function showColor() {
//   return `<p class="view-color-bgr">Color: ${getRandomHexColor()}</p>`;
// }

function newTextForStartButton() {
  btnStartActive.textContent = 'Слава Україні!';
  btnStopActive.textContent = 'Stop';
}
function newTextForStopButton() {
  btnStopActive.textContent = 'Смерть москалям!';
  btnStartActive.textContent = 'Start';
}
