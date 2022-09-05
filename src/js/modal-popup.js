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

//Изменение модального окна при отправке формы
let appointmentForm = document.getElementById('appointment-form');

let appointmentPayButton = document.getElementById('appointment-form-pay');
let appointmentFormSubmit = document.getElementById('appointment-form-submit');

let appointmentModalMain = document.getElementById('appointment-modal-main');
let appointmentModalSuccess = document.getElementById('appointment-modal-success');

appointmentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  appointmentModalMain.classList.add('appointment__modal-main--disabled');
  appointmentModalSuccess.classList.add('appointment__modal-success--active');
})

appointmentPayButton.addEventListener('click', () => {
  appointmentFormSubmit.click();
})

//Скрытие и показ необходимой кнопки оплаты после отправки формы
let appointmentMoneyButtons = document.querySelectorAll('.appointment__money-button');

let appointmentModalFirstTime = document.getElementById('appointment-pay-4000');
let appointmentModalSecondTime = document.getElementById('appointment-pay-3000');
let appointmentModalEnglish = document.getElementById('appointment-pay-6000');

appointmentTypes.forEach((element) => {
  element.addEventListener('change', () => {
    appointmentMoneyButtons.forEach((item) => {
      item.classList.remove('appointment__money-button--active')
    })

    if (element.value === '4000') {
      appointmentModalFirstTime.classList.add('appointment__money-button--active');
    }
    else if (element.value === '3000') {
      appointmentModalSecondTime.classList.add('appointment__money-button--active');
    }
    else if (element.value === '6000') {
      appointmentModalEnglish.classList.add('appointment__money-button--active');
    }
  })
})



