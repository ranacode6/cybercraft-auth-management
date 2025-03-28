import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: localStorage.getItem('isAuthenticated'),
  user: localStorage.getItem('user'),
  loading: false,
  error: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('isAuthenticated', true);
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
    }
  }
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;
export default authSlice.reducer;
