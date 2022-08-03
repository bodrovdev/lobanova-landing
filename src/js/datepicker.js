import { Datepicker } from 'vanillajs-datepicker';
import ru from 'vanillajs-datepicker/locales/ru';
Object.assign(Datepicker.locales, ru);

const elem = document.getElementById('appointment-modal-date');

const datepicker = new Datepicker(elem, {

  daysOfWeekDisabled: [1, 2, 3, 4, 5, 6],

  todayBtn: false,

  todayHighlight: false,

  weekStart: 1,

  language: 'ru',

  minDate: new Date(),

});

let dateInput = document.getElementById('appointment-date-input');

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

  dateInput.value = `${year}-${month}-${date}`;
});