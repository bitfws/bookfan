import { getLocalStorage } from '../scripts/utils.js';

export default () => {
  const formData = getLocalStorage('user');

  const message = formData
    ? `
    <p>Thank you for contacting us, <strong>${formData.name}</strong>!</p>
    <p>We will get back to you at <strong>${formData.email}</strong>.</p>
    <hr>
    <small>You will be automatically redirected in <span id="countdown">5</span> seconds</small>
    `
    : 'Thank you for contacting us, we will get back to you soon!';

  const html = `
    <div id="congratulations-message">
      <p>${message}</p>
    </div>
  `;

  // countdown
  setTimeout(() => {
    const container = document.getElementById('congratulations-message');
    if (!container) return;

    let countdown = 5;
    const countdownElement = container.querySelector('#countdown');

    const interval = setInterval(() => {
      countdown -= 1;
      if (countdownElement) countdownElement.textContent = countdown;
      if (countdown <= 0) clearInterval(interval);
    }, 1000);
  }, 0);

  return html;
};
