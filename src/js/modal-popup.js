let resultPrice = document.getElementById('appointment-pricetag-result');
let allPrices = document.querySelectorAll('.appointment__hidden-type');

let modalOpen = document.getElementById('appointment-modal-open');
let modalClose = document.getElementById('appointment-modal-close');
let modalPopup = document.getElementById('appointment-modal-popup');
let modalSubmit = document.getElementById('appointment-form-submit');
let modalReset = document.getElementById('appointment-form-reset');

allPrices.forEach((element) => {
  element.addEventListener('change', () => {
    resultPrice.textContent = element.value;
  })
})

modalOpen.addEventListener('click', () => {
  modalPopup.classList.toggle('appointment__modal--opened');
})

modalClose.addEventListener('click', () => {
  modalPopup.classList.remove('appointment__modal--opened');
})

modalSubmit.addEventListener('click', () => {
  modalPopup.classList.remove('appointment__modal--opened');
})

modalReset.addEventListener('click', () => {
  modalPopup.classList.remove('appointment__modal--opened');
})