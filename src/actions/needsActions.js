import axios from 'axios';
import { GET_NEEDS, GET_ERRORS } from './types';

//Get list of needs from Org the User follows
export const getNeeds = () => dispatch => {
  axios
    .get('https://ichnserver.gear.host/Need/GetPostedNeedList')
    .then(res =>
      dispatch({
        type: GET_NEEDS,
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
