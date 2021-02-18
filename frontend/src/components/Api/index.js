import axios from 'axios';

const fastApi = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 5000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST',
  },
});

export default fastApi;
