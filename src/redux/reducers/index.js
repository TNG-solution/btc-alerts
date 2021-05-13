import { combineReducers } from 'redux';
import exchangesReducers from './exchangesReducers';

export default combineReducers({
  // Reducers
  exchanges: exchangesReducers
})