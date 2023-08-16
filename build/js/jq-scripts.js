'use strict';

$('[data-open-block]').on('click', function () {
  $('[data-open-block]').removeClass('active');
  $('[data-open-block="'.concat($(this).data('open-block'), '"')).addClass('active');
  $('[data-block]').removeClass('active');
  $('[data-block="'.concat($(this).data('open-block'), '"')).addClass('active');
});
$('[data-block-entrance-btn').on('click', function () {
  $('[data-block-entrance-btn]').removeClass('active');
  $('[data-block-entrance-btn="'.concat($(this).data('block-entrance-btn'), '"')).addClass('active');
  $('[data-block-entrance]').hide();
  $('[data-block-entrance="'.concat($(this).data('block-entrance-btn'), '"')).fadeIn(1000);
});
if (window.innerWidth >= 768) {
  $('.your-order__list-item-main-desc-title').text(function (i, text) {
    var txt = text;
    if (txt.length >= 30) {
      txt = txt.substring(0, 50);
      txt = ''.concat(txt.substring(0, 50), '...');
    }
    $(this).text(txt);
  });
}
$('.click-toggle').each(function () {
  $(this).on('click', function () {
    $(this).toggleClass('active');
  });
});
$('.card__btn-buy').each(function () {
  var modal = $(this).parent().parent().parent().parent().find('.card__modal');
  modal.fadeOut(1000);
  $(this).on('click', function () {
    $(this).removeClass('active');
    $(this).next().addClass('active');
    modal.fadeIn(1000);
  });
});
$('.number-plus').each(function () {
  $(this).on('click', function () {
    var count = Number($(this).prev().val());
    count += 1;
    $(this).prev().val(count);
  });
});
$('.number-minus').each(function () {
  $(this).on('click', function (event) {
    var value = Number($(this).next().val());
    if (value !== 0) {
      value -= 1;
      $(this).next().val(value);
    }
  });
});
$('.catalog__item-form-block').each(function () {
  var more = $(this).find('.catalog__item-form-block-inner');
  var hide = $(this).find('.catalog__item-form-block-content');
  hide.hide();
  more.click(function () {
    hide.slideToggle();
    hide.toggleClass('active');
    more.toggleClass('active');
  });
});
$('.catalog__item').each(function () {
  var more = $(this).find('.catalog__item-main');
  var hide = $(this).find('.catalog__item-form');
  hide.hide();
  more.click(function () {
    hide.slideToggle();
    more.toggleClass('active');
  });
});
$('.product__suitable-block').each(function () {
  var more = $(this).find('.product__suitable-block-inner');
  var hide = $(this).find('.product__suitable-block-content');
  hide.hide();
  more.click(function () {
    hide.slideToggle();
    more.toggleClass('active');
  });
});
$('.product__subsuitable-block').each(function () {
  var more = $(this).find('.product__subsuitable-block-inner');
  var hide = $(this).find('.product__subsuitable-block-content');
  hide.hide();
  more.click(function () {
    hide.slideToggle();
    more.toggleClass('active');
  });
});
$('.pers-cab__fill-history-content').each(function () {
  $(this)
    .find($('.pers-cab__fill-history-content-item'))
    .each(function () {
      var more = $(this).find('.pers-cab__fill-history-content-item-inner');
      var hide = $(this).find('.pers-cab__fill-history-content-item-content');
      hide.hide();
      more.click(function () {
        hide.slideToggle();
        more.toggleClass('active');
      });
    });
});
$('.history-order__content-title-desc').on('click', function () {
  var hide = $(this).parent().find('.history-order__content-title-block');
  hide.slideToggle();
});
$('.sort').each(function () {
  var _this = this;
  $(this).click(function () {
    $(_this).find('.sort__datalist').slideToggle();
    $(_this).toggleClass('active');
  });
});
$('.sort__datalist option').each(function () {
  var datalist = $(this).parent();
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
$('.your-order')
  .find('.btn-form')
  .each(function () {
    if ($(this).attr('disabled') === 'disabled') {
      $(this).next().fadeOut();
    } else {
      $(this).next().fadeIn();
    }
  });
$('.choose-auto__change').each(function () {
  $(this).click(function () {
    $(this).next().slideToggle();
  });
});
if (window.innerWidth <= 768) {
  $('.pers-cab__fill-garage-item').on('touchstart', function () {
    $(this).toggleClass('active');
  });
  $('.basket__main-basket-item').on('touchstart', function (event) {
    if ($(event.target).parent()[0].tagName !== 'BUTTON') {
      $(this).toggleClass('active');
    }
  });
}
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
  } else {
    $('.header__bottom-menu-items-item').each(function () {
      var more = $(this).find('.header__bottom-menu-items-item-title');
      var hide = $(this).find('.header__bottom-menu-items-item-list');
      hide.show();
      more.off('click', function () {
        hide.slideToggle();
        more.toggleClass('active');
      });
    });
  }
});
$('.header__top-items-btns-btn-burger').click(function () {
  $(document.body).toggleClass('hidden');
  $(this).toggleClass('active');
  $('.header__menu-mob').toggleClass('active');
  $('.main-overlay').toggleClass('active');
  $('.header').toggleClass('active');
});

// $('.header__top-items-btns-btn-burger').click(() => {
//   $('.header__menu-mob').removeClass('active');
// });
