import { getBooks } from '../scripts/utils.js';

export default () => {
  const content = document.createElement('div');
  const genreContent = document.createElement('div');
  const books = [];
  const genres = [
    'Fantasy',
    'Science Fiction',
    'Horror',
    'Romance',
    'Mystery',
    'Adventure',
  ];

  getBooks()
    .then((data) => {
      data.forEach((book, index) => {
        if (index < 3) {
          books.push(book);
        }
      });

      books.forEach((book) => {
        const section = document.createElement('section');

        const title = document.createElement('h3');
        title.textContent = book.volumeInfo.title;

        const description = document.createElement('p');
        description.textContent = book.volumeInfo.description.split('.')[0];

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const img = document.createElement('img');
        img.src = book.volumeInfo.imageLinks.thumbnail;
        img.alt = book.volumeInfo.title;
        img.loading = 'lazy';

        const info = document.createElement('div');
        info.classList.add('cardInfo');
        info.appendChild(title);

        const hr = document.createElement('hr');
        info.appendChild(hr);
        info.appendChild(description);

        cardDiv.appendChild(img);
        section.appendChild(cardDiv);
        section.appendChild(info);

        content.appendChild(section);
      });

      document.getElementById('sample-books').innerHTML = content.outerHTML;

      genres.forEach((genre) => {
        const button = document.createElement('button');
        button.textContent = genre;

        genreContent.appendChild(button);
      });

      document.getElementById('sample-genres').innerHTML =
        genreContent.outerHTML;
    })
    .catch((error) => {
      document.getElementById('sample-books').innerHTML =
        'Failed to load books. Please try again later.';
      console.error('Error fetching books:', error);
    });

  return `
    <div id="hero">
      <div>
        <p>Welcome to the endless world.</p>
        <p>Welcome to</p>
        <h1>BookFan</h1>
        <hr />
        <button>Explore</button>
      </div>
      <img src="./images/jules-verne-book.webp" alt="hero-image-jules-verne" loading="lazy" />
    </div>
    <div id="sample-genres">
    </div>
    <div id="sample-books">
    </div>
  `;
};
