export function displayBooks(books) {
  const details = location.pathname.split('/')[1];
  const bookContainer = document.getElementById('book-container');

  bookContainer.innerHTML = books
    .map((book) => {
      const { volumeInfo } = book;
      const {
        imageLinks,
        title,
        authors,
        publishedDate,
        publisher,
        description,
      } = volumeInfo;

      const bookDetails =
        details === 'book'
          ? `
        <small>${publishedDate}</small>
        <small>${publisher}</small>
        <hr />
      `
          : '';

      const link =
        details !== 'book'
          ? `
        <small class="book-details">
          <a href="/book/${book.id}" data-link>Details</a>
        </small>
        <hr />

      `
          : '';

      return `
        <div class="book downtop">
          <img src="${imageLinks?.thumbnail}" alt="${title}" loading="lazy" />
          <div id="info">
            ${bookDetails}
            <h3>${title}</h3>
            <h2>${authors ? authors.join(', ') : 'Unknown author'}</h2>
            <hr />
            ${link}
            <p class="description">${
              description || 'No description available.'
            }</p>
          </div>
        </div>
      `;
    })
    .join('');
}

export function setLocalStorage(value, data) {
  localStorage.setItem(value, JSON.stringify(data));
}

export function getLocalStorage(value) {
  const data = localStorage.getItem(value);
  return data ? JSON.parse(data) : null;
}
