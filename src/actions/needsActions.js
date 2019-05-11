import axios from 'axios';
import { Route } from '../utils/config';
import {
  GET_NEEDS,
  GET_ERRORS,
  GET_ITEM,
  CLAIM_NEED,
  GET_MY_NEED,
  RELEASE_NEED
} from './types';

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

//Claim Need for User
export const claimNeed = (needId, orgId) => dispatch => {
  axios
    .get(`${Route}/Need/ClaimNeed?needId=${needId}&orgId=${orgId}`)
    .then(res =>
      dispatch({
        type: CLAIM_NEED,
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

//Get Array of Needs Claimed By User
export const getMyNeeds = () => dispatch => {
  axios
    .get(`${Route}/Need/GetNeedListClaimedByMe`)
    .then(res =>
      dispatch({
        type: GET_MY_NEED,
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

//Release a Need for a User
export const releaseNeed = (needId, orgId) => dispatch => {
  axios
    .get(`${Route}/Need/ReleaseNeed?needId=${needId}&orgId=${orgId}`)
    .then(res =>
      dispatch({
        type: RELEASE_NEED,
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
