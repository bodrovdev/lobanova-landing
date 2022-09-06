import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

//Открытие и закрытие модального окна в блоке appointment
let modal = document.getElementById('appointment-modal');
let modalOpen = document.getElementById('appointment-modal-open');
let modalClose = document.getElementById('appointment-modal-close');
let appointmentFormReset = document.getElementById('appointment-form-reset');

modalOpen.addEventListener('click', () => {
  modal.classList.add('appointment__modal--opened');
  disableBodyScroll(modal);
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('appointment__modal--opened');
  enableBodyScroll(modal);
})

modal.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    return;
  }
  else {
    modal.classList.remove('appointment__modal--opened');
    enableBodyScroll(modal);
  }
})

appointmentFormReset.addEventListener('click', () => {
  modal.classList.remove('appointment__modal--opened');
  enableBodyScroll(modal);
})

//Изменение цены заказа в модальном окне при переключении элементов типов заказа
let appointmentTypes = document.querySelectorAll('.appointment__hidden-type');
let appointmentPriceShown = document.getElementById('appointment-price');
let appointmentPriceInput = document.getElementById('appointment-price-result');

appointmentTypes.forEach((element) => {
  element.addEventListener('change', () => {
    appointmentPriceShown.textContent = element.value;
    appointmentPriceInput.value = element.value;
  })
})

//Отправка формы и переход на страницу оплаты
let appointmentForm = document.getElementById('appointment-form');

let appointmentFormSubmitShown = document.getElementById('appointment-form-pay');
let appointmentFormSubmit = document.getElementById('appointment-form-submit');
let appointmentPayFormSubmit = document.getElementById('appointment-pay-submit');

appointmentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log('Успех');
})

appointmentFormSubmitShown.addEventListener('click', () => {
  appointmentFormSubmit.click();

    setTimeout(appointmentPayFormSubmit.click(), 5000);
})

//Изменение данных в форме оплаты при смене параметров главной формы
let appointmentPayTarget = document.getElementById('appointment-pay-target');
let appointmentPaySum = document.getElementById('appointment-pay-sum');

appointmentTypes.forEach((element) => {
  element.addEventListener('change', () => {
    if (element.checked) {
      appointmentPayTarget.value = element.dataset.typename;
      appointmentPaySum.value = element.value;
    }
  })
})

//Открытие и закрытие модального окна с подтверждением после удачной оплаты
let successModal = document.getElementById('success');
let successModalClose = document.getElementById('appointment-success-close');

window.addEventListener('load', () => {
  if (window.location.hash === '#success') {
    successModal.classList.add('appointment__success-modal--opened');
    disableBodyScroll(successModal);
  };
})

successModalClose.addEventListener('click', () => {
  successModal.classList.remove('appointment__success-modal--opened');
  enableBodyScroll(successModal);
})

successModal.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    return;
  }
  else {
    successModal.classList.remove('appointment__success-modal--opened');
    enableBodyScroll(successModal);
  }
})

