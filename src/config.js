export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://imgcom.herokuapp.com'
    : 'http://localhost:8080';
