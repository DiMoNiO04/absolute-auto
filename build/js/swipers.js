const brandsSwiper = new Swiper('#brands-swiper', {
  slidesPerView: 6,
  slidesPerColumn: 2,
  grid: {
    rows: 2,
  },
  navigation: {
    nextEl: '.main-brands__arrows-next',
    prevEl: '.main-brands__arrows-prev',
  },
  pagination: {
    el: '.main-brands__bullets',
    clickable: true,
  },
});

const cardsSwiper = new Swiper('#cards-swiper', {
  slidesPerView: 6,
  spaceBetween: 20,
  allowTouchMove: false,
  navigation: {
    nextEl: '.cards__arrows-next',
    prevEl: '.cards__arrows-prev',
  },
  pagination: {
    el: '.basket__main-relevant__bullets',
    clickable: true,
  },
});

document.querySelectorAll('.card__slider').forEach((content) => {
  const slider = content.querySelector('.card__swiper');
  const pagination = content.querySelector('.card__bullets');

  const cardSwiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 20,
    allowTouchMove: true,
    pagination: {
      el: pagination,
      clickable: true,
    },
  });
});

const productTopSliderFirst = new Swiper('.product__slider-1', {
  spaceBetween: 30,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});

const productTopSliderSecond = new Swiper('.product__slider-2', {
  spaceBetween: 30,
  thumbs: {
    swiper: productTopSliderFirst,
  },
});

const productSliderAnalogues = new Swiper('#product__slider-3', {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.product__analogues-top-arrows-next',
    prevEl: '.product__analogues-top-arrows-prev',
  },
});
