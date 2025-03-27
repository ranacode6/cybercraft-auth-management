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

export const login = (userData) =>
  api.post('/api/auth/login', userData, {
    withCredentials: true,
    credentials: 'include'
  });
export const registration = (userData) =>
  api.post('/api/auth/register', userData);
export const getContacts = () =>
  api.get('/api/contacts', { withCredentials: true, credentials: 'include' });
// export const getTasks = () => api.get('/tasks');
// export const createTask = (taskData) => api.post('/tasks', taskData);
// export const updateTask = (id, taskData) => api.put(`/tasks/${id}`, taskData);
// export const deleteTask = (id) => api.delete(`/tasks/${id}`);

export default api;
