import galleryCardsTpl from '../templates/food-gallery.hbs';
import menu from '../menu.json';

const galleryRef = document.querySelector('.js-menu');

function renderGallery(menu) {
  return galleryCardsTpl(menu);
}

export default galleryRef.insertAdjacentHTML('beforeend', renderGallery(menu));
