const PAGES = {
  SHIPING_PAYMENT: 'shiping-payment.html',
  PERSONAL_CAB_IND: 'personal-cab-ind.html',
  PERSONAL_CAB_END: 'personal-cab-ent.html',
};

const CONTENT = {
  PAYMENT: 'payment',
  PROFILE: 'profile',
};

function renderContentPage(elem) {
  $('[data-content]').removeClass('active');
  $(`[data-content=${elem}]`).addClass('active');

  $('[data-open-content]').parent().removeClass('active');
  $(`[data-open-content=${elem}]`).parent().addClass('active');
}

function changeContent() {
  const locationArr = window.location.href.split('/');
  const page = locationArr[5];

  if (window.location.hash) {
    const hash = window.location.hash.slice(1);
    renderContentPage(hash);
  } else if (page === PAGES.SHIPING_PAYMENT) {
    renderContentPage(CONTENT.PAYMENT);
    $('.menu-aside-mob-btn .menu-aside__btn-name').text($('.shiping__content .active .title').text());
  } else if (page === PAGES.PERSONAL_CAB_IND || page === PAGES.PERSONAL_CAB_END) {
    renderContentPage(CONTENT.PROFILE);
  }
}

$(window).on('hashchange', () => changeContent());
$(document).ready(() => changeContent());

document.addEventListener('DOMContentLoaded', () => {
  const locationArr = window.location.href.split('/');
  const page = locationArr[5].split('#')[0];

  if (page === PAGES.SHIPING_PAYMENT) {
    $('.menu-aside-mob__btn-name').text($('.shiping__content.active').find('.title').text());
  }
  if (page === PAGES.PERSONAL_CAB_END || page === PAGES.PERSONAL_CAB_IND) {
    $('.menu-aside-mob__btn-name').text($('.pers-cab__content.active').find('.title').text());
  }
});
