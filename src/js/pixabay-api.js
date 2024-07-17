export async function getPhotos(q, page = 1, perPage = 15) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '44946850-4c776fe0ffa968f959f660738',
    q,
    page,
    per_page: perPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  try {
    const response = await fetch(`${BASE_URL}?${params}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    if (data.hits.length === 0) {
      throw new Error('No images found');
    }
    return data;
  } catch (error) {
    console.error('Fetch error: ', error);
    throw error;
  }
}
