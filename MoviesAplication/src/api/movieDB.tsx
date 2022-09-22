import axios from 'axios';

const movieDB = axios.create({
  // timeout: 5000,
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '476132229b9d58b4334e376ff28b2ca8',
    language: 'es-ES',
  },
});

export default movieDB;
