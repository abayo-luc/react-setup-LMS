import { combineReducers } from 'redux';
import auth from './authReducer';
import articles from './articleReducer';

export default combineReducers({
  auth,
  articles,
});
