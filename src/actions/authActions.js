import axios from 'axios';
// import { TEST_DISPATCH } from './types';

//Register User
export const registerUser = userData => {
  axios
    .post('https://ichnserver.gear.host/User/Register', userData)
    .then(res => console.log(res.data).catch(err => console.log(err)));
};

//Login User
export const loginUser = userData => {
  axios
    .post('https://ichnserver.gear.host/User/Login', userData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
