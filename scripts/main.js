import router from './router.js';
import header from './header.js';
import footer from './footer.js';

header();
footer();

window.addEventListener('click', (e) => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();
    history.pushState('', '', e.target.href);
    router();

    const navburger = document.getElementById('navburger');
    const nav = document.querySelector('nav');

    navburger.textContent = '☰';
    nav.style.top = '-100vh';
  }
});

window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);
