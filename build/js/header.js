'use strict';

$('.menu-aside-mob-btn').click(function () {
  $('.menu-aside-mob').addClass('active');
});
$('.menu-aside-mob-title__btn').click(function () {
  $('.menu-aside-mob').removeClass('active');
});
$('.menu-aside-mob li').click(function () {
  $('.menu-aside-mob').removeClass('active');
  $('.menu-aside-mob-btn .menu-aside-mob__btn-name').text($(this).text());
});
$('.header__bottom-button > button').click(function (event) {
  if (event.currentTarget.classList.value !== 'active') {
    $('.header__bottom-button button').not($(this)).removeClass('active');
    $(this).addClass('active');
    $('.header__bottom-button-content').not($(this).siblings('.header__bottom-button-content')).slideUp(200);
    $(this).siblings('.header__bottom-button-content').slideDown(500);
  } else {
    $(this).removeClass('active');
    $(this).next().slideUp(250);
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
//------------------

//-----------------
$('.header__bottom-btn').click(function () {
  $('.header__bottom-category').fadeIn();
  $(this).addClass('active');
  $('.main-overlay').addClass('active');
  $('.header').css('z-index', '10');
});
$('.header__bottom-category-close').click(function () {
  $('.header__bottom-category').fadeOut();
  $('.main-overlay').removeClass('active');
  $('.header__bottom-btn').removeClass('active');
  $('.header').css('z-index', '');
});
