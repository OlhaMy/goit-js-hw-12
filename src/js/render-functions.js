export function createMarkup(arr) {
  return arr
    .map(el => {
      return `<li>
        <a class="gallery-link" href="${el.largeImageUR}">
      <img src="${el.webformatURL}" alt="${el.tags}"> </a>
      <div>
        <ul>
          <li>
            <p>likes:${el.likes}</p>
          </li>
          <li>
            <p>views:${el.views}</p>
          </li>
          <li>
            <p>comments:${el.comments}</p>
          </li>
          <li>
            <p>downloads:${el.downloads}</p>
          </li>
        </ul>
      </div>
    </li>`;
    })
    .join('');
}
