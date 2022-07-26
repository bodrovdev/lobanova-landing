let burger = document.getElementById('burger');
let navigation = document.getElementById('main-nav');
let headLinks = document.getElementById('head-links');

burger.addEventListener('click', () => {
  navigation.classList.toggle('main-nav--opened');

  burger.classList.toggle('headline__burger--opened');

  headLinks.classList.toggle('headline__link-block--opened')
})

let uploadInput = document.getElementById('upload-input');
let uploadButton = document.getElementById('upload-button');

uploadButton.addEventListener('click', () => {
  uploadInput.click();
})