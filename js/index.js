const body = document.body;
const content = document.querySelector('.js-content');

const updateOffset = () => {
  requestAnimationFrame(updateOffset);
  body.style.setProperty('--y', content.scrollTop);
}

updateOffset();