import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  authReducer,
  loadingReducer,
  form: formReducer,
});

export default rootReducer;
