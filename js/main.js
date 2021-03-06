const flowersSlider = new Swiper('.flowers-slider', {
  // Optional parameters
  slidesPerView: 6,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});