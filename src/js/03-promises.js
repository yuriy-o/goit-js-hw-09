import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
  inputButton: document.querySelector('button[type="submit"]'),
};

refs.form.addEventListener('submit', createPromise);

function createPromise(position, delay) {
  position.preventDefault();

  const delayValue = Number(refs.inputDelay.value);
  const stepValue = Number(refs.inputStep.value);
  const amount = refs.inputAmount.value;
  console.log(`'delayValue': ${delayValue}, 'stepValue': ${stepValue}`);

  for (let i = 0; i < amount; i += 1) {
    console.log(`'amount': ${amount}, 'i': ${i}`);

    const sumDelay = delayValue + i * stepValue;

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
