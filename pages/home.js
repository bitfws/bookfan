import Books from '../scripts/Books.mjs';
import { displayBooks } from '../scripts/utils.js';

export default () => {
  const books = [];
  const newBooks = new Books();

  // Fetch categories from JSON file
  fetch('../data/categories.json')
    .then((response) => response.json())
    .then((categoriesData) => {
      const categories = categoriesData.categories;

      newBooks
        .books()
        .then((data) => {
          data.forEach((book, index) => {
            if (index < 4) {
              books.push(book);
            }
          });

          displayBooks(books);

          // Categories
          const categoryContainer = document.createElement('div');

          categories.forEach((category) => {
            const button = document.createElement('button');
            button.textContent = category;
            categoryContainer.appendChild(button);
          });

          document.getElementById('category-container').innerHTML =
            categoryContainer.outerHTML;
        })
        .catch((error) => {
          document.getElementById('book-container').innerHTML =
            'Failed to load books. Please try again later.';
          console.error('Error fetching books:', error);
        });
    })
    .catch((error) => {
      console.error('Error fetching categories:', error);
    });

  return `
    <div id="hero">
      <div class='downtop'>
        <p>Welcome to the endless world.</p>
        <p>Welcome to</p>
        <h1>BookFan</h1>
        <hr />
        <button>Explore</button>
      </div>
      <img class='downtop' src="/images/jules-verne-book.webp" alt="hero-image-jules-verne" loading="lazy" />
    </div>
    <hr />
    <div id="category-container" class='downtop'></div>
    <hr />
    <div id="book-container" class='downtop'></div>
  `;
};
