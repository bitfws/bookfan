export default class Books {
  constructor() {
    this.BASE_URI = 'https://www.googleapis.com/books/v1/volumes';
  }

  async getBook(id) {
    try {
      const url = new URL(`${this.BASE_URI}/${id}`);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error getting book:', err);
      throw err;
    }
  }

  async books(query = 'fantasy') {
    try {
      const url = new URL(this.BASE_URI);
      url.searchParams.append('q', query);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      return data.items || [];
    } catch (err) {
      console.error('Error getting books:', err);
      throw err;
    }
  }
}
