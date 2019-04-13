import {
  GET_NEEDS,
  GET_ITEM,
  CLAIM_NEED,
  GET_MY_NEED,
  RELEASE_NEED
} from '../actions/types';

const initialState = {
  needs: [],
  item: {},
  myNeeds: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NEEDS:
      return {
        ...state,
        needs: action.payload
      };
    case GET_ITEM:
      return {
        ...state,
        item: action.payload
      };
    case CLAIM_NEED:
      return {
        ...state
      };
    case GET_MY_NEED:
      return {
        ...state,
        myNeeds: action.payload
      };
    case RELEASE_NEED:
      return {
        ...state
      };
    default:
      return state;
  }
}
