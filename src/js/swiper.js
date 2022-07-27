import Swiper from 'swiper/bundle';

//Слайдер из блока about
const about_swiper = new Swiper('.about__slider', {

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


//Слайдер из блока diplomas
const diplomas_swiper = new Swiper('.diplomas__slider', {

  direction: 'horizontal',

  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

//Слайдер из блока reviews
const reviews_swiper = new Swiper('.reviews__slider', {

  direction: 'horizontal',

  loop: true,

  spaceBetween: 150,

  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});