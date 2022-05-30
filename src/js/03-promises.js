const form = document.querySelector('.form');
const delay = document.querySelector('[name=delay]');
const step = document.querySelector('[name=step]');
const amount = document.querySelector('[name=amount]');
let position = 0;
let timer = 'null';

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  console.log('sub');
  console.log(delay.value);
  console.log(step.value);
  console.log(amount.value);
  console.log(position);

  createPromise(position, step.value);
}
////////////////////////////////////////////

const makePromise = (position, delay) => {
  return new Promise(resolve => {
    timer = setTimeout(() => resolve(position), delay.value);
  });
};

const promiseA = makePromise('promiseA value', 1000);
const promiseB = makePromise('promiseB value', 3000);

Promise.all([promiseA, promiseB])
  .then(value => console.log(value)) //["promiseA value", "promiseB value"]
  .catch(error => console.log(error));

////////////////////////////////////

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    timer = setTimeout(() => resolve(position), delay.value);
    resolve('Success! Value passed to resolve function');
  } else {
    // Reject
    reject('Error! Error passed to reject function');
  }

  position += 1;
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
