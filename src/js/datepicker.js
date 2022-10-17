import { Datepicker } from 'vanillajs-datepicker';
import ru from 'vanillajs-datepicker/locales/ru';
Object.assign(Datepicker.locales, ru);

const elem = document.getElementById('appointment-modal-date');

const datepicker = new Datepicker(elem, {

  daysOfWeekDisabled: [2, 3, 4, 5, 6],

  todayBtn: false,

  todayHighlight: false,

  weekStart: 1,

  language: 'ru',

  minDate: new Date(),

});

let dateInput = document.getElementById('appointment-date-input');

let mondayTimes = document.getElementById('monday-times');
let sundayTimes = document.getElementById('sunday-times');

elem.addEventListener('changeDate', function (evt) {
  let year = evt.detail.date.getFullYear();

  let month = evt.detail.date.getMonth() + 1;
  if (month < 10) {
    month = `0` + month;
  }

  let date = evt.detail.date.getDate();
  if (date < 10) {
    date = `0` + date;
  }

  let day = evt.detail.date.getDay();

  if (day === 0) {
    sundayTimes.classList.remove('appointment__modal-time--disabled');
    mondayTimes.classList.contains('appointment__modal-time--disabled') ? mondayTimes : mondayTimes.classList.add('appointment__modal-time--disabled');
  }

  else if (day === 1) {
    mondayTimes.classList.remove('appointment__modal-time--disabled');
    sundayTimes.classList.contains('appointment__modal-time--disabled') ? sundayTimes : sundayTimes.classList.add('appointment__modal-time--disabled');
  }

  dateInput.value = `${year}-${month}-${date}`;
  console.log(dateInput.value);
});

let timeAll = document.querySelectorAll('.appointment__time-hidden');
let timeInput = document.getElementById('appointment-time-input');

timeAll.forEach((child) => {
  child.addEventListener('change', (event) => {
    timeInput = event.target.value;
    console.log(timeInput);
  })
})