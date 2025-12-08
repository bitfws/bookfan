import Books from '../scripts/Books.mjs';
import { displayBooks, getLocalStorage } from '../scripts/utils.js';

export default () => {
  let bookCategory = getLocalStorage('category') ?? 'fantasy';
  const books = [];

  const newBooks = new Books();

  newBooks.books(bookCategory).then((data) => {
    data.forEach((book) => {
      books.push(book);
    });
    displayBooks(books);
  });

  window.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      bookCategory = e.target.value.trim();

      books.length = 0;

      newBooks.books(bookCategory).then((data) => {
        data.forEach((book) => {
          books.push(book);
        });
        displayBooks(books);
      });
    }
  });

  return `
    <input id="book-finder" placeholder="Search by category" />
    <hr />
    <div id="book-container"></div>
  `;
};
