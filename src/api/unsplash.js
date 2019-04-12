import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID d601374f02ac904c1a69f3b861859977dfa8aab66c4aa8dc3378bea0c93cb8ce'
  }
});
