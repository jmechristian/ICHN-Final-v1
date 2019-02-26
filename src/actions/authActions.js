import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER, GET_ERRORS } from './types';

//Register User
export const registerUser = userData => {
  axios
    .post('https://ichnserver.gear.host/User/Register', userData)
    .then(res => console.log(res.data).catch(err => console.log(err)));
};

//Login User
export const loginUser = user => dispatch => {
  axios
    .post('https://ichnserver.gear.host/User/Login', user)
    .then(res => {
      console.log(res);
      // Save to localStorage
      const token = res.data.Token;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token
      const decoded = jwt_decode(token);
      console.log(decoded);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.Description
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
