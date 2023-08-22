$(document).ready(() => {
  $('.menu-aside-mob-btn').click(() => {
    $('.menu-aside-mob').addClass('active');
  });

  $('.menu-aside-mob-title__btn').click(() => {
    $('.menu-aside-mob').removeClass('active');
  });

  $('.menu-aside-mob li').click(function () {
    $('.menu-aside-mob').removeClass('active');
    $('.menu-aside-mob-btn .menu-aside-mob__btn-name').text($(this).text());
  });
});
