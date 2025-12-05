export default () => {
  // La función que maneja el envío del formulario
  const submitForm = (e) => {
    e.preventDefault();

    // Acceder a los valores del formulario
    const form = e.target; // 'e.target' es el formulario
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;

    alert(`Name: ${name}`);
    alert(`Email: ${email}`);
    alert(`Message: ${message}`);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', submitForm);
    } else {
      console.log('Error: No form found.');
    }
  });

  return `
    <h1>Contact Us</h1>
    <hr />
    <form id="contact-form">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      
      <div>
        <label for="message">Message:</label>
        <textarea id="message" cols="30" rows="10" required></textarea>
      </div>

      <button type="submit" class="btn">Contact Now</button>
    </form>
  `;
};
