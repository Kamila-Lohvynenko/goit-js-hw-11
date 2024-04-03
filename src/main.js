import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import fetchImages from './js/pixabay-api';
import renderImages from './js/render-functions';

const form = document.querySelector('.form');
const searchInput = form.elements.input;
const imagesList = document.querySelector('.container');
const loadingMessage = document.querySelector('.loader');

const apiKey = '43199917-ac2cc136e7963c28457226ad3';

form.addEventListener('submit', searchImages);

function searchImages(event) {
  event.preventDefault();
  imagesList.innerHTML = '';
  if (!searchInput.value.trim()) {
    iziToast.error({
      message: 'Your query does not contain any letters!',
      messageColor: '#fff',
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
    return;
  }
  loadingMessage.classList.remove('is-hidden');
  fetchImages(apiKey, searchInput)
    .then(images => {
      loadingMessage.classList.add('is-hidden');
      imagesList.insertAdjacentHTML('beforeend', renderImages(images.hits));
      lightbox.refresh();
    })
    .catch(error => alert(error));
}

const lightbox = new SimpleLightbox('.container a', {
  captionsData: 'alt',
  captionDelay: 250,
});
