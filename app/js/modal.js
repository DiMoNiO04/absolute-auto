$(document).ready(function () {
  function showEntranceModal() {
    $('.modal').each(function () {
      $(this).removeClass('active');
    });
    $('#entrance').addClass('active');
  }

  function showEntranceModalContent(contentName) {
    showEntranceModal();
    $('.entrance').each(function () {
      $(this).hide();
    });
    $(`[data-block-entrance=${contentName}]`).fadeIn(1000);
  }

  class Modal {
    constructor(name) {
      this.name = name;
      this.modal = document.querySelector(`[data-modal="${name}"]`);
      this.triggers = document.querySelectorAll(`[data-modal-el="${name}"]`);
      this.body = document.querySelector('body');
      this.openHendler();
    }

    open() {
      this.modal.classList.remove('success', 'error');
      this.modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      this.modal.addEventListener('click', this.closeHendler);
    }

    close() {
      this.modal.classList.remove('active');
      document.body.style.overflow = 'unset';
      this.modal.removeEventListener('click', this.closeHendler);
    }

    success() {
      this.modal.classList.remove('error');
      this.modal.classList.add('success');
    }

    error() {
      this.modal.classList.remove('success');
      this.modal.classList.add('error');
    }

    update() {
      this.modal = document.querySelector(`[data-modal="${this.name}"]`);
      this.triggers = document.querySelectorAll(`[data-modal-el="${this.name}"]`);
      this.openHendler();
    }

    openHendler = () => {
      this.triggers.forEach((item) => {
        item.addEventListener('click', (event) => {
          event.preventDefault();

          if (event.target.id === 'reg-btn') {
            showEntranceModalContent('reg');
          } else if (event.target.id === 'reccovery-pass-success') {
            showEntranceModalContent('reccovery-pass-success');
          } else if ($(this)[0].name === 'entrance') {
            showEntranceModalContent('entrance');
          }

          this.open();
        });
      });
    };

    closeHendler = (event) => {
      if (event.target.classList.contains('close-x')) {
        this.close();
      }
    };
  }

  const modalBrandInfo = document.querySelector('[data-modal="brand-info"]') ? new Modal('brand-info') : null;
  const modalOrderInfo = document.querySelector('[data-modal="order-info"]') ? new Modal('order-info') : null;
  const modalEntrance = document.querySelector('[data-modal="entrance"]') ? new Modal('entrance') : null;
  const modalWarningOrder = document.querySelector('[data-modal="warning-order"]') ? new Modal('warning-order') : null;
  const modalUpdatePassword = document.querySelector('[data-modal="update-password"]')
    ? new Modal('update-password')
    : null;
  const modalUpdateAddress = document.querySelector('[data-modal="update-address"]')
    ? new Modal('update-address')
    : null;
  const modalUpdateNameAuto = document.querySelector('[data-modal="update-name-auto"]')
    ? new Modal('update-name-auto')
    : null;
  const modalPurchaseReturns = document.querySelector('[data-modal="purchase-returns"]')
    ? new Modal('purchase-returns')
    : null;
  const modalChoiceCar = document.querySelector('[data-modal="choice-car"]') ? new Modal('choice-car') : null;
});
