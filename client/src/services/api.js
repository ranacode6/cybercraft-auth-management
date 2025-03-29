import axios from 'axios';

const isProduction = import.meta.env.NODE_ENV === 'production';

const serverUrl = isProduction
  ? import.meta.env.VITE_SERVER_URL_PROD
  : import.meta.env.VITE_SERVER_URL_DEV;

const api = axios.create({
  baseURL: serverUrl
});

axios.defaults.withCredentials = true;

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

export default api;
