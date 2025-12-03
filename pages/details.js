import Books from '../scripts/Books.mjs';

export default (id) => {
  const content = document.createElement('div');
  const bookDetails = new Books();

  bookDetails
    .getBook(id)
    .then((data) => {
      content.innerHTML = `
      <h1>${data.volumeInfo.title}</h1>
      <img src="${data.volumeInfo.imageLinks.thumbnail}" alt="${data.volumeInfo.title}" />
      <p>${data.volumeInfo.description}</p>
    `;
    })
    .catch((error) => {
      content.innerHTML = 'Failed to load book details.';
      console.error('Error fetching book details:', error);
    });

  return content.outerHTML;
};
