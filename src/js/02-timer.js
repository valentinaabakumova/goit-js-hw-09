import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
let myTimer = 'null';
let CHOSEN_DATE = '';
let CURRENT_DATE = new Date();
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

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
      CHOSEN_DATE = selectedDates[0];
      return CHOSEN_DATE;
    }
  },
};

flatpickr('#datetime-picker', options);

function startTimer(CHOSEN_DATE) {
  console.log('timer starts');
  console.log('here..', CHOSEN_DATE);
  //   let n = flatpickr.parseDate(selectedDates[0], 'Y-m-d h:i K');
  //   console.log('date: ', n);
  // console.log(selectedDates[0].getDay());
  days.textContent = '';

  myTimer = setInterval(() => {
    console.log(`I love async JS!  ${Math.random()}`);
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
