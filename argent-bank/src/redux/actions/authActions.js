import { createAction } from "@reduxjs/toolkit";
import { fetchUserData } from "./userActions";


export const loginRequest = createAction("auth/loginRequest");
export const loginSuccess = createAction("auth/loginSuccess");
export const loginFailure = createAction("auth/loginFailure");
export const setRememberMe = createAction('auth/setRememberMe');

export const loginUser =
	({ email, password }) =>
	async (dispatch) => {
		dispatch(loginRequest());

		try {
			const response = await fetch("http://localhost:3001/api/v1/user/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (response.ok) {
				const token = data.body.token;
				await dispatch(fetchUserData(token));
			} else {
				dispatch(loginFailure(data.error));
				throw new Error(data.error);
			}
		} catch (error) {
			dispatch(loginFailure("Une erreur s'est produite"));
			throw error;
		}
	};
