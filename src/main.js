import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createMarkup } from './js/render-functions';
import { getPhotos } from './js/pixabay-api';

const refs = {
  form: document.querySelector('.form'),
  btnSearch: document.querySelector('.btn-search'),
  imgList: document.querySelector('.image-gallery'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const input = e.target.elements.text.value.trim();

  getPhotos(input)
    .then(res => {
      refs.imgList.innerHTML = createMarkup(res.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    });
});
