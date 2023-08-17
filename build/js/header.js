'use strict';

var _this = void 0;
// $(document).ready(() => {
//   $('.header__bottom-button > button').click(function (event) {
//     if (event.currentTarget.classList.value !== 'active') {
//       $('.header__bottom-button button').not($(this)).removeClass('active');
//       $(this).addClass('active');

//       $('.header__bottom-button-content').n
// ot($(this).siblings('.header__bottom-button-content')).slideUp(200);
//       $(this).siblings('.header__bottom-button-content').fadeIn(500);
//     } else {
//       $(this).removeClass('active');
//       $(this).next().fadeOut(250);
//     }
//   });

//   //----------------
//   $('.header__bottom-items button').click(function () {
//     $('.header__bottom-menu').fadeIn();
//     $('.header__bottom-items button').not($(this)).removeClass('active');
//     $(this).addClass('active');
//     $('.main-overlay').addClass('active');
//     $('.header').css('z-index', '10');
//   });

//   $('.header__bottom-menu-close').click(() => {
//     $('.header__bottom-menu').fadeOut();
//     $('.main-overlay').removeClass('active');
//     $('.header').css('z-index', '');
//     $('.header__bottom-items button').removeClass('active');
//   });

//   $('body').click((event) => {
//     if (event.target.classList.value === 'main-overlay active') {
//       $('.header__bottom-menu').fadeOut();
//       $('.main-overlay').removeClass('active');
//       $('.header__bottom-items button').removeClass('active');

//       $('.header__bottom-category').fadeOut();
//       $('.main-overlay').removeClass('active');
//       $('.header__bottom-btn').removeClass('active');
//       $('.header').css('z-index', '');
//     }
//   });

//   $('.header__menu-catalog-mob-title-btn').on('clcik', () => {});
//   //------------------

//   //-----------------
//   function renderCatalog() {
//     if (window.innerWidth >= 768) {
//       $('.header__bottom-category').fadeIn();
//       $('.header__menu-catalog-mob').removeClass('active');
//     } else {
//       $('.header__menu-catalog-mob').addClass('active');
//       $('.header__bottom-category').fadeOut();
//     }
//     $(this).addClass('active');
//     $('.main-overlay').addClass('active');
//     $('.header').css('z-index', '10');
//   }

//   $('.header__bottom-btn').click(() => {
//     renderCatalog();
//   });

//   $('.header__bottom-category-close').click(() => {
//     $('.header__bottom-category').fadeOut();
//     $('.main-overlay').removeClass('active');
//     $('.header__bottom-btn').removeClass('active');
//     $('.header').css('z-index', '');
//   });

//   $('.header__top-items-btns-btn-burger').click(function () {
//     $(document.body).toggleClass('hidden');
//     $(this).toggleClass('active');
//     $('.header__menu-mob').toggleClass('active');
//     $('.main-overlay').toggleClass('active');
//     $('.header').toggleClass('active');
//   });

//   $('.header__menu-catalog-mob-title-btn').click(() => {
//     $(document.body).toggleClass('hidden');
//     $('.header__bottom-btn ').toggleClass('active');
//     $('.header__menu-catalog-mob ').toggleClass('active');
//     $('.main-overlay').toggleClass('active');
//     $('.header').toggleClass('active');
//   });
// });

// if (window.innerWidth <= 768) {
//   $('.header__bottom-menu-items-item').each(function () {
//     const more = $(this).find('.header__bottom-menu-items-item-title');
//     const hide = $(this).find('.header__bottom-menu-items-item-list');
//     hide.hide();
//     more.click(() => {
//       hide.slideToggle();
//       more.toggleClass('active');
//     });
//   });
// }

$(document).ready(function () {
  // Клик на кнопки в меню выбора детелей
  $('.details-buttons button').click(function () {
    $('.details-content').fadeIn(500);
    $('.details-buttons button').not($(this)).removeClass('active');
    $(this).toggleClass('active');
    $('.main-overlay').addClass('active');
    $('.header').addClass('active');
    $('.catalog-desc-content').fadeOut(200);
    $('.catalog-open-desc').removeClass('active');
    $('.header__menu-mob').removeClass('active');
    $('.burger-open').removeClass('active');
    $('.panel-button-mob-content').fadeOut(200);
    $('.panel-button-mob button').removeClass('active');
  });

  // Клик на закрытие меню выбора деталей
  $('.close-details').click(function () {
    $('.details-content').fadeOut();
    $('.main-overlay').removeClass('active');
    $('.header').removeClass('active');
    $('.details-buttons button').removeClass('active');
  });

  // Клик на кнопку раскрытия категории
  $('.catalog-open-desc').click(function () {
    $('.catalog-desc-content').fadeIn(500);
    $(this).addClass('active');
    $('.main-overlay').addClass('active');
    $('.header').addClass('active');
    $('.catalog-desc-content').addClass('active');
    $('.details-content').fadeOut(200);
    $('.details-buttons button').removeClass('active');
  });

  // Клик на кнопку закрытия категории
  $('.header__bottom-category-close').click(function () {
    $('.catalog-desc-content').fadeToggle();
    $('.catalog-open-desc').toggleClass('active');
    $('.main-overlay').toggleClass('active');
    $('.header').toggleClass('active');
    $('.catalog-desc-content').removeClass('active');
  });

  // Клик на кнопки в панели меню
  $('.panel-button-desc > button').click(function (event) {
    if (event.currentTarget.classList.value !== 'active') {
      $('.panel-button-desc button').not($(this)).removeClass('active');
      $(this).addClass('active');
      $('.panel-button-desc-content').not($(this).siblings('.panel-button-desc-content')).fadeOut(200);
      $(this).siblings('.panel-button-desc-content').fadeIn(500);
    } else {
      $(this).removeClass('active');
      $(this).next().fadeOut(250);
    }
  });
  $('body').click(function (event) {
    if (event.target.classList.value === 'main-overlay active') {
      $('.catalog-desc-content').fadeOut(200);
      $('.catalog-open-desc').removeClass('active');
      $('.details-content').fadeOut(200);
      $('.details-buttons button').removeClass('active');
      $('.main-overlay').removeClass('active');
      $('.header').removeClass('active');
    }
  });

  // Мобильная версия
  // Бургер меню
  $('.burger-open').click(function () {
    $(document.body).toggleClass('hidden');
    $(this).toggleClass('active');
    $('.header__menu-mob').toggleClass('active');
    $('.main-overlay').toggleClass('active');
    $('.header').toggleClass('active');
  });

  // Открыть каталог в моб
  $('.catalog-open-mob').click(function () {
    $('.catalog-open-mob-content').addClass('active');
  });

  // Закрыть каталог в моб
  $('.catalog-close-mob').click(function () {
    $('.catalog-open-mob-content').removeClass('active');
  });

  // Кнопки нижней панели
  $('.panel-button-mob > button').click(function (event) {
    if (event.currentTarget.classList.value !== 'active') {
      $('.panel-button-mob button').not($(this)).removeClass('active');
      $(this).addClass('active');
      $('.panel-button-mob-content').not($(this).siblings('.panel-button-mob-content')).fadeOut(200);
      $(this).siblings('.panel-button-mob-content').fadeIn(500);
    } else {
      $(this).removeClass('active');
      $(this).next().fadeOut(200);
    }
    $('.details-content').fadeOut(200);
    $('.details-buttons button').removeClass('active');
    $('.main-overlay').removeClass('active');
    $('.header').removeClass('active');
  });
  if (window.innerWidth <= 768) {
    $('.header__bottom-menu-items-item').each(function () {
      var more = $(this).find('.header__bottom-menu-items-item-title');
      var hide = $(this).find('.header__bottom-menu-items-item-list');
      hide.hide();
      more.click(function () {
        hide.slideToggle();
        more.toggleClass('active');
      });
    });
  }
  $(window).resize(function () {
    if (window.innerWidth >= 768 && $('.header__menu-mob').hasClass('active')) {
      $(document.body).removeClass('hidden');
      $(_this).removeClass('active');
      $('.header__menu-mob').removeClass('active');
      $('.burger-open').removeClass('active');
      $('.main-overlay').removeClass('active');
      $('.header').removeClass('active');
    }
  });
});
