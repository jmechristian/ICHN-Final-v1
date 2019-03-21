import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import orgReducer from './orgReducer';
import needsReducer from './needsReducer';

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  organization: orgReducer,
  needs: needsReducer
});
