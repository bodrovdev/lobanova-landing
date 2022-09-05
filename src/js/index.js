import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

let burger = document.getElementById('burger');
let navigation = document.getElementById('main-nav');
let navigationLinks = document.querySelectorAll('.main-nav__link');

burger.addEventListener('click', () => {
  navigation.classList.toggle('main-nav--opened');
  burger.classList.toggle('headline__burger--opened');
});

burger.addEventListener('click', () => {
  if (burger.classList.contains('headline__burger--opened')) {
    disableBodyScroll(navigation);
  }
  else {
    enableBodyScroll(navigation);
  }
})

navigationLinks.forEach((element) => {
  element.addEventListener('click', () => {
    navigation.classList.remove('main-nav--opened');
    burger.classList.remove('headline__burger--opened');
    enableBodyScroll(navigation);
  });
});

let spoilers = document.querySelectorAll('.faq__check-hidden');

spoilers.forEach((element) => {
  element.addEventListener('click', (e) => {
    for(let i = 0; i < spoilers.length; i++) {
      if (spoilers[i] !== e.target) {
        spoilers[i].checked = false;
      }
    }
  })
})