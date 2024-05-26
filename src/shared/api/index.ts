import axios from 'axios';

export const URL = 'https://logiclike.com/docs';
const requestTimeout = 30000;

export const api = axios.create({
  withCredentials: false,
  baseURL: URL,
  timeout: requestTimeout
});

api.interceptors.request.use(async (config) => {
  return config;
});
