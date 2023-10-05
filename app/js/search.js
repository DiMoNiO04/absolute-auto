$(document).ready(() => {
  const input = $('.search input');
  const searchBlock = $('.search-block');
  const oftenSearch = $('.search-block__search');
  const searchBlockContainer = $('.search-block__items');

  input.focus(() => {
    searchBlock.fadeIn();
  });

  input.on('input', function () {
    const value = $(this).val().toLowerCase().trim();

    if (value.length !== 0) {
      oftenSearch.slideDown();
    } else {
      oftenSearch.slideUp();
    }

    searchBlockContainer.find('.search-block__item').each(function () {
      const item = $(this).find('.search-block__btn-name');
      const valueItem = item.text().toLowerCase().trim();
      const arrLetterValue = value.split('');
      const arrLetterItem = valueItem.split('');

      let newText = '';
      if (valueItem.indexOf(value) === 0) {
        for (let i = 0; i < valueItem.length; i += 1) {
          if (arrLetterItem[i] === arrLetterValue[i]) {
            newText += `<span style="color: #2C2A3B;">${arrLetterItem[i]}</span>`;
          } else {
            newText += arrLetterItem[i];
          }
        }
        item[0].innerHTML = newText;
      } else {
        item[0].innerHTML = item[0].innerText;
      }
    });
  });

  $('body').click('click', (event) => {
    if (!$(event.target).closest('.search-block')[0] && !$(event.target).closest('.search')[0]) {
      searchBlock.fadeOut();
    }
  });
});
