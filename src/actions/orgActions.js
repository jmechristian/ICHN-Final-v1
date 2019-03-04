import axios from 'axios';

import { GET_ORGS } from './types';

//Get List of Organizations
export const getOrgs = () => dispatch => {
  axios
    .get('https://ichnserver.gear.host/Organization/GetOrganizationView')
    .then(res => {
      dispatch({
        type: GET_ORGS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ORGS,
        payload: {}
      });
    });
};
