import { GET_NEEDS } from '../actions/types';

const initialState = {
  needs: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NEEDS:
      return {
        ...state,
        needs: action.payload
      };
    default:
      return state;
  }
}
