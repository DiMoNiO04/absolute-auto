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
        showEntranceContent($(this)[0]);
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

function showEntranceContent(el) {
  if (el.name === 'entrance') {
    $('.entrance').each(function () {
      $(this).hide();
    });
    $('#entrance-content').fadeIn(1000);
  }
}
