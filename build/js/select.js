///-------------------
$('.select-sort__close').on('click', () => {
  $('.select-sort').removeClass('active');
  $(document.body).removeClass('hidden');
});

$('.select-sort__head').on('click', () => {
  $('.select-sort__list.--desc').slideToggle();
  $('.select-sort').toggleClass('active');
  $(document.body).removeClass('hidden');
});

$('.select-sort__item').on('click', function () {
  $('.select-sort.--mob').toggleClass('active');
  $('.select-sort__list.--desc').slideUp();
  $(document.body).removeClass('hidden');
  $('.select-sort__item').not($(this)).removeClass('active');
  $(this).addClass('active');
  $('.select-sort__head span').html($(this).text());
  $('.select-sort__input').val($(this).text());
  $('.select-sort').toggleClass('active');
});
