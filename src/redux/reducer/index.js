import {combineReducers} from 'redux';
// import {persistReducer} from 'redux-persist';
import author from '../reducer/author';
import genre from '../reducer/genre';
import book from '../reducer/book';
import auth from '../reducer/auth';
// import storage from '@react-native-community/async-storage';
// import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

// const persistConfig = {
//   key: 'app',
//   stateReconciler: hardSet,
//   storage,
// };

const appReducer = combineReducers({
  author,
  genre,
  book,
  auth,
});

export default appReducer;

// export default persistReducer(appReducer, persistConfig);
