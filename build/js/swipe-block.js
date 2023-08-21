"use strict";

var swipeBlocks = document.querySelectorAll('.swipe-block');
var startX;
var endX;
swipeBlocks.forEach(function (swipeBlock) {
  swipeBlock.addEventListener('touchstart', function (event) {
    startX = event.touches[0].clientX;
  });
  swipeBlock.addEventListener('touchmove', function (event) {
    endX = event.touches[0].clientX;
    var diff = startX - endX;
    if (diff > 0) {
      swipeBlock.style.left = "-".concat(diff, "px");
    }
  });
  swipeBlock.addEventListener('touchend', function () {
    var diff = startX - endX;
    if (diff > 100) {
      swipeBlock.style.left = '-27vw';
    } else {
      swipeBlock.style.left = 0;
    }
  });
});