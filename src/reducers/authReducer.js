import { SET_CURRENT_USER, SET_FOLLOWING } from '../actions/types';
import isEmpty from '../utils/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {},
  following: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case SET_FOLLOWING:
      return {
        ...state,
        following: action.payload
      };
    default:
      return state;
  }
}
