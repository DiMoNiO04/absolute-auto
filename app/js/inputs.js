$(document).ready(() => {
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

  $('.input__block-pass').each(function () {
    const button = $(this).find('button');
    const input = $(this).find('input');
    button.fadeOut();

    input.on('focus', () => {
      button.fadeIn();
    });
  });

  $('.input__block').each(function () {
    const input = $(this).find('input');
    const button = $(this).find('button');

    if (input.attr('type') === 'email' || input.attr('type') === 'text' || input.attr('type') === 'phone') {
      button.hide();

      input.on('input', () => toggleButtonInput(input));

      button.on('click', () => {
        input.val('');
        input.parent().find('button').fadeOut();
        input.focus();
      });
    }

    if (input.attr('type') === 'password') {
      button.on('mousedown', function (event) {
        event.preventDefault();
        $(this).parent().toggleClass('open');

        if (input.attr('type') === 'password') {
          input.attr('type', 'text');
        } else {
          input.attr('type', 'password');
        }
      });
    }
  });

  // ---------input datalis------------//
  function changeDisableButton(inputBlock, formRes) {
    let isFormRes = false;
    const inputs = inputBlock.parent().parent().find('.input-datalist-form__block-input');

    for (let i = 0; i < inputs.length; i += 1) {
      if (inputs[i].value !== '') {
        isFormRes = true;
      }
    }

    if (isFormRes) {
      formRes.removeAttr('disabled');
    } else {
      formRes.attr('disabled', 'disabled');
    }
  }

  function inputDatalist(event) {
    const targetContainer = $(event.target).closest('.input-datalist-form');

    if (targetContainer) {
      const inputBlock = targetContainer;
      const datalist = targetContainer.find('.input-datalist-form__list');
      const input = targetContainer.find('input');
      const inputReset = targetContainer.find('.input-datalist-form__list-reset');
      const inputMainBlock = targetContainer.find('.input-datalist-form__block');
      const option = targetContainer.find('option');
      const formRes = targetContainer.parent().parent().parent().find('.form-btn-reset');

      targetContainer
        .parent()
        .find('.input-datalist-form')
        .each(function () {
          $(this).find('.input-datalist-form__list').not(datalist).slideUp();
          $(this).find('.input-datalist-form__block').not(inputMainBlock).removeClass('active');
        });

      datalist.slideToggle();
      inputMainBlock.toggleClass('active');
      $('.choose-auto__history').slideUp();
      $('.choose-auto__change').removeClass('active');

      datalist.find('option').each(function () {
        $(this).on('click', function () {
          input.val($(this).html());
          inputBlock.addClass('checked');
          if (inputBlock.parent().parent()[0].classList[0] === 'main-main__search-form-inputs') {
            inputBlock.next().fadeIn(1000);
          }

          changeDisableButton(inputBlock, formRes);

          option.not($(this)).removeClass('active');
          $(this).addClass('active');
        });
      });

      inputReset.click((e) => {
        e.preventDefault();
        input.val('');
        inputBlock.removeClass('checked');
        option.removeClass('active');

        changeDisableButton(inputBlock, formRes);
      });

      input.on('input', () => {
        const inputValue = input.val().toLowerCase().trim();
        option.each(function () {
          const optionValue = $(this).text().toLowerCase();
          if (optionValue.indexOf(inputValue) === 0) {
            $(this).css('display', 'block');
          } else {
            $(this).css('display', 'none');
          }
        });
      });

      formRes.click(() => {
        input.val('');
        inputBlock.removeClass('checked');
        inputMainBlock.removeClass('active');
        option.removeClass('active');
        datalist.slideUp(200);

        changeDisableButton(inputBlock, formRes);

        if (inputBlock.parent().parent()[0].classList[0] === 'main-main__search-form-inputs') {
          inputBlock
            .parent()
            .find('.input-datalist-form:not(:first)')
            .each(function () {
              $(this).not().slideUp();
            });
        }
      });
    }
  }

  $('.input-datalist-form__blocks').on('click', (event) => {
    inputDatalist(event);
  });

  $('.input-address__inputs').on('click', (event) => {
    inputDatalist(event);
  });
  // ---------------------------------//
});
