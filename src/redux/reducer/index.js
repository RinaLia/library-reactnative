import {combineReducers} from 'redux';
import author from '../reducer/author';
import genre from '../reducer/genre';
import book from '../reducer/book';

const appReducer = combineReducers({
  author,
  genre,
  book,
});

export default appReducer;
