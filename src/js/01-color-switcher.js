const bodyElement = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let myInterval = 'null';

// startBtn.style.backgroundColor = 'blue';

stopBtn.disabled = true;

stopBtn.style.width = '70px';
stopBtn.style.height = '40px';
stopBtn.style.textTransform = 'uppercase';

startBtn.style.width = '70px';
startBtn.style.height = '40px';
startBtn.style.textTransform = 'uppercase';

startBtn.style.marginRight = '10px';

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
