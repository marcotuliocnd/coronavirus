import { combineReducers } from 'redux';

import authReducer from '../Auth';
import alertReducer from '../Alert';
import countriesReducer from '../Countries';
import totalReducer from '../Total';
import articleReducer from '../Article';
import statusReducer from '../Status';

export default combineReducers({
  authReducer,
  alertReducer,
  countriesReducer,
  totalReducer,
  articleReducer,
  statusReducer,
});
