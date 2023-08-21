"use strict";

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
    $(document.body).toggleClass('hidden');
    $('.header').removeClass('active');
    $('.details-buttons button').removeClass('active');
  });

  // Клик на кнопку раскрытия категории
  $('.catalog-open-desc').click(function () {
    $(document.body).toggleClass('hidden');
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
    $(document.body).toggleClass('hidden');
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
      $(document.body).removeClass('hidden');
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
    $('.details-content').fadeOut();
    $('.details-buttons button').removeClass('active');
    $('.main-overlay').removeClass('active');
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

  // $(window).resize(() => {
  //   if (window.innerWidth >= 768 && $('.header__menu-mob').hasClass('active')) {
  //     $(document.body).removeClass('hidden');
  //     $(this).removeClass('active');
  //     $('.header__menu-mob').removeClass('active');
  //     $('.burger-open').removeClass('active');
  //     $('.main-overlay').removeClass('active');
  //     $('.header').removeClass('active');
  //   }
  // });
});