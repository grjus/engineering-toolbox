import axios from 'axios';

const fastApi = axios.create({
  /**
   * Axios instance for API communication
   * Need to update for production release
   * Issues with CORS during heroku deployment
   */
  baseURL: 'http://localhost:8080/',
  timeout: 5000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST',
  },
});

export default fastApi;
