import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

let modal = document.getElementById('appointment-modal');
let modalOpen = document.getElementById('appointment-modal-open');
let modalClose = document.getElementById('appointment-modal-close');

modalOpen.addEventListener('click', () => {
  modal.classList.add('appointment__modal--opened');
  disableBodyScroll(modal);
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('appointment__modal--opened');
  enableBodyScroll(modal);
})

let appointmentTypes = document.querySelectorAll('.appointment__hidden-type');
let appointmentPriceShown = document.getElementById('appointment-price');
let appointmentPriceInput = document.getElementById('appointment-price-result');

appointmentTypes.forEach((element) => {
  element.addEventListener('change', () => {
    appointmentPriceShown.textContent = element.value;
    appointmentPriceInput.value = element.value;
  })
})