let burger = document.getElementById('burger');
let navigation = document.getElementById('main-nav');
let navigationLinks = document.querySelectorAll('.main-nav__list-item');

burger.addEventListener('click', () => {
  navigation.classList.toggle('main-nav--opened');
  burger.classList.toggle('headline__burger--opened');
});

navigationLinks.forEach((element) => {
  element.addEventListener('click', () => {
    navigation.classList.remove('main-nav--opened');
    burger.classList.remove('headline__burger--opened');
  });
});

let test = document.querySelectorAll('.about__tabs-button');

console.log(test);
