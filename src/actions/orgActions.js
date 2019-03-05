import { GET_ORGS, GET_ERRORS } from './types';
import axios from 'axios';

//Get List of Organizations
export const getOrgs = () => dispatch => {
  axios
    .get('https://ichnserver.gear.host/Organization/GetOrganizationView')
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
