import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputEL = document.querySelector('#datetime-picker');
const btnEL = document.querySelector('button[data-start]');
const daysEL = document.querySelector('span[data-days]');
const hoursEL = document.querySelector('span[data-hours]');
const minutesEL = document.querySelector('span[data-minutes]');
const secondsEL = document.querySelector('span[data-seconds]');

btnEL.addEventListener('click', timer);

const dateNow = Date.now();

const selectDate = flatpickr(inputEL, {
  enableTime: true,
  enableSeconds: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() - dateNow > 0) {
      btnEL.disabled = false;
    } else if (selectedDates[0].getTime() - dateNow < 0) {
      btnEL.disabled = true;

      Notiflix.Report.failure(
        'Ми теж хочемо стрибнути в минуле...',
        'Але маємо що маємо, та мочимо русню сьогодні, завтра, завжди!',
        'птн пнх'
      );

      return;
    }

    const deltaTime = selectedDates[0].getTime() - dateNow;
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    // console.log(`${days}:${hours}:${minutes}:${seconds}`);

    daysEL.textContent = days;
    hoursEL.textContent = hours;
    minutesEL.textContent = minutes;
    secondsEL.textContent = seconds;
  },
});

function timer() {
  btnEL.disabled = true;
  const dateFuture = selectDate.selectedDates[0].getTime();

  const timerId = setInterval(() => {
    const dateNow = Date.now();
    const deltaTime = dateFuture - dateNow;
    console.log('deltaTime', deltaTime);

    if (deltaTime < 0) {
      Notiflix.Report.success(
        'Aкція на Байрактари закінчилась!',
        'Чекаємо на вас завтра — буде акція на HIMARS M142. Приходьте з друзями ;)',
        'Слава Україні!'
      );

      clearInterval(timerId);
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(deltaTime);

    daysEL.textContent = days;
    hoursEL.textContent = hours;
    minutesEL.textContent = minutes;
    secondsEL.textContent = seconds;
  }, 1000);
}

function pad(value) {
  return String(value).padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
