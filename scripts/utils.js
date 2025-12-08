import router from './router.js';

export function displayBooks(books) {
  const details = location.pathname.split('/')[1];
  const bookContainer = document.getElementById('book-container');
  const currentPage = window.location.pathname.split('/')[1] === 'book';

  if (!books || books.length === 0) {
    bookContainer.innerHTML = `
      <div class="loader">loading...</div>
    `;
  }

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
        ${
          currentPage ? '<div id="reviews">There are no reviews yet.</div>' : ''
        }
      `;
    })
    .join('');
}

export function displayCategories(categories) {
  const catContainer = document.getElementById('category-container');
  if (catContainer) {
    catContainer.innerHTML = '';
    const categoryDiv = document.createElement('div');
    categoryDiv.id = 'categories';

    categories.forEach((category) => {
      const btn = document.createElement('button');
      btn.textContent = category;
      btn.addEventListener('click', () => {
        setLocalStorage('category', category);
        history.pushState('', '', '/books');
        router();
      });
      categoryDiv.appendChild(btn);
    });

    catContainer.appendChild(categoryDiv);
  }
}

export async function getCategories() {
  const categoryRes = await fetch('../data/categories.json');
  const { categories } = await categoryRes.json();
  return await categories;
}

export function setLocalStorage(value, data) {
  localStorage.setItem(value, JSON.stringify(data));
}

export function getLocalStorage(value) {
  const data = localStorage.getItem(value);
  return data ? JSON.parse(data) : null;
}
