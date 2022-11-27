import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const inputDelayEl = document.querySelector('input[name="delay"]');
const inputStepEl = document.querySelector('input[name="step"]');
const inputAmountEl = document.querySelector('input[name="amount"]');

formEl.addEventListener('submit', createPromise);

function createPromise(position, delay) {
  position.preventDefault();
  const inputDelay = Number(inputDelayEl.value);
  const step = Number(inputStepEl.value);
  const amount = inputAmountEl.value;
  console.log(`'inputDelay': ${inputDelay}, 'step': ${step}`);

  for (let i = 0; i < amount; i += 1) {
    console.log(`'amount': ${amount}, 'i': ${i}`);

    const sumDelay = inputDelay + i * step;

    const promise = new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
          resolve(
            Notiflix.Notify.success(
              `✅ Fulfilled promise ${i + 1} in ${sumDelay}ms`
            )
          );
        } else {
          reject(
            Notiflix.Notify.failure(
              `❌ Rejected promise ${i + 1} in ${sumDelay}ms`
            )
          );
        }
      }, sumDelay);
    });
  }
}

//??
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
