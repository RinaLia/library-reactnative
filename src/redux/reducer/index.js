import {combineReducers} from 'redux';
import author from '../reducer/author';
import genre from '../reducer/genre';
import book from '../reducer/book';
import auth from '../reducer/auth';

const appReducer = combineReducers({
  author,
  genre,
  book,
  auth,
});

export default appReducer;
