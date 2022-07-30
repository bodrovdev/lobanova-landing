let burger = document.getElementById('burger');
let navigation = document.getElementById('main-nav');

burger.addEventListener('click', () => {
  navigation.classList.toggle('main-nav--opened');
  burger.classList.toggle('headline__burger--opened');
})