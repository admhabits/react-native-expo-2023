// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    rememberMe: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.rememberMe = false;
    },
    toggleRememberMe: (state) => {
      state.rememberMe = !state.rememberMe;
    },
    updateRememberMe: (state) => {
      state.rememberMe = state.rememberMe;
    },
  },
});

export const { loginUser, logoutUser, toggleRememberMe, updateRememberMe } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectRememberMe = (state) => state.auth.rememberMe;

export default authSlice.reducer;
