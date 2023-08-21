"use strict";

///-------------------
$('.select-sort__close').on('click', function () {
  $('.select-sort').removeClass('active');
});
$('.select-sort__head').on('click', function () {
  $('.select-sort__list.--desc').slideToggle();
  $('.select-sort').toggleClass('active');
});
$('.select-sort__item').on('click', function () {
  $('.select-sort.--mob').toggleClass('active');
  $('.select-sort__list.--desc').slideUp();
  $('.select-sort__item').not($(this)).removeClass('active');
  $(this).addClass('active');
  $('.select-sort__head span').html($(this).text());
  $('.select-sort__input').val($(this).text());
  $('.select-sort').toggleClass('active');
});