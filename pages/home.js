import Books from '../scripts/Books.mjs';
import router from '../scripts/router.js';
import { displayBooks, displayCategories } from '../scripts/utils.js';

export default () => {
  const init = async () => {
    try {
      const categoryRes = await fetch('../data/categories.json');
      const { categories } = await categoryRes.json();

      const newBooks = new Books();
      const allBooks = await newBooks.books();
      const books = allBooks.slice(0, 4);

      // Render books

      displayBooks(books);

      // Render categories
      displayCategories(Object.keys(categories));
    } catch (error) {
      console.error(error);
      document.getElementById('book-container').innerHTML =
        'Failed to load books. Please try again later.';
    }
  };

  // Ensure DOM exists before running init()
  requestAnimationFrame(init);

  // Explore Button
  requestAnimationFrame(() => {
    const exploreBtn = document.getElementById('explore');
    if (exploreBtn) {
      exploreBtn.addEventListener('click', () => {
        history.pushState('', '', '/books');
        router();
      });
    }
  });

  return `
    <div id="hero">
      <div class='downtop'>
        <p>Welcome to the endless world.</p>
        <p>Welcome to</p>
        <h1>BookFan</h1>
        <hr />
        <button id='explore'>Explore</button>
      </div>
      <img class='downtop' src="images/jules-verne-book.webp" alt="hero-image-jules-verne" loading="lazy" />
    </div>
    <hr />
    <div id="category-container" class='downtop'></div>
    <hr />
    <h3>Recommendations</h3>
    <br />
    <div id="book-container" class='downtop'></div>
  `;
};
