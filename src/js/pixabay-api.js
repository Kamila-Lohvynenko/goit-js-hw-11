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
      throw new Error(response.status);
    }
    return response.json();
  });
}

export default fetchImages;
