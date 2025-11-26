export default function footer() {
  const footerElement = document.querySelector('footer');

  if (footerElement) {
    const year = new Date().getFullYear();
    footerElement.innerHTML = `
      <p>&copy; BookFan ${year} | All rights reserved.</p>
    `;
    footerElement.setAttribute('aria-label', 'Footer of the BookFan website');
  } else {
    console.warn('Footer element not found.');
  }
}
