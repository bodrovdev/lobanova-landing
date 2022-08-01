import IMask from 'imask';

let element = document.getElementById('appointment-phone');
let maskOptions = {
  mask: '+{7} (000) 000-00-00',
};

let mask = IMask(element, maskOptions);