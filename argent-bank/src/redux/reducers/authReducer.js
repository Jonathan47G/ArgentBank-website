import { createReducer } from '@reduxjs/toolkit';
import { updateToken, loginRequest, loginSuccess, loginFailure } from '../actions/authActions';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  token: sessionStorage.getItem("token") || null,
  user: sessionStorage.getItem("user") || null,
  error: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(updateToken, (state, action) => {
    state.token = action.payload;
    sessionStorage.setItem("token", JSON.stringify(action.payload));
  })
    .addCase(loginRequest, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase (loginSuccess, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      sessionStorage.setItem("user", JSON.stringify(action.payload.user));
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
