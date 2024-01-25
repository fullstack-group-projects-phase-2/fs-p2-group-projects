import axios from axios

const instance = axios.create({
  // baseURL: 'https://localhost:3000',
  baseURL: 'https://d-talk.mgarmayogapratama.xyz',
});

export default instance