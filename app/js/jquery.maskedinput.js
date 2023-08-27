/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!(function (factory) {
  typeof define === 'function' && define.amd
    ? define(['jquery'], factory)
    : factory(typeof exports === 'object' ? require('jquery') : jQuery);
})(($) => {
  let caretTimeoutId;
  const ua = navigator.userAgent;
  const iPhone = /iphone/i.test(ua);
  const chrome = /chrome/i.test(ua);
  const android = /android/i.test(ua);
  ($.mask = {
    definitions: {
      9: '[0-9]',
      a: '[A-Za-z]',
      '*': '[A-Za-z0-9]',
    },
    autoclear: !0,
    dataName: 'rawMaskFn',
    placeholder: '_',
  }),
    $.fn.extend({
      caret(begin, end) {
        let range;
        if (this.length !== 0 && !this.is(':hidden')) {
          return typeof begin === 'number'
            ? ((end = typeof end === 'number' ? end : begin),
              this.each(function () {
                this.setSelectionRange
                  ? this.setSelectionRange(begin, end)
                  : this.createTextRange &&
                    ((range = this.createTextRange()),
                    range.collapse(!0),
                    range.moveEnd('character', end),
                    range.moveStart('character', begin),
                    range.select());
              }))
            : (this[0].setSelectionRange
                ? ((begin = this[0].selectionStart), (end = this[0].selectionEnd))
                : document.selection &&
                  document.selection.createRange &&
                  ((range = document.selection.createRange()),
                  (begin = 0 - range.duplicate().moveStart('character', -1e5)),
                  (end = begin + range.text.length)),
              {
                begin,
                end,
              });
        }
      },
      unmask() {
        return this.trigger('unmask');
      },
      mask(mask, settings) {
        let input;
        let defs;
        let tests;
        let partialPosition;
        let firstNonMaskPos;
        let lastRequiredNonMaskPos;
        let len;
        let oldVal;
        if (!mask && this.length > 0) {
          input = $(this[0]);
          const fn = input.data($.mask.dataName);
          return fn ? fn() : void 0;
        }
        return (
          (settings = $.extend(
            {
              autoclear: $.mask.autoclear,
              placeholder: $.mask.placeholder,
              completed: null,
            },
            settings
          )),
          (defs = $.mask.definitions),
          (tests = []),
          (partialPosition = len = mask.length),
          (firstNonMaskPos = null),
          $.each(mask.split(''), (i, c) => {
            c == '?'
              ? (len--, (partialPosition = i))
              : defs[c]
              ? (tests.push(new RegExp(defs[c])),
                firstNonMaskPos === null && (firstNonMaskPos = tests.length - 1),
                partialPosition > i && (lastRequiredNonMaskPos = tests.length - 1))
              : tests.push(null);
          }),
          this.trigger('unmask').each(function () {
            function tryFireCompleted() {
              if (settings.completed) {
                for (let i = firstNonMaskPos; lastRequiredNonMaskPos >= i; i++)
                  if (tests[i] && buffer[i] === getPlaceholder(i)) return;
                settings.completed.call(input);
              }
            }
            function getPlaceholder(i) {
              return settings.placeholder.charAt(i < settings.placeholder.length ? i : 0);
            }
            function seekNext(pos) {
              for (; ++pos < len && !tests[pos]; );
              return pos;
            }
            function seekPrev(pos) {
              for (; --pos >= 0 && !tests[pos]; );
              return pos;
            }
            function shiftL(begin, end) {
              let i;
              let j;
              if (!(begin < 0)) {
                for (i = begin, j = seekNext(end); len > i; i++) {
                  if (tests[i]) {
                    if (!(len > j && tests[i].test(buffer[j]))) break;
                    (buffer[i] = buffer[j]), (buffer[j] = getPlaceholder(j)), (j = seekNext(j));
                  }
                }
                writeBuffer(), input.caret(Math.max(firstNonMaskPos, begin));
              }
            }
            function shiftR(pos) {
              let i;
              let c;
              let j;
              let t;
              for (i = pos, c = getPlaceholder(pos); len > i; i++) {
                if (tests[i]) {
                  if (((j = seekNext(i)), (t = buffer[i]), (buffer[i] = c), !(len > j && tests[j].test(t)))) break;
                  c = t;
                }
              }
            }
            function androidInputEvent() {
              const curVal = input.val();
              const pos = input.caret();
              if (oldVal && oldVal.length && oldVal.length > curVal.length) {
                for (checkVal(!0); pos.begin > 0 && !tests[pos.begin - 1]; ) pos.begin--;
                if (pos.begin === 0) for (; pos.begin < firstNonMaskPos && !tests[pos.begin]; ) pos.begin++;
                input.caret(pos.begin, pos.begin);
              } else {
                for (checkVal(!0); pos.begin < len && !tests[pos.begin]; ) pos.begin++;
                input.caret(pos.begin, pos.begin);
              }
              tryFireCompleted();
            }
            function blurEvent() {
              checkVal(), input.val() != focusText && input.change();
            }
            function keydownEvent(e) {
              if (!input.prop('readonly')) {
                let pos;
                let begin;
                let end;
                const k = e.which || e.keyCode;
                (oldVal = input.val()),
                  k === 8 || k === 46 || (iPhone && k === 127)
                    ? ((pos = input.caret()),
                      (begin = pos.begin),
                      (end = pos.end),
                      end - begin === 0 &&
                        ((begin = k !== 46 ? seekPrev(begin) : (end = seekNext(begin - 1))),
                        (end = k === 46 ? seekNext(end) : end)),
                      clearBuffer(begin, end),
                      shiftL(begin, end - 1),
                      e.preventDefault())
                    : k === 13
                    ? blurEvent.call(this, e)
                    : k === 27 && (input.val(focusText), input.caret(0, checkVal()), e.preventDefault());
              }
            }
            function keypressEvent(e) {
              if (!input.prop('readonly')) {
                let p;
                let c;
                let next;
                const k = e.which || e.keyCode;
                const pos = input.caret();
                if (!(e.ctrlKey || e.altKey || e.metaKey || k < 32) && k && k !== 13) {
                  if (
                    (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)),
                    (p = seekNext(pos.begin - 1)),
                    len > p && ((c = String.fromCharCode(k)), tests[p].test(c)))
                  ) {
                    if ((shiftR(p), (buffer[p] = c), writeBuffer(), (next = seekNext(p)), android)) {
                      const proxy = function () {
                        $.proxy($.fn.caret, input, next)();
                      };
                      setTimeout(proxy, 0);
                    } else input.caret(next);
                    pos.begin <= lastRequiredNonMaskPos && tryFireCompleted();
                  }
                  e.preventDefault();
                }
              }
            }
            function clearBuffer(start, end) {
              let i;
              for (i = start; end > i && len > i; i++) tests[i] && (buffer[i] = getPlaceholder(i));
            }
            function writeBuffer() {
              input.val(buffer.join(''));
            }
            function checkVal(allow) {
              let i;
              let c;
              let pos;
              const test = input.val();
              let lastMatch = -1;
              for (i = 0, pos = 0; len > i; i++) {
                if (tests[i]) {
                  for (buffer[i] = getPlaceholder(i); pos++ < test.length; ) {
                    if (((c = test.charAt(pos - 1)), tests[i].test(c))) {
                      (buffer[i] = c), (lastMatch = i);
                      break;
                    }
                  }
                  if (pos > test.length) {
                    clearBuffer(i + 1, len);
                    break;
                  }
                } else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);
              }
              return (
                allow
                  ? writeBuffer()
                  : partialPosition > lastMatch + 1
                  ? settings.autoclear || buffer.join('') === defaultBuffer
                    ? (input.val() && input.val(''), clearBuffer(0, len))
                    : writeBuffer()
                  : (writeBuffer(), input.val(input.val().substring(0, lastMatch + 1))),
                partialPosition ? i : firstNonMaskPos
              );
            }
            var input = $(this);
            var buffer = $.map(mask.split(''), (c, i) => (c != '?' ? (defs[c] ? getPlaceholder(i) : c) : void 0));
            var defaultBuffer = buffer.join('');
            var focusText = input.val();
            input.data($.mask.dataName, () =>
              $.map(buffer, (c, i) => (tests[i] && c != getPlaceholder(i) ? c : null)).join('')
            ),
              input
                .one('unmask', () => {
                  input.off('.mask').removeData($.mask.dataName);
                })
                .on('focus.mask', () => {
                  if (!input.prop('readonly')) {
                    clearTimeout(caretTimeoutId);
                    let pos;
                    (focusText = input.val()),
                      (pos = checkVal()),
                      (caretTimeoutId = setTimeout(() => {
                        input.get(0) === document.activeElement &&
                          (writeBuffer(), pos == mask.replace('?', '').length ? input.caret(0, pos) : input.caret(pos));
                      }, 10));
                  }
                })
                .on('blur.mask', blurEvent)
                .on('keydown.mask', keydownEvent)
                .on('keypress.mask', keypressEvent)
                .on('input.mask paste.mask', () => {
                  input.prop('readonly') ||
                    setTimeout(() => {
                      const pos = checkVal(!0);
                      input.caret(pos), tryFireCompleted();
                    }, 0);
                }),
              chrome && android && input.off('input.mask').on('input.mask', androidInputEvent),
              checkVal();
          })
        );
      },
    });
});
