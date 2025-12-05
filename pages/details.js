import Books from '../scripts/Books.mjs';
import { displayBooks } from '../scripts/utils.js';

export default () => {
  const id = location.pathname.split('/')[2];

  const bookDetails = new Books();

  bookDetails
    .getBook(id)
    .then((data) => {
      displayBooks([data]);
    })
    .catch((error) => {
      console.error('Error fetching book details:', error);
    });

  return `<div id="book-container" class='downtop'></div>`;
};
