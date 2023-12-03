import './src/scss/main.scss';

const galleryContainers = document.querySelectorAll('.gallery__container--js');

galleryContainers.forEach((galleryContainer) => {
  const gallery = galleryContainer.querySelector('.gallery__content--js');
  const bottomArrow = galleryContainer.querySelector('.gallery__bottom-arrow--js');
  const topArrow = galleryContainer.querySelector('.gallery__top-arrow--js');

  let interval;

  //   Scroll on hover

  const downScroll = () => {
    interval = window.setInterval(() => {
      gallery.scrollBy(0, 10);
    }, 10);
  };

  const upScroll = () => {
    interval = window.setInterval(() => {
      gallery.scrollBy(0, -10);
    }, 10);
  };

  const stopScroll = () => {
    clearInterval(interval);
  };

  bottomArrow.addEventListener('mouseover', downScroll);
  bottomArrow.addEventListener('mouseout', stopScroll);

  topArrow.addEventListener('mouseover', upScroll);
  topArrow.addEventListener('mouseout', stopScroll);

  //   Display the arrow depending on the scroll position

  topArrow.style.display = 'none';

  const displayArrow = () => {
    if (gallery.scrollTop > 0) {
      topArrow.style.display = 'flex';
    } else {
      topArrow.style.display = 'none';
    }

    if (gallery.scrollTop + gallery.offsetHeight >= gallery.scrollHeight) {
      bottomArrow.style.display = 'none';
    } else {
      bottomArrow.style.display = 'flex';
    }
  };

  gallery.addEventListener('scroll', displayArrow);
});
