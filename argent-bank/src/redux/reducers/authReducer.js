import { createReducer } from '@reduxjs/toolkit';
import { loginRequest, loginSuccess, loginFailure } from '../actions/authActions';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  rememberMe: false,
  token: null,
  user: null,
  error: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginRequest, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(loginSuccess, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.rememberMe = action.payload;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.error = null;
    })
    .addCase(loginFailure, (state, action) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.user = null;
      state.error = action.payload;
    });
});

export default authReducer;
