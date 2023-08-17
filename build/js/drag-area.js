$(document).ready(() => {
  const button = $('.drag-area').find('button');
  const input = $('.drag-area').find('input');

  button.on('click', () => input.click());

  $('.drag-area').on('dragover', function (event) {
    event.preventDefault();
    $(this).addClass('active');
  });

  $('.drag-area').on('dragleave', function () {
    $(this).removeClass('active');
  });

  $('.drag-area').on('drop', function (event) {
    event.preventDefault();
    $(this).removeClass('active');
  });
});
