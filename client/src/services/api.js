import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL
});

axios.defaults.withCredentials = true;

api.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const credentials = {
  withCredentials: true,
  credentials: 'include'
};

export const login = (userData) =>
  api.post('/api/auth/login', userData, credentials);
export const registration = (userData) =>
  api.post('/api/auth/register', userData);
export const createContact = (submittedData) =>
  api.post('/api/contacts', submittedData, credentials);
export const getContacts = () => api.get('/api/contacts', credentials);
export const createAndSendPdf = () =>
  api.post('/api/createandsendpdf', credentials);

export default api;
