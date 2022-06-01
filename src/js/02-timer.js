import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
let myTimer = 'null';
let CHOSEN_DATE;
let CURRENT_DATE = new Date();
const daysMy = document.querySelector('[data-days]');
const hoursMy = document.querySelector('[data-hours]');
const minutesMy = document.querySelector('[data-minutes]');
const secondsMy = document.querySelector('[data-seconds]');

startBtn.addEventListener('click', startTimer);

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < CURRENT_DATE) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      console.log('you chose: ', selectedDates[0]);
      //   const date = new Date(selectedDates[0]);
      //   console.log('date', date.getTime());
      //   CHOSEN_DATE = selectedDates[0].getTime();

      CHOSEN_DATE = selectedDates[0];
      console.log('you choses date: ', CHOSEN_DATE);

      //   return selectedDates[0];
    }
  },
};

flatpickr('#datetime-picker', options);

function startTimer(CHOSEN_DATE) {
  console.log('timer starts');
  console.log('here..', CHOSEN_DATE);

  myTimer = setInterval(() => {
    // console.log(`I love async JS!  ${Math.random()}`);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  //padStart()
}

////////////////////////////////

const timer = targetDate => {
  setInterval(() => {
    const delta = new Date(targetDate) - new Date();
    // console.log('CHOSEN_DATE', targetDate);
    // console.log('new Date', new Date());
    // console.log('delta', delta);

    renderTimer(delta);
  }, 1000);
};

timer(new Date('2022 / 06 / 02'));
console.log('h', new Date('2022 / 06 / 02'));
// timer(new Date(CHOSEN_DATE));

const renderTimer = string => {
  //   console.log('string', string);
  let { days, hours, minutes, seconds } = convertMs(string);
  daysMy.textContent = days;
  minutesMy.textContent = minutes;
  hoursMy.textContent = hours;
  secondsMy.textContent = seconds;
  //   console.log(convertMs(string));
};
