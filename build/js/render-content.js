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

$(window).on('hashchange', () => {
  const hash = window.location.hash.slice(1);
  renderContentPage(hash);
});

$(document).ready(() => {
  const locationArr = window.location.href.split('/');
  const page = locationArr[locationArr.length - 1];

  if (window.location.hash) {
    const hash = window.location.hash.slice(1);
    renderContentPage(hash);
  } else if (page === PAGES.SHIPING_PAYMENT) {
    renderContentPage(CONTENT.PAYMENT);
  } else if (page === PAGES.PERSONAL_CAB_IND || page === PAGES.PERSONAL_CAB_END) {
    renderContentPage(CONTENT.PROFILE);
  }
});
