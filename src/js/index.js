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

let spoilerItems = document.querySelectorAll('.faq__check-hidden');

let whatsupBalls = document.querySelectorAll('.whatsup-ball')
let telephoneBalls = document.querySelectorAll('.phone-ball')

// whatsupBalls.forEach((element) => {
//   window.addEventListener('mousemove', (e) => {
//     let x = e.clientX / window.innerWidth;
//     let y = e.clientY / window.innerHeight;
//     element.style.transform = 'translate(-' + x * 5 + 'px, -' + y * 5 + 'px)';
//   });
// })

