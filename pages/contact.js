import { setLocalStorage } from '../scripts/utils.js';
import router from '../scripts/router.js';

export default () => {
  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;

    setLocalStorage('user', {
      name,
      email,
      message,
    });

    history.pushState('', '', '/congratulations');
    router();
  };

  const html = `
    <h1>Contact Us</h1>
    <hr />
    <form id="contact-form">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      
      <div>
        <label for="email">Email:</label>
        <input type='email' id="email" required />
      </div>

      <div>
        <label for="message">Message:</label>
        <textarea id="message" cols="30" rows="10" required></textarea>
      </div>
        
      <button class="btn">Contact Now</button>
    </form>
  `;

  setTimeout(() => {
    const form = document.getElementById('contact-form');
    if (form) form.addEventListener('submit', submitForm);
  }, 0);

  return html;
};
