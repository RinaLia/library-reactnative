import {combineReducers} from 'redux';
import fetchData from './fetchData';

const appReducer = combineReducers({
  fetchData,
});

export default appReducer;
