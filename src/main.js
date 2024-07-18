import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createMarkup } from './js/render-functions';
import { getPhotos } from './js/pixabay-api';

// ===============================================

const refs = {
  form: document.querySelector('.form'),
  btnSearch: document.querySelector('.btn-search'),
  imgList: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  btnLoad: document.querySelector('.btn-load'),
};

let lightbox;
let searchQuery = '';
let page = 1;
const perPage = 15;

// ===============================================

refs.form.addEventListener('submit', async e => {
  e.preventDefault();

  searchQuery = e.target.elements.text.value.trim();

  if (!searchQuery) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  showLoader();
  hideMoreBtn();
  refs.imgList.innerHTML = '';
  page = 1;

  try {
    const res = await getPhotos(searchQuery, page, perPage);

    if (res.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'bottomRight',
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

    if (res.totalHits > perPage) {
      showMoreBtn();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'bottomRight',
    });
    console.error('Fetch error: ', error);
  } finally {
    hideLoader();
  }

  e.target.reset();
});

// ===============================================

refs.btnLoad.addEventListener('click', async () => {
  page += 1;

  showLoader();
  hideMoreBtn();

  try {
    const res = await getPhotos(searchQuery, page, perPage);

    refs.imgList.insertAdjacentHTML('beforeend', createMarkup(res.hits));
    lightbox.refresh();
    scrollBy();

    const loadedImages = page * perPage;
    if (loadedImages >= res.totalHits) {
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'bottomRight',
      });
    } else {
      showMoreBtn();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there was an error loading more images. Please try again later.',
      position: 'bottomRight',
    });
    console.error('Fetch error: ', error);
  } finally {
    hideLoader();
  }
});

function showLoader() {
  refs.loader.classList.remove('hidden');
}
function hideLoader() {
  refs.loader.classList.add('hidden');
}
function showMoreBtn() {
  refs.btnLoad.classList.remove('hidden');
}
function hideMoreBtn() {
  refs.btnLoad.classList.add('hidden');
}

function scrollBy() {
  const cardHeight =
    refs.imgList.firstElementChild.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
