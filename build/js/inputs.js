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
  // toggleButtonInput(input);

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

// const rangeInput = document.querySelectorAll('.catalog__item-form-block-content-range input');
// const priceInput = document.querySelectorAll('.catalog__item-form-block-content-price input');
// const progress = document.querySelector('.catalog__item-form-block-content-slider-progress');
// let priceGap = 1000;

// rangeInput.forEach(input => {
// 	input.addEventListener('input', (event) => {
// 		let minVal = parseInt(rangeInput[0].value);
// 		let maxVal = parseInt(rangeInput[1].value);

// 		if(maxVal - minVal < priceGap) {
// 			if(event.target.className === 'catalog__item-form-block-content-range-min') {
// 				rangeInput[0].value = maxVal - priceGap;
// 			} else {
// 				rangeInput[1].value = minVal + priceGap;
// 			}
// 		} else {
// 			priceInput[0].value = minVal;
// 			priceInput[1].value = maxVal;
// 			progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
// 			progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
// 		}
// 	})
// })

// let maxValueInput = rangeInput[1].max;
// let minValueInput = rangeInput[0].min;
// let regex = /[0-9]/g; // регулярка только цифры

// priceInput.forEach(input => {

// 	input.addEventListener('focus', (event) => {
// 		if(event.target.className === 'catalog__item-form-block-content-price-field-min' && priceInput[0].value === minValueInput) {
// 			priceInput[0].value = ''
// 		}
// 	})

// 	input.addEventListener('blur', (event) => {

// 		if(event.target.className === 'catalog__item-form-block-content-price-field-min') {
// 			if(priceInput[0].value >= +maxValueInput - priceGap) {
// 				priceInput[0].value = maxValueInput - priceGap;
// 				rangeInput[0].value = maxValueInput - priceGap;
// 				progress.style.left = (rangeInput[0].value / maxValueInput) * 100 + '%';
// 			}
// 			return;
// 		}

// 		if(event.target.className === 'catalog__item-form-block-content-price-field-max') {
// 			if(priceInput[1].value >= maxValueInput) {
// 				priceInput[1].value = maxValueInput;
// 				rangeInput[1].value = maxValueInput;
// 				progress.style.left = (rangeInput[0].value / maxValueInput) * 100 + '%';
// 			} else if(priceInput[1].value <= +minValueInput + priceGap) {
// 				priceInput[1].value = +minValueInput + priceGap;
// 				rangeInput[1].value = +minValueInput + priceGap;
// 				progress.style.right = 100 - (rangeInput[1].value / maxValueInput) * 100 + '%';
// 			}

// 			console.log(priceInput[1].value, +minValueInput + priceGap)
// 		}
// 	})

// 	input.addEventListener('input', (event) => {
// 		let minVal = parseInt(priceInput[0].value);
// 		let maxVal = parseInt(priceInput[1].value);
// 		let inputValue = input.value.replace(/[e,+,-]/g, '');
//     input.value = inputValue;

// 		if((maxVal - minVal >= priceGap) && maxVal <= maxValueInput && minVal >= minValueInput) {
// 			if(event.target.className === 'catalog__item-form-block-content-price-field-min') {
// 				rangeInput[0].value = minVal;
// 				progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
// 			} else {
// 				rangeInput[1].value = maxVal;
// 				progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
// 			}
// 		}
// 	})
// })
