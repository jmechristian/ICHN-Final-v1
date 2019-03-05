import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import orgReducer from './orgReducer';

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  organization: orgReducer
});
