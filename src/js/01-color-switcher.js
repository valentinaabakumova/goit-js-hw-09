const bodyElement = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let myInterval = 'null';

// startBtn.style.backgroundColor = 'blue';

stopBtn.disabled = true;

const startClick = () => {
  myInterval = setInterval(() => {
    console.log('start');
    bodyElement.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
};

const stopClick = () => {
  clearInterval(myInterval);
  console.log('ciao');
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

startBtn.addEventListener('click', startClick);
stopBtn.addEventListener('click', stopClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
