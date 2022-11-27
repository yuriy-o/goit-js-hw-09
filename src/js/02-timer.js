import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.btn.addEventListener('click', timer);

const dateNow = Date.now();

const selectDate = flatpickr(refs.input, {
  enableTime: true,
  enableSeconds: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() - dateNow > 0) {
      refs.btn.disabled = false;
    } else if (selectedDates[0].getTime() - dateNow < 0) {
      refs.btn.disabled = true;

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

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
  },
});

function timer() {
  refs.btn.disabled = true;
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

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
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
