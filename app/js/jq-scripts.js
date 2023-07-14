// -------------------------------Form------------------------------//
// --------------------Form function--------------------------------//
let currentFocus;

function changeCheckedInputForm(elem) {
  if (elem.parent().prev().val() === '') {
    elem.parent().parent().attr('data-checked', 'off');
  } else {
    elem.parent().parent().attr('data-checked', 'on');
  }
}

function changeDisableFormSubmitButton() {
  let isRes = true;
  $('.main-main__search-form-select').each(function () {
    if ($(this).attr('data-checked') === 'off') {
      isRes = false;
    }
  });

  if (isRes) {
    $('.main-main__search-form-btn-search').removeAttr('disabled');
  } else {
    $('.main-main__search-form-btn-search').attr('disabled', 'disabled');
  }
}

function changeDisableFormResetButton() {
  let isRes = true;
  $('.main-main__search-form-select').each(function () {
    if ($(this).attr('data-checked') === 'on') {
      isRes = false;
    }
  });
  if (!isRes) {
    $('.main-main__search-form-btn-reset').removeAttr('disabled');
  } else {
    $('.main-main__search-form-btn-reset').attr('disabled', 'disabled');
  }
}

function removeActive(x) {
  for (let i = 0; i < x.length; i += 1) {
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

$('.main-main__search-form-select').on('click', function () {
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
      const text = $(this).val().toUpperCase();
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

$('.main-main__search-form-select').each(function (index) {
  $(this)
    .find('option')
    .each(function () {
      $(this).on('click', function () {
        $(this).parent().prev().val($(this).val());
        $(this).parent().fadeOut();
        changeCheckedInputForm($(this));
        changeDisableFormSubmitButton();
        changeDisableFormResetButton();

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

$('.main-main__search-form-select')
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
      changeDisableFormSubmitButton();
      changeDisableFormResetButton();
    });
  });

$('.main-main__search-form-btn-reset').on('click', () => {
  $('.main-main__search-form-select').each(function () {
    $(this).attr('data-checked', 'off');
    $(this).find('.main-main__search-form-select-input').val('');
  });
  changeDisableFormSubmitButton();
  changeDisableFormResetButton();

  $('.main-main__search-form-select').each(function (index) {
    if (index !== 0) {
      $(this).slideUp().fadeOut();
    }
  });
});

$('.main-main__search-form-select-input').on('keydown', function (event) {
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

$(document).click((event) => {
  if (!$(event.target).closest('.main-main__search-form-select').length) {
    $('.main-main__search-form-select').removeClass('active');
    $('.main-main__search-form-select-datalist').fadeOut(1000);
  }
});
// ----------------------------------------------------------------//
