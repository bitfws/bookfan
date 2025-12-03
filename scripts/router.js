import home from '../pages/home.js';
import books from '../pages/books.js';
import details from '../pages/details.js';
import contact from '../pages/contact.js';

const routes = {
  '/': { title: 'Home', render: home },
  '/home': { title: 'Home', render: home },
  '/books': { title: 'Books', render: books },
  '/contact': { title: 'Contact', render: contact },
};

export default function router() {
  const path = location.pathname;

  let page = routes[path];

  if (!page) {
    const dynamicRoute = /\/book\/([a-zA-Z0-9\-]+)/.exec(path);
    if (dynamicRoute) {
      const id = dynamicRoute[1];
      Object.assign(routes, {
        [`/book/${id}`]: { title: 'Book Details', render: details(id) },
      });
      page = routes[`/book/${id}`];
    }
  }

  if (page) {
    goPage(page);
  } else {
    history.replaceState('', '', '/');
    router();
  }
}

function goPage(page) {
  if (page) {
    document.title = `BookFan | ${page.title}`;
    document.getElementById('content').innerHTML = page.render();
  }
}
