import { combineReducers } from 'redux';

import authReducer from '../Auth';
import alertReducer from '../Alert';
import countriesReducer from '../Countries';
import totalReducer from '../Total';
import articleReducer from '../Article';

export default combineReducers({
  authReducer,
  alertReducer,
  countriesReducer,
  totalReducer,
  articleReducer,
});
