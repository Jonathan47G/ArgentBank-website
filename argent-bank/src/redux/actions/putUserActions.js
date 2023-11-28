import { loginSuccess, loginFailure } from './authActions';


export const fetchPutUserData = (userName, token) => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName: userName
          }),
      });
  
      const userPutData = await response.json();
  
      if (response.ok) {
        dispatch(loginSuccess({ user: userPutData.body}));
      } else {
        dispatch(loginFailure(userPutData.error));
        throw new Error(userPutData.error);
      }
    } catch (error) {
      dispatch(loginFailure('Une erreur s\'est produite lors de la récupération des données utilisateur'));
      throw error;
    }
  };
  