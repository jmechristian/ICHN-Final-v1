import { GET_ORGS, GET_ERRORS } from './types';
import axios from 'axios';
import { Route } from '../utils/config';

//Get List of Organizations
export const getOrgs = () => dispatch => {
  axios
    .get(`${Route}/Organization/GetOrganizationView`)
    .then(res =>
      dispatch({
        type: GET_ORGS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.Description
      })
    );
};
