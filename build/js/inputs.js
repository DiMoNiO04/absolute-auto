'use strict';

$('.input__slide-btn').change(function () {
  if ($(this).parent().find('.input__slide-toggle').is(':checked')) {
    $(this).parent().parent().parent().find('.input__slide-content').slideDown();
  } else {
    $(this).parent().parent().parent().find('.input__slide-content').slideUp();
  }
});
function toggleButtonInput(elem) {
  if (elem.val() === '') {
    elem.parent().find('button').fadeOut();
  } else {
    elem.parent().find('button').fadeIn();
  }
}
$('.input__block').each(function () {
  var input = $(this).find('input');
  var button = $(this).find('button');
  // toggleButtonInput(input);

  if (input.attr('type') === 'email' || input.attr('type') === 'text' || input.attr('type') === 'phone') {
    button.hide();
    input.on('input', function () {
      return toggleButtonInput(input);
    });
    button.on('click', function () {
      input.val('');
      input.parent().find('button').fadeOut();
      input.focus();
    });
  }
  if (input.attr('type') === 'password') {
    button.on('click', function () {
      $(this).parent().toggleClass('open');
      if (input.attr('type') === 'password') {
        input.attr('type', 'text');
      } else {
        input.attr('type', 'password');
      }
      input.focus();
    });
  }
});
