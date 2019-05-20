import {
  SET_CURRENT_USER,
  SET_FOLLOWING,
  REMOVE_ORG,
  FOLLOW_ORG
} from '../actions/types';
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
    case REMOVE_ORG:
      return {
        ...state,
        following: action.payload
      };
    case FOLLOW_ORG:
      return {
        ...state,
        following: action.payload
      };
    default:
      return state;
  }
}
