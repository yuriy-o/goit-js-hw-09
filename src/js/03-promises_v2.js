import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(e) {
  e.preventDefault();

  //! чому посилання працюють без elements?? Як краще використовувати??
  let delay = Number(e.currentTarget.elements.delay.value);
  const step = Number(e.currentTarget.elements.step.value);
  const amount = Number(e.currentTarget.elements.amount.value);

  for (let position = 0; position < amount; position += 1) {
    createPromise(position, delay).then(resolveMessage).catch(rejectMessage);

    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function resolveMessage({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
  console.log(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
}

function rejectMessage({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`);
  console.log(`❌ Rejected promise ${position + 1} in ${delay}ms`);
}
