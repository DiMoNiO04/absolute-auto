$(document).ready(() => {
  // Клик на кнопки в меню выбора детелей
  $('.details-buttons button').click(function () {
    $('.details-content').fadeIn(500);
    $('.details-buttons button').not($(this)).removeClass('active');
    $(this).addClass('active');
    $('.main-overlay').addClass('active');
    $('.header').addClass('active');

    $('.catalog-desc-content').fadeOut(200);
    $('.catalog-open-desc').removeClass('active');
    $('.catalog-open-desc').removeClass('close');

    $('.header__menu-mob').removeClass('active');
    $('.burger-open').removeClass('active');

    $('.panel-button-mob-content').fadeOut(200);
    $('.panel-button-mob button').removeClass('active');

    $('.header__bottom-button-content').fadeOut();
    $('.header__bottom-button button').removeClass('active');
    $('.burger-open').removeClass('close');
  });

  // Клик на закрытие меню выбора деталей
  $('.close-details').click(() => {
    $('.details-content').fadeOut();
    $('.main-overlay').removeClass('active');
    $('.header').removeClass('active');
    $('.details-buttons button').removeClass('active');
  });

  // Клик на кнопку раскрытия категории
  $('.catalog-open-desc').click(function () {
    if ($(this).hasClass('close')) {
      $('.catalog-desc-content').fadeOut(500);
      $(this).removeClass('active');
      $(this).removeClass('close');
      $('.main-overlay').removeClass('active');
      $('.header').removeClass('active');
      $('.catalog-desc-content').removeClass('active');
    } else {
      $('.catalog-desc-content').fadeIn(500);
      $(this).addClass('active');
      $(this).addClass('close');
      $('.main-overlay').addClass('active');
      $('.header').addClass('active');
      $('.catalog-desc-content').addClass('active');
    }

    $('.header__bottom-button-content').fadeOut();
    $('.header__bottom-button button').removeClass('active');

    $('.details-content').fadeOut(200);
    $('.details-buttons button').removeClass('active');
  });

  // Клик на кнопку закрытия категории
  $('.header__bottom-category-close').click(() => {
    $('.catalog-desc-content').fadeToggle();
    $('.catalog-open-desc').toggleClass('active');
    $('.main-overlay').toggleClass('active');
    $('.header').toggleClass('active');
    $('.catalog-desc-content').removeClass('active');
    $('.catalog-open-desc').removeClass('close');
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

  $('body').click((event) => {
    if (event.target.classList.value === 'main-overlay active') {
      $('.catalog-desc-content').fadeOut(200);
      $('.catalog-open-desc').removeClass('active');
      $('.catalog-open-desc').removeClass('close');

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
    if ($(this).hasClass('close')) {
      $(document.body).removeClass('hidden');
      $('.header').removeClass('active');
      $(this).removeClass('active');
      $(this).removeClass('close');
      $('.header__menu-mob').removeClass('active');
    } else {
      $(document.body).addClass('hidden');
      $('.header').addClass('active');
      $(this).addClass('active');
      $(this).addClass('close');
      $('.header__menu-mob').addClass('active');
    }

    $('.details-content').fadeOut();
    $('.details-buttons button').removeClass('active');
    $('.main-overlay').removeClass('active');
  });

  // Открыть каталог в моб
  $('.catalog-open-mob').click(() => {
    $('.catalog-open-mob-content').addClass('active');
    $('.header__bottom-button-content').fadeOut();
    $('.header__bottom-button button').removeClass('active');
  });

  // Закрыть каталог в моб
  $('.catalog-close-mob').click(() => {
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
      const more = $(this).find('.header__bottom-menu-items-item-title');
      const hide = $(this).find('.header__bottom-menu-items-item-list');
      hide.hide();
      more.click(() => {
        hide.slideToggle();
        more.toggleClass('active');
      });
    });
  }
});
