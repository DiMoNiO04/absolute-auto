"use strict";

$(document).ready(function () {
  function createBrandsSwiper() {
    var brandsSwiper = new Swiper('#brands-swiper', {
      breakpoints: {
        300: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          watchSlidesProgress: true,
          grid: {
            rows: 2
          },
          pagination: {
            el: '.main-brands__bullets',
            clickable: true
          }
        },
        768: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          watchSlidesProgress: true,
          grid: {
            rows: 2
          },
          navigation: {
            nextEl: '.main-brands__arrows-next',
            prevEl: '.main-brands__arrows-prev'
          },
          pagination: {
            el: '.main-brands__bullets',
            clickable: true
          }
        }
      }
    });
  }
  function createProductSliderAnalogues() {
    var productSliderAnalogues = new Swiper('#product__slider-3', {
      breakpoints: {
        300: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          watchSlidesProgress: true,
          grid: {
            rows: 2
          },
          pagination: {
            el: '.product__analogues-top-bullets',
            clickable: true
          }
        },
        769: {
          slidesPerView: 2,
          spaceBetween: 20,
          watchSlidesProgress: true,
          navigation: {
            nextEl: '.product__analogues-top-arrows-next',
            prevEl: '.product__analogues-top-arrows-prev'
          },
          pagination: {
            el: '.product__analogues-top-bullets',
            clickable: true
          }
        }
      }
    });
  }
  function createCardsSwiper() {
    var cardsSwiper = new Swiper('#cards-swiper', {
      breakpoints: {
        300: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          watchSlidesProgress: true,
          grid: {
            rows: 2
          },
          pagination: {
            el: '.basket__main-relevant__bullets',
            clickable: true
          }
        },
        769: {
          slidesPerView: 6,
          spaceBetween: 20,
          allowTouchMove: false,
          watchSlidesProgress: true,
          navigation: {
            nextEl: '.cards__arrows-next',
            prevEl: '.cards__arrows-prev'
          },
          pagination: {
            el: '.basket__main-relevant__bullets',
            clickable: true
          }
        }
      }
    });
  }
  var productTopSliderFirst = new Swiper('.product__slider-1', {
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true
  });
  var productTopSliderSecond = new Swiper('.product__slider-2', {
    spaceBetween: 30,
    thumbs: {
      swiper: productTopSliderFirst
    }
  });
  var productTopSliderSeconds = new Swiper('.header__menu-mob-btns', {
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true
  });
  document.querySelectorAll('.cards').forEach(function (cards) {
    cards.querySelectorAll('.card__slider').forEach(function (content) {
      var slider = content.querySelector('.card__swiper');
      var pagination = content.querySelector('.card__bullets');
      var cardSwiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 20,
        allowTouchMove: true,
        pagination: {
          el: pagination,
          clickable: true
        }
      });
    });
  });
  createProductSliderAnalogues();
  createCardsSwiper();
  createBrandsSwiper();
  $(window).resize(function () {
    createProductSliderAnalogues();
    createCardsSwiper();
    createBrandsSwiper();
  });
});