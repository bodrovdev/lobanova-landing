import Swiper from 'swiper/bundle';

//Слайдер из блока about
const swiper = new Swiper('.about__slider', {

  direction: 'horizontal',

  loop: true,

  spaceBetween: 50,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: '.about__item-arrow--right',
    prevEl: '.about__item-arrow--left',
  },
});