import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const searchInput = form.elements.input;
const imagesList = document.querySelector('.container');
const loadingMessage = document.querySelector('.message');

form.addEventListener('submit', searchImages);

function searchImages(event) {
  event.preventDefault();
  imagesList.innerHTML = '';
  if (!searchInput.value.trim()) {
    iziToast.show({
      message: 'Your query does not contain any letters!',
      messageColor: '#fff',
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
    return;
  }
  loadingMessage.classList.remove('is-hidden');
  fetchImages()
    .then(images => renderImages(images.hits))
    .catch(error => console.log(error));
}

function fetchImages() {
  const searchParams = new URLSearchParams({
    key: '43199917-ac2cc136e7963c28457226ad3',
    q: `${searchInput.value.trim()}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderImages(images) {
  loadingMessage.classList.add('is-hidden');
  if (!images.length) {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#fff',
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
  }
  const markupImages = images
    .map(image => {
      return `
            <li class="item">
            <a href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}">
            </a>
            <div class="item-content">
            <div>
            <h3 class="title">Likes</h3>
            <p class="amount">${image.likes}</p>
            </div>
            <div>
            <h3 class="title">Views</h3>
            <p class="amount">${image.views}</p>
            </div>
            <div>
            <h3 class="title">Comments</h3>
            <p class="amount">${image.comments}</p>
            </div>
            <div>
            <h3 class="title">Downloads</h3>
            <p class="amount">${image.downloads}</p>
            </div>
            </div>
            </li>
            `;
    })
    .join('');
  imagesList.insertAdjacentHTML('beforeend', markupImages);
  lightbox.refresh();
}

const lightbox = new SimpleLightbox('.container a', {
  captionsData: 'alt',
  captionDelay: 250,
});
