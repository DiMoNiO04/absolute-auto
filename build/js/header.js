'use strict';

$(document).ready(function () {
  $('.header__bottom-button > button').click(function (event) {
    if (event.currentTarget.classList.value !== 'active') {
      $('.header__bottom-button button').not($(this)).removeClass('active');
      $(this).addClass('active');
      $('.header__bottom-button-content').not($(this).siblings('.header__bottom-button-content')).slideUp(200);
      $(this).siblings('.header__bottom-button-content').fadeIn(500);
    } else {
      $(this).removeClass('active');
      $(this).next().fadeOut(250);
    }
  });

  //----------------
  $('.header__bottom-items button').click(function () {
    $('.header__bottom-menu').fadeIn();
    $('.header__bottom-items button').not($(this)).removeClass('active');
    $(this).addClass('active');
    $('.main-overlay').addClass('active');
    $('.header').css('z-index', '10');
  });
  $('.header__bottom-menu-close').click(function () {
    $('.header__bottom-menu').fadeOut();
    $('.main-overlay').removeClass('active');
    $('.header').css('z-index', '');
    $('.header__bottom-items button').removeClass('active');
  });
  $('body').click(function (event) {
    if (event.target.classList.value === 'main-overlay active') {
      $('.header__bottom-menu').fadeOut();
      $('.main-overlay').removeClass('active');
      $('.header__bottom-items button').removeClass('active');
      $('.header__bottom-category').fadeOut();
      $('.main-overlay').removeClass('active');
      $('.header__bottom-btn').removeClass('active');
      $('.header').css('z-index', '');
    }
  });
  $('.header__menu-catalog-mob-title-btn').on('clcik', function () {});
  //------------------

  //-----------------
  function renderCatalog() {
    if (window.innerWidth >= 768) {
      $('.header__bottom-category').fadeIn();
      $('.header__menu-catalog-mob').removeClass('active');
    } else {
      $('.header__menu-catalog-mob').addClass('active');
      $('.header__bottom-category').fadeOut();
    }
    $(this).addClass('active');
    $('.main-overlay').addClass('active');
    $('.header').css('z-index', '10');
  }
  $('.header__bottom-btn').click(function () {
    renderCatalog();
  });
  $('.header__bottom-category-close').click(function () {
    $('.header__bottom-category').fadeOut();
    $('.main-overlay').removeClass('active');
    $('.header__bottom-btn').removeClass('active');
    $('.header').css('z-index', '');
  });
  $('.header__menu-mob-item').each(function () {
    var more = $(this).find('.header__menu-mob-item-inner');
    var hide = $(this).find('.header__menu-mob-item-content');
    hide.hide();
    more.click(function () {
      hide.slideToggle();
      more.toggleClass('active');
    });
  });
  $('.header__top-items-btns-btn-burger').click(function () {
    $(document.body).toggleClass('hidden');
    $(this).toggleClass('active');
    $('.header__menu-mob').toggleClass('active');
    $('.main-overlay').toggleClass('active');
    $('.header').toggleClass('active');
  });
  $('.header__menu-catalog-mob-title-btn').click(function () {
    $(document.body).toggleClass('hidden');
    $('.header__bottom-btn ').toggleClass('active');
    $('.header__menu-catalog-mob ').toggleClass('active');
    $('.main-overlay').toggleClass('active');
    $('.header').toggleClass('active');
  });
});
