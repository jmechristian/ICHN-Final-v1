import { GET_ORGS } from '../actions/types';

const initialState = {
  organizations: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORGS:
      return {
        ...state,
        organizations: action.payload
      };
    default:
      return state;
  }
}
