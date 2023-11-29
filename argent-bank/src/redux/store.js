// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { loginSuccess, updateToken } from "./actions/authActions";

const initApp = () => {
	const user = sessionStorage.getItem('user') || localStorage.getItem('user');
	const token = sessionStorage.getItem('token') || localStorage.getItem('user');
  
	if (user && token) {
	  store.dispatch(loginSuccess({ user: JSON.parse(user), isLoading:false,isAuthenticated: true, error: null }), );
	  store.dispatch(updateToken ({token: token}));
	}
  };
    
  
const store = configureStore({
	reducer:rootReducer,
	devTools: true,
});
initApp();

export { store };
