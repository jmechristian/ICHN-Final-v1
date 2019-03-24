import axios from 'axios';
import { Route } from '../utils/config';
import { GET_NEEDS, GET_ERRORS, GET_ITEM } from './types';

//Get list of needs from Org the User follows
export const getNeeds = () => dispatch => {
  axios
    .get(`${Route}/Need/GetPostedNeedList`)
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

//Get Item Details
export const getDetails = id => dispatch => {
  axios
    .get(`${Route}/Need/GetNeed?id=${id}`)
    .then(res =>
      dispatch({
        type: GET_ITEM,
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
