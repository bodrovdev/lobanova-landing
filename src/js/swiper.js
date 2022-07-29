import Swiper from 'swiper/bundle';

//Слайдер из блока about
const about_swiper = new Swiper('.about__info-slider', {

  direction: 'horizontal',

  loop: true,

  spaceBetween: 50,

  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: '.about__slider-right',
    prevEl: '.about__slider-left',
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

  // autoplay: {
  //   delay: 10000,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
});