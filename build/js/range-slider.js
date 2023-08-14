'use strict';

var rangeSlider = document.getElementById('range-slider');
if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 10000],
    connect: true,
    step: 100,
    margin: 500,
    range: {
      min: [0],
      max: [10000],
    },
  });
  var inputMin = document.getElementById('range__input-min');
  var inputMax = document.getElementById('range__input-max');
  var inputs = [inputMin, inputMax];
  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });
  var setRangeSlider = function setRangeSlider(i, value) {
    var arr = [null, null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
  };
  inputs.forEach(function (el, index) {
    el.addEventListener('change', function (e) {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
