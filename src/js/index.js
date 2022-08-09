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

var more = $('.faq__check-hidden');

more.click(function() {
  //$(this).toggle(); //скрыть кнопку подробнее
  $(".faq__spoilers-item .faq__spoilers-content", this.parentNode).toggle('faq__spoilers-content--opened');
  
  //more.toggleClass('more__none');
  //$("ul li:nth-child(n + 5)", this.parentNode).toggleClass('li_on');
});
