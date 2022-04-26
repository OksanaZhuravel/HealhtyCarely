import Swiper from 'swiper/bundle';

export function isSwaper() {
  new Swiper('.slader', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  });
}
