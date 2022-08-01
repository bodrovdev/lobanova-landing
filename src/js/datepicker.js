import { Datepicker } from 'vanillajs-datepicker';

import ru from 'vanillajs-datepicker/locales/ru';
Object.assign(Datepicker.locales, ru);


const elem = document.getElementById('appointment-modal-date');

const datepicker = new Datepicker(elem, {

  daysOfWeekDisabled: [1, 2, 3, 4, 5, 6],

  todayBtn: false,

  todayHighlight: false,

  todayBtnMode: 1,

  weekStart: 1,

  language: 'ru',

}); 