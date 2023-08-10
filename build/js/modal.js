'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
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
  $('[data-block-entrance='.concat(contentName, ']')).fadeIn(1000);
}
var Modal = /*#__PURE__*/ (function () {
  function Modal(name) {
    var _this = this;
    _classCallCheck(this, Modal);
    _defineProperty(this, 'openHendler', function () {
      _this.triggers.forEach(function (item) {
        item.addEventListener('click', function (event) {
          event.preventDefault();
          if (event.target.id === 'reg-btn') {
            showEntranceModalContent('reg');
          } else if ($(_this)[0].name === 'entrance') {
            showEntranceModalContent('entrance');
          }
          _this.open();
        });
      });
    });
    _defineProperty(this, 'closeHendler', function (event) {
      if (event.target.classList.contains('close-x')) {
        _this.close();
      }
    });
    this.name = name;
    this.modal = document.querySelector('[data-modal="'.concat(name, '"]'));
    this.triggers = document.querySelectorAll('[data-modal-el="'.concat(name, '"]'));
    this.body = document.querySelector('body');
    this.openHendler();
  }
  _createClass(Modal, [
    {
      key: 'open',
      value: function open() {
        this.modal.classList.remove('success', 'error');
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.modal.addEventListener('click', this.closeHendler);
      },
    },
    {
      key: 'close',
      value: function close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = 'unset';
        this.modal.removeEventListener('click', this.closeHendler);
      },
    },
    {
      key: 'success',
      value: function success() {
        this.modal.classList.remove('error');
        this.modal.classList.add('success');
      },
    },
    {
      key: 'error',
      value: function error() {
        this.modal.classList.remove('success');
        this.modal.classList.add('error');
      },
    },
    {
      key: 'update',
      value: function update() {
        this.modal = document.querySelector('[data-modal="'.concat(this.name, '"]'));
        this.triggers = document.querySelectorAll('[data-modal-el="'.concat(this.name, '"]'));
        this.openHendler();
      },
    },
  ]);
  return Modal;
})();
var modalBrandInfo = document.querySelector('[data-modal="brand-info"]') ? new Modal('brand-info') : null;
var modalOrderInfo = document.querySelector('[data-modal="order-info"]') ? new Modal('order-info') : null;
var modalEntrance = document.querySelector('[data-modal="entrance"]') ? new Modal('entrance') : null;
var modalWarningOrder = document.querySelector('[data-modal="warning-order"]') ? new Modal('warning-order') : null;
var modalUpdatePassword = document.querySelector('[data-modal="update-password"]')
  ? new Modal('update-password')
  : null;
var modalUpdateAddress = document.querySelector('[data-modal="update-address"]') ? new Modal('update-address') : null;
var modalUpdateNameAuto = document.querySelector('[data-modal="update-name-auto"]')
  ? new Modal('update-name-auto')
  : null;
var modalPurchaseReturns = document.querySelector('[data-modal="purchase-returns"]')
  ? new Modal('purchase-returns')
  : null;
var modalChoiceCar = document.querySelector('[data-modal="choice-car"]') ? new Modal('choice-car') : null;
