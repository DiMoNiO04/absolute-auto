'use strict';

// -------------------------------Form------------------------------//
// --------------------Form function--------------------------------//
var currentFocus;
function changeCheckedInputForm(elem) {
  if (elem.parent().prev().val() === '') {
    elem.parent().parent().attr('data-checked', 'off');
  } else {
    elem.parent().parent().attr('data-checked', 'on');
  }
}
function changeDisableFormSubmitButton(elem) {
  var isRes = true;
  elem.find('.main-main__search-form-select').each(function () {
    if ($(this).attr('data-checked') === 'off') {
      isRes = false;
    }
  });
  if (isRes) {
    elem.find('.main-main__search-form-btn-search').removeAttr('disabled');
  } else {
    elem.find('.main-main__search-form-btn-search').attr('disabled', 'disabled');
  }
}
function changeDisableFormResetButton(elem) {
  var isRes = true;
  elem.find('.main-main__search-form-select').each(function () {
    if ($(this).attr('data-checked') === 'on') {
      isRes = false;
    }
  });
  if (!isRes) {
    elem.find('.main-main__search-form-btn-reset').removeAttr('disabled');
  } else {
    elem.find('.main-main__search-form-btn-reset').attr('disabled', 'disabled');
  }
}
function removeActive(x) {
  for (var i = 0; i < x.length; i += 1) {
    x[i].classList.remove('active');
  }
}
function addActive(x) {
  if (!x) return false;
  removeActive(x);
  if (currentFocus >= x.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = x.length - 1;
  x[currentFocus].classList.add('active');
}
// ----------------------------------------------------------------//

$('.main-main__search-form').each(function () {
  $(this)
    .find('.main-main__search-form-select')
    .on('click', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).find('.main-main__search-form-select-datalist').fadeOut(1000);
      } else {
        $('.main-main__search-form-select').removeClass('active');
        $('.main-main__search-form-select-datalist').fadeOut(1000);
        $(this).addClass('active');
        $(this).find('.main-main__search-form-select-datalist').fadeIn(1000);
      }
      $(this)
        .find('.main-main__search-form-select-input')
        .on('input', function () {
          var text = $(this).val().toUpperCase();
          $(this)
            .next()
            .find('option')
            .each(function () {
              if ($(this).val().toUpperCase().indexOf(text) > -1) {
                $(this).css('display', 'block');
              } else {
                $(this).css('display', 'none');
              }
            });
        });
    });
  $(this)
    .find('.main-main__search-form-select')
    .each(function (index) {
      $(this)
        .find('option')
        .each(function () {
          $(this).on('click', function () {
            $(this).parent().prev().val($(this).val());
            $(this).parent().fadeOut();
            changeCheckedInputForm($(this));
            changeDisableFormSubmitButton($(this).parent().parent().parent());
            changeDisableFormResetButton($(this).parent().parent().parent());
            if (
              index !== 5 &&
              $(this).parent().parent().next().css('display') !== 'flex' &&
              $(this).parent().parent().next().attr('data-checked') === 'off'
            ) {
              $(this).parent().parent().next().slideToggle(500).fadeIn();
            }
          });
        });
    });
  $(this)
    .find('.main-main__search-form-select')
    .find('button')
    .each(function () {
      $(this).on('click', function (event) {
        event.preventDefault();
        $(this).parent().prev().val('');
        $(this)
          .parent()
          .find('option')
          .each(function () {
            $(this).css('display', 'block');
          });
        $(this).parent().fadeIn(1000);
        changeCheckedInputForm($(this));
        changeDisableFormSubmitButton($(this).parent().parent().parent());
        changeDisableFormResetButton($(this).parent().parent().parent());
      });
    });
  $(this)
    .find('.main-main__search-form-btn-reset')
    .each(function () {
      $(this).on('click', function () {
        $(this)
          .parent()
          .parent()
          .find('.main-main__search-form-select')
          .each(function () {
            $(this).attr('data-checked', 'off');
            $(this).find('.main-main__search-form-select-input').val('');
          });
        changeDisableFormSubmitButton($(this).parent().parent().parent());
        changeDisableFormResetButton($(this).parent().parent().parent());
        $(this)
          .parent()
          .parent()
          .find('.main-main__search-form-select')
          .each(function (index) {
            if (index !== 0) {
              $(this).slideUp().fadeOut();
            }
          });
      });
    });
  $(this)
    .find('.main-main__search-form-select-input')
    .on('keydown', function (event) {
      if (event.keyCode === 40) {
        currentFocus += 1;
        addActive($(this).find('option'));
      } else if (event.keyCode === 38) {
        currentFocus -= 1;
        addActive($(this).find('option'));
      } else if (event.keyCode === 13) {
        event.preventDefault();
        if (currentFocus > -1) {
          if ($(this).find('option')) $(this).find('option')[currentFocus].click();
        }
      }
    });
});
$(document).click(function (event) {
  if (!$(event.target).closest('.main-main__search-form-select').length) {
    $('.main-main__search-form-select').removeClass('active');
    $('.main-main__search-form-select-datalist').fadeOut(1000);
  }
});

// ----------------------------------------------------------------//

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
$('.your-order__list-item-main-desc-title').text(function (i, text) {
  var txt = text;
  if (txt.length >= 25) {
    txt = txt.substring(0, 37);
    txt = ''.concat(txt.substring(0, 37), '...');
  }
  $(this).text(txt);
});
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
$('.pers-cab__fill-history-content-item').each(function () {
  var more = $(this).find('.pers-cab__fill-history-content-item-inner');
  var hide = $(this).find('.pers-cab__fill-history-content-item-content');
  hide.hide();
  more.click(function () {
    hide.slideToggle();
    more.toggleClass('active');
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
});
$('.header__bottom-menu-close').click(function () {
  $('.header__bottom-menu').fadeOut();
  $('.main-overlay').removeClass('active');
});
$('body').click(function (event) {
  if (event.target.classList.value === 'main-overlay active') {
    $('.header__bottom-menu').fadeOut();
    $('.main-overlay').removeClass('active');
    $('.header__bottom-items button').removeClass('active');
    $('.header__bottom-category').fadeOut();
    $('.main-overlay').removeClass('active');
    $('.header__bottom-btn').removeClass('active');
  }
});
//------------------

//-----------------
$('.header__bottom-btn').click(function () {
  $('.header__bottom-category').fadeIn();
  $(this).addClass('active');
  $('.main-overlay').addClass('active');
});
$('.header__bottom-category-close').click(function () {
  $('.header__bottom-category').fadeOut();
  $('.main-overlay').removeClass('active');
  $('.header__bottom-btn').removeClass('active');
});

// $('.header__bottom-category button').click(function () {
//   $('.header__bottom-category button').not($(this)).removeClass('active');
//   $(this).addClass('active');
// });
//--------------------
