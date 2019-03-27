import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { Route, UserApp } from '../utils/config';
import { SET_CURRENT_USER, GET_ERRORS, SET_FOLLOWING } from './types';

//Register User
export const registerUser = (newUser, history) => dispatch => {
  axios
    .post(`${Route}/User/Register`, newUser)
    .then(res => history.push(`${UserApp}/orgFollow`))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Login User
export const loginUser = user => dispatch => {
  axios
    .post(`${Route}/User/Login`, user)
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

export const setFollowing = () => dispatch => {
  axios.get(`${Route}/User/GetWhoIFollow`).then(res =>
    dispatch({
      type: SET_FOLLOWING,
      payload: res.data
    })
  );
};

export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
