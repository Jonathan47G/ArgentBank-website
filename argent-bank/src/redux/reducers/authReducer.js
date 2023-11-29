import { createReducer } from "@reduxjs/toolkit";
import {
	updateToken,
	setRememberMe,
	loginRequest,
	loginSuccess,
	loginFailure,
} from "../actions/authActions";
import { userLogout } from "../actions/disconnectAction";

const initialState = {
	isLoading: false,
	isAuthenticated: false,
	token: null,
	user: null,
	rememberMe: false,
	error: null,
};

const authReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(updateToken, (state, action) => {
			state.token = action.payload;
			state.rememberMe
				? localStorage.setItem("user", JSON.stringify(action.payload.user))
				: sessionStorage.setItem("token", JSON.stringify(action.payload));
		})
		.addCase(loginRequest, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(loginSuccess, (state, action) => {
			state.isLoading = false;
			state.isAuthenticated = true;
			state.user = action.payload.user;
			state.rememberMe
				? localStorage.setItem("user", JSON.stringify(action.payload.user))
				: sessionStorage.setItem("user", JSON.stringify(action.payload.user));
			state.error = null;
		})
		.addCase(loginFailure, (state, action) => {
			state.isAuthenticated = false;
			state.isLoading = false;
			state.user = null;
			state.error = action.payload;
		})
		.addCase(userLogout, (state) => {
			state.isLoading = false;
			state.isAuthenticated = false;
			state.token = null;
			state.user = null;
			state.error = null;
			state.rememberMe = false;
			sessionStorage.clear();
      localStorage.clear();
		})
		.addCase(setRememberMe, (state, action) => {
			state.rememberMe = action.payload;
			if (action.payload) {
				state.token = localStorage.getItem("token") || null;
				state.user = localStorage.getItem("user") || null;
			} else {
				state.token = sessionStorage.getItem("token") || null;
				state.user = sessionStorage.getItem("user") || null;
			}
		});
});

export default authReducer;
