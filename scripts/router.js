import home from '../pages/home.js';
import books from '../pages/books.js';
import about from '../pages/about.js';
import contact from '../pages/contact.js';

const routes = {
  '/': { title: 'Home', render: home },
  '/books': { title: 'Books', render: books },
  '/about': { title: 'About', render: about },
  '/contact': { title: 'Contact', render: contact },
};

export default function router() {
  let page = routes[location.pathname];

  if (page) {
    document.title = `Bookfan | ${page.title}`;
    container.innerHTML = page.render();
  } else {
    history.replaceState('', '', '/');
    router();
  }
}
