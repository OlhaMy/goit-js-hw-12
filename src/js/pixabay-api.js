import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getPhotos(q, page = 1, perPage = 15) {
  try {
    const response = await axios.get('', {
      params: {
        key: '44946850-4c776fe0ffa968f959f660738',
        q,
        page,
        per_page: perPage,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Fetch error: ', error);
    throw error;
  }
}
