$(document).ready(() => {
  function createBrandsSwiper() {
    const brandsSwiper = new Swiper('#brands-swiper', {
      breakpoints: {
        300: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          observer: true,
          watchSlidesProgress: true,
          spaceBetween: 10,
          grid: {
            rows: 2,
          },
          pagination: {
            el: '.main-brands__bullets',
            clickable: true,
          },
        },
        769: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          observer: true,
          watchSlidesProgress: true,
          spaceBetween: 30,
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
        },
      },
    });
  }

  function createProductSliderAnalogues() {
    const productSliderAnalogues = new Swiper('#product__slider-3', {
      breakpoints: {
        300: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          watchSlidesProgress: true,
          spaceBetween: 10,
          grid: {
            rows: 2,
          },
          pagination: {
            el: '.product__analogues-top-bullets',
            clickable: true,
          },
        },
        769: {
          slidesPerView: 2,
          allowTouchMove: false,
          watchSlidesProgress: true,
          spaceBetween: 30,
          navigation: {
            nextEl: '.product__analogues-top-arrows-next',
            prevEl: '.product__analogues-top-arrows-prev',
          },
          pagination: {
            el: '.product__analogues-top-bullets',
            clickable: true,
          },
        },
      },
    });
  }

  function createCardsSwiper() {
    const cardsSwiper = new Swiper('#cards-swiper', {
      breakpoints: {
        300: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          watchSlidesProgress: true,
          spaceBetween: 10,
          grid: {
            rows: 2,
          },
          pagination: {
            el: '.basket__main-relevant__bullets',
            clickable: true,
          },
        },
        769: {
          slidesPerView: 6,
          allowTouchMove: false,
          watchSlidesProgress: true,
          spaceBetween: 10,
          navigation: {
            nextEl: '.cards__arrows-next',
            prevEl: '.cards__arrows-prev',
          },
          pagination: {
            el: '.basket__main-relevant__bullets',
            clickable: true,
          },
        },
      },
    });
  }

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

  const productTopSliderSeconds = new Swiper('.header__menu-mob-btns', {
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });

  document.querySelectorAll('.cards').forEach((cards) => {
    cards.querySelectorAll('.card__slider').forEach((content) => {
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
  });

  createProductSliderAnalogues();
  createCardsSwiper();
  createBrandsSwiper();

  $(window).resize(() => {
    createProductSliderAnalogues();
    createCardsSwiper();
    createBrandsSwiper();
  });
});
