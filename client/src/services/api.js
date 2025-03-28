import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL
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
