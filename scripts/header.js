export default function header() {
  const navburger = document.getElementById('navburger');
  const nav = document.querySelector('nav');

  navburger.addEventListener('click', () => {
    const isMenuOpen = navburger.textContent === 'X';

    navburger.textContent = isMenuOpen ? '☰' : 'X';
    nav.style.top = isMenuOpen ? '-100vh' : '0';

    navburger.setAttribute('aria-expanded', !isMenuOpen);
  });
}
