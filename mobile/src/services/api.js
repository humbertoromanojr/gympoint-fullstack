import axios from 'axios';

const api = axios.create({
  // home
  baseURL: 'http://192.168.1.101:3001',

  // mama home
  // baseURL: 'http://192.168.2.104:3001',
});

export default api;
