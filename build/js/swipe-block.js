const swipeBlocks = document.querySelectorAll('.swipe-block');
let startX;
let endX;

swipeBlocks.forEach((swipeBlock) => {
  swipeBlock.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
  });

  swipeBlock.addEventListener('touchmove', (event) => {
    endX = event.touches[0].clientX;
    const diff = startX - endX;
    if (diff > 0) {
      swipeBlock.style.left = `-${diff}px`;
    }
  });

  swipeBlock.addEventListener('touchend', () => {
    const diff = startX - endX;
    if (diff > 100) {
      swipeBlock.style.left = '-27vw';
    } else {
      swipeBlock.style.left = 0;
    }
  });
});
