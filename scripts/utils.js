export function displayBooks(books) {
  const bookContainer = document.getElementById('book-container');
  bookContainer.innerHTML = books
    .map(
      (book) => `<div class="book">
                    <img src=${book.volumeInfo.imageLinks.thumbnail} alt=${book.volumeInfo.title} loading ='lazy';/>
                    <div id='info'>
                      <h3>${book.volumeInfo.title}</h3>
                      <h2>${book.volumeInfo.authors}</h2>
                      <hr />
                      <p class='description'>${book.volumeInfo.description}</p>
                    </div>
                  </div>`
    )
    .join('');
}
