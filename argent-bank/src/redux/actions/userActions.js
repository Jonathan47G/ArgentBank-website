import { loginSuccess, loginFailure } from './authActions';


export const fetchUserData = (token) => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      const userData = await response.json();
  
      if (response.ok) {
        dispatch(loginSuccess({ user: userData.body, token: token }));
      } else {
        dispatch(loginFailure(userData.error));
        throw new Error(userData.error);
      }
    } catch (error) {
      dispatch(loginFailure('Une erreur s\'est produite lors de la récupération des données utilisateur'));
      throw error;
    }
  };
  