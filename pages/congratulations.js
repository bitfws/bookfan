import { getLocalStorage } from '../scripts/utils.js';

export default () => {
  const formData = JSON.parse(getLocalStorage('formData'));

  const message = formData
    ? `Thank you for contacting us, ${formData.name}! We will get back to you at ${formData.email}.`
    : 'Thank you for contacting us, we will get back to you soon!';

  return `
    <div id="congratulations-message">
      <h1>${message}</h1>
    </div>
  `;
};
