import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function fetchImages(key, inputForSearch) {
  const searchParams = new URLSearchParams({
    key,
    q: inputForSearch.value.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      iziToast.error({
        message: `Error number ${response.status}!`,
        position: 'topRight',
      });
      throw new Error();
    }
    return response.json();
  });
}

export default fetchImages;
