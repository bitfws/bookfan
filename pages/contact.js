export default () => {
  return `
    <h1>Contact Us</h1>
    <hr />
    <form id='contact-form'>
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
        <textarea id="message" cols=10 rows=10 required></textarea>
      </div>

      <button class='btn' type="submit">Contact now</button>
    </form>
  `;
};
