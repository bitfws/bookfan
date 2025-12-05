import { setLocalStorage, getLocalStorage } from './utils.js';

export default function cookies() {
  const cookiesDiv = document.getElementById('cookies');
  const cookiesAccepted = getLocalStorage('cookiesAccepted');

  if (cookiesDiv != null && cookiesAccepted === null) {
    cookiesDiv.innerHTML = `
        <p>We will use some of your data to store and use it to improve your experience.</p>
        <hr />
        <button id='accept-cookies'>Accept</button>
        <button id='reject-cookies'>Reject</button>
      `;

    document.getElementById('accept-cookies').addEventListener('click', () => {
      setLocalStorage('cookiesAccepted', true);
      cookiesDiv.style.display = 'none';
    });

    document.getElementById('reject-cookies').addEventListener('click', () => {
      setLocalStorage('cookiesAccepted', false);
      cookiesDiv.style.display = 'none';
    });
  } else if (cookiesAccepted !== null) {
    cookiesDiv.style.display = 'none';
  }
}
