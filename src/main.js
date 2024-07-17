import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import axios from 'axios';

import { createMarkup } from './js/render-functions';
import { getPhotos } from './js/pixabay-api';

const refs = {
  form: document.querySelector('.form'),
  btnSearch: document.querySelector('.btn-search'),
  imgList: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  btnLoad: document.querySelector('.btn-load'),
};

let lightbox;
let page = 1;
let query = '';

refs.form.addEventListener('submit', async e => {
  e.preventDefault();

  query = e.target.elements.text.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  page = 1;
  refs.loader.classList.remove('loader--hidden');
  refs.imgList.innerHTML = '';
  refs.btnLoad.classList.add('hidden');

  try {
    const res = await getPhotos(query, page);

    if (res.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    refs.imgList.innerHTML = createMarkup(res.hits);
    if (lightbox) {
      lightbox.refresh();
    } else {
      lightbox = new SimpleLightbox('.gallery-link', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    }

    refs.btnLoad.classList.remove('hidden');
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again!',
      position: 'topRight',
    });
    console.error('Fetch error: ', error);
  } finally {
    refs.loader.classList.add('loader--hidden');
  }

  e.currentTarget.reset();
});

refs.btnLoad.addEventListener('click', async () => {
  page += 1;

  refs.loader.classList.remove('loader--hidden');

  try {
    const res = await getPhotos(query, page);

    if (res.hits.length === 0) {
      refs.btnLoad.classList.add('hidden');
      iziToast.error({
        position: 'topRight',
        message: "We're sorry, there are no more images to load",
      });
      return;
    }

    refs.imgList.insertAdjacentHTML('beforeend', createMarkup(res.hits));
    lightbox.refresh();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again!',
      position: 'topRight',
    });
    console.error('Fetch error: ', error);
  } finally {
    refs.loader.classList.add('loader--hidden');
  }
});

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  loader.classList.add('loader--hidden');
});
