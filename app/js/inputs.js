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

  // ---------input datalis------------//
  function changeDisableButton(inputBlock, formRes, formBtn) {
    let isFormBtn = true;
    let isFormRes = false;
    const inputs = inputBlock.parent().parent().find('.input-datalist-form__block-input');

    for (let i = 0; i < inputs.length; i += 1) {
      if (inputs[i].value === '') {
        isFormBtn = false;
      } else {
        isFormRes = true;
      }
    }

    if (isFormRes) {
      formRes.removeAttr('disabled');
    } else {
      formRes.attr('disabled', 'disabled');
    }

    if (isFormBtn) {
      formBtn.removeAttr('disabled');
    } else {
      formBtn.attr('disabled', 'disabled');
    }
  }

  $('.input-datalist-form__blocks').on('click', (event) => {
    const targetContainer = $(event.target).closest('.input-datalist-form');

    if (targetContainer) {
      const inputBlock = targetContainer;
      const datalist = targetContainer.find('.input-datalist-form__list');
      const input = targetContainer.find('input');
      const inputReset = targetContainer.find('.input-datalist-form__list-reset');
      const inputMainBlock = targetContainer.find('.input-datalist-form__block');
      const option = targetContainer.find('option');
      const formBtn = targetContainer.parent().parent().find('.btn-form');
      const formRes = targetContainer.parent().parent().find('.form-btn-reset');

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

      datalist.find('option').each(function () {
        $(this).on('click', function () {
          input.val($(this).html());
          inputBlock.addClass('checked');
          if (inputBlock.parent().parent()[0].classList[0] === 'main-main__search-form') {
            inputBlock.next().fadeIn(1000);
          }

          changeDisableButton(inputBlock, formRes, formBtn);

          option.not($(this)).removeClass('active');
          $(this).addClass('active');
        });
      });

      inputReset.click((e) => {
        e.preventDefault();
        input.val('');
        inputBlock.removeClass('checked');
        option.removeClass('active');

        changeDisableButton(inputBlock, formRes, formBtn);
      });

      input.on('input', function () {
        const text = $(this).val().toUpperCase();
        datalist.find('option').each(function () {
          if ($(this).val().toUpperCase().indexOf(text) > -1) {
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

        changeDisableButton(inputBlock, formRes, formBtn);

        if (inputBlock.parent().parent()[0].classList[0] === 'main-main__search-form') {
          inputBlock
            .parent()
            .find('.input-datalist-form:not(:first)')
            .each(function () {
              $(this).not().slideUp();
            });
        }
      });
    }
  });
  // ---------------------------------//
});
