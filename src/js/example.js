const promise = new Promise((resolve, reject) => {
  // resolve({ key: 'result' });
  resolve(null);
});

promise
  .then(response => {
    console.log('then 1', response);
    return Object.keys(response);
  })
  .catch(error => {
    // console.log('catch', error);
    return [];
  })
  .then(response => {
    console.log('then 2', response);
    return response.map(i => `Item ${i}`);
  })
  .catch(error => {
    console.log('catch', error);
  })
  .then(response => {
    console.log('then 3', response);
  });

Promise.resolve({ key: 'value' })
  .then(res => {
    console.log(res);
    return Object.keys(res);
  })
  .catch(err => console.log(err));

Promise.reject('Error')
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('finally'));

Promise.all([
  Promise.resolve({ key: 'value 1' }),
  Promise.reject('Error'),
  Promise.resolve({ key: 'value 2' }),
])
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

Promise.allSettled([
  Promise.resolve({ key: 'value 1' }),
  Promise.reject('Error'),
  Promise.resolve({ key: 'value 2' }),
])
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

const timeout = (delay, data) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });

// timeout(5000, { data: 'data 1' }).then(res => console.log(res))

const timeouts = Promise.all([
  timeout(300, { data: 'data 1' }),
  timeout(1000, { data: 'data 2' }),
  timeout(500, { data: 'data 3' }),
]);

timeouts.then(response => console.log(response));

const firstTimeout = Promise.race([
  timeout(3000, { data: 'data 1' }),
  timeout(1000, { data: 'data 2' }),
  timeout(500, { data: 'data 3' }),
  Promise.reject({ error: 'Error' }),
]);

firstTimeout.then(response => console.log(response)).catch(error => console.log(error));

const firstSuccessTimeout = Promise.any([
  timeout(3000, { data: 'data 1' }),
  timeout(1000, { data: 'data 2' }),
  timeout(500, { data: 'data 3' }),
  Promise.reject({ error: 'Error' }),
]);

firstSuccessTimeout.then(response => console.log(response)).catch(error => console.log(error));

const timout = () => {};

const executor = () => {};

const init = () => {
  handleEvents();
  render();
};

const handleEvents = () => {
  setTimeout(timout, 1000);
};

const render = () => {
  new Promise(executor);
  console.log();
};

init();

throw new Error('Other error');

const transform = string => {
  if (typeof string !== 'string') {
    throw new Error('String must be a stryng type');
  }
  return string.split('');
};

console.log(transform('lalal'));
console.log(transform({}));
