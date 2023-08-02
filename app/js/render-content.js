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
  if (window.location.hash) {
    const hash = window.location.hash.slice(1);
    renderContentPage(hash);
  } else {
    renderContentPage('payment');
  }
});
