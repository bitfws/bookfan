const BASE_URI = 'https://www.googleapis.com/books/v1/volumes';

export async function getBooks(query = 'fantasy') {
  try {
    const url = new URL(BASE_URI);
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
