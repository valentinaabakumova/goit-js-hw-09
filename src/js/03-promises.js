const form = document.querySelector('.form');
const delay = document.querySelector('[name=delay]');
const step = document.querySelector('[name=step]');
const amount = document.querySelector('[name=amount]');
let position = 0;
let timer = 'null';
form.addEventListener('submit', onFormSubmit);
let s = step.value;
function onFormSubmit(e) {
  e.preventDefault();

  const firsrTimer = setTimeout(() => {
    for (let i = 0; i < amount.value; i += 1) {
      position = i;
      createPromise(position, s)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay} ms`);
        });
      s += step.value;
    }
  }, delay.value);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
