$(document).ready(() => {
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

  $('.product__suitable-block').each(function () {
    const more = $(this).find('.product__suitable-block-inner');
    const hide = $(this).find('.product__suitable-block-content');
    hide.hide();
    more.click(() => {
      hide.slideToggle();
      more.toggleClass('active');
    });
  });

  $('.pers-cab__fill-history-content').each(function () {
    $(this)
      .find($('.pers-cab__fill-history-content-item'))
      .each(function () {
        const more = $(this).find('.pers-cab__fill-history-content-item-inner');
        const hide = $(this).find('.pers-cab__fill-history-content-item-content');
        hide.hide();
        more.click(() => {
          hide.slideToggle();
          more.toggleClass('active');
        });
      });
  });

  $('.click-toggle').each(function () {
    $(this).on('click', function () {
      $(this).toggleClass('active');
    });
  });

  $('.toggle-block').each(function () {
    const more = $(this).find('.toggle-block-inner');
    const hide = $(this).find('.toggle-block-content');
    hide.hide();
    more.click(() => {
      hide.slideToggle();
      more.toggleClass('active');
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

  $('.choose-auto__form-change-btn').each(function () {
    $(this).click(function (event) {
      if (event.currentTarget.className !== 'choose-auto__change .active') {
        $('.input-datalist-form__list').slideUp();
        $('.input-datalist-form__block').removeClass('active');
      }
      $(this).next().slideToggle();
      $(this).toggleClass('active');
    });
  });

  $('.history-order__content-title-desc').on('click', function () {
    const hide = $(this).parent().find('.history-order__content-title-block');
    hide.slideToggle();
  });

  $('.your-order').on('mouseenter', function () {
    const button = $(this).find('.btn-form');
    const notification = $(this).find('.your-order__notification');

    if (button.attr('disabled') !== 'disabled') {
      notification.fadeIn();
    }
  });

  $('.your-order').on('mouseleave', function () {
    const notification = $(this).find('.your-order__notification');
    notification.fadeOut();
  });

  function setPlaceholderInput() {
    const defaultPlaceholder = 'Поиск по VIN номеру, названию, OEM номеру, артикулу';

    $('.search input').text(function (i, text) {
      if (window.innerWidth <= 768) {
        let placeholder = $(this).attr('placeholder');
        if (placeholder.length >= 30) {
          placeholder = placeholder.substring(0, 35);
          placeholder = `${placeholder.substring(0, 35)}...`;
          $(this).attr('placeholder', placeholder);
        }
      } else {
        $(this).attr('placeholder', defaultPlaceholder);
      }
    });
  }

  function setTextOrderCard() {
    $('.your-order__list-item-main-desc-title').text(function (i, text) {
      let txt = text;
      if (txt.length >= 30) {
        txt = txt.substring(0, 50);
        txt = `${txt.substring(0, 50)}...`;
      }
      $(this).text(txt);
    });
  }

  function resizeFuncs() {
    if (window.innerWidth >= 768) {
      setTextOrderCard();
    }
  }

  function filterRender() {
    if (window.innerWidth >= 768) {
      $('.catalog__item').each(function () {
        const more = $(this).find('.catalog__item-main');
        const hide = $(this).find('.catalog__item-form');
        hide.hide();
        more.click(() => {
          hide.slideToggle();
          more.toggleClass('active');
        });
      });
    }
  }

  setPlaceholderInput();
  resizeFuncs();
  filterRender();

  $(window).resize(() => {
    setPlaceholderInput();
    resizeFuncs();
    if (window.innerWidth >= 768) {
      $('.catalog__item').each(function () {
        const more = $(this).find('.catalog__item-main');
        const hide = $(this).find('.catalog__item-form');
        hide.hide();
        more.click(() => {
          hide.slideToggle();
          more.toggleClass('active');
        });
      });
    }
  });

  $('.choose-auto__open').on('click', () => {
    $('.choose-auto').addClass('active');
    $(document.body).addClass('hidden');
  });

  $('.choose-auto__close').on('click', () => {
    $('.choose-auto').removeClass('active');
    $(document.body).removeClass('hidden');
  });

  $('.catalog-filter-open').click(() => {
    $('.catalog__filter-mob').addClass('active');
    $(document.body).addClass('hidden');
  });

  $('.catalog__filter-mob-close').click(() => {
    $('.catalog__filter-mob').removeClass('active');
    $(document.body).removeClass('hidden');
  });

  $('.sort').on('click', () => {
    $('.select-sort').addClass('active');
    $(document.body).addClass('hidden');
  });
});

$('input[type="phone"]').mask('+7(999)-999-99-99');
