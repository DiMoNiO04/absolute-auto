$('[data-open-block]').on('click', function () {
  $('[data-open-block]').removeClass('active');
  $(`[data-open-block="${$(this).data('open-block')}"`).addClass('active');

  $('[data-block]').removeClass('active');
  $(`[data-block="${$(this).data('open-block')}"`).addClass('active');
});

$('[data-block-entrance-btn').on('click', function () {
  $('[data-block-entrance-btn]').removeClass('active');
  $(`[data-block-entrance-btn="${$(this).data('block-entrance-btn')}"`).addClass('active');

  $('[data-block-entrance]').hide();
  $(`[data-block-entrance="${$(this).data('block-entrance-btn')}"`).fadeIn(1000);
});

$('.your-order__list-item-main-desc-title').text(function (i, text) {
  let txt = text;
  if (txt.length >= 25) {
    txt = txt.substring(0, 37);
    txt = `${txt.substring(0, 37)}...`;
  }
  $(this).text(txt);
});

$('.click-toggle').each(function () {
  $(this).on('click', function () {
    $(this).toggleClass('active');
  });
});

$('.card__btn-buy').each(function () {
  const modal = $(this).parent().parent().parent().parent().find('.card__modal');

  modal.fadeOut(1000);

  $(this).on('click', function () {
    $(this).removeClass('active');
    $(this).next().addClass('active');
    modal.fadeIn(1000);
  });
});

$('.number-plus').each(function () {
  $(this).on('click', function () {
    let count = Number($(this).prev().val());
    count += 1;
    $(this).prev().val(count);
  });
});

$('.number-minus').each(function () {
  $(this).on('click', function (event) {
    let value = Number($(this).next().val());
    if (value !== 0) {
      value -= 1;
      $(this).next().val(value);
    }
  });
});

$('.catalog__item-form-block').each(function () {
  const more = $(this).find('.catalog__item-form-block-inner');
  const hide = $(this).find('.catalog__item-form-block-content');
  hide.hide();
  more.click(() => {
    hide.slideToggle();
    hide.toggleClass('active');
    more.toggleClass('active');
  });
});

$('.catalog__item').each(function () {
  const more = $(this).find('.catalog__item-main');
  const hide = $(this).find('.catalog__item-form');
  hide.hide();
  more.click(() => {
    hide.slideToggle();
    more.toggleClass('active');
  });
});

$('.product__suitable-block').each(function () {
  const more = $(this).find('.product__suitable-block-inner');
  const hide = $(this).find('.product__suitable-block-content');
  hide.hide();
  more.click(() => {
    hide.slideToggle();
    more.toggleClass('active');
  });
});

$('.product__subsuitable-block').each(function () {
  const more = $(this).find('.product__subsuitable-block-inner');
  const hide = $(this).find('.product__subsuitable-block-content');
  hide.hide();
  more.click(() => {
    hide.slideToggle();
    more.toggleClass('active');
  });
});

$('.pers-cab__fill-history-content-item').each(function () {
  const more = $(this).find('.pers-cab__fill-history-content-item-inner');
  const hide = $(this).find('.pers-cab__fill-history-content-item-content');
  hide.hide();
  more.click(() => {
    hide.slideToggle();
    more.toggleClass('active');
  });
});

$('.history-order__content-title-desc').on('click', function () {
  const hide = $(this).parent().find('.history-order__content-title-block');
  hide.slideToggle();
});

$('.sort').each(function () {
  $(this).click(() => {
    $(this).find('.sort__datalist').slideToggle();
    $(this).toggleClass('active');
  });
});

$('.sort__datalist option').each(function () {
  const datalist = $(this).parent();

  $(this).on('click', function () {
    $(this)
      .parent()
      .find('option')
      .each(function () {
        $(this).removeClass('active');
      });
    $(this).addClass('active');
    $(this).parent().parent().find('input').val($(this).val());
  });
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

$('.header__bottom-menu-close').click(() => {
  $('.header__bottom-menu').fadeOut();
  $('.main-overlay').removeClass('active');
  $('.header').css('z-index', '');
});

$('body').click((event) => {
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

$('.header__bottom-category-close').click(() => {
  $('.header__bottom-category').fadeOut();
  $('.main-overlay').removeClass('active');
  $('.header__bottom-btn').removeClass('active');
  $('.header').css('z-index', '');
});
