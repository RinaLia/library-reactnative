import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

// const store = createStore(reducers, applyMiddleware(logger, promiseMiddleware));

// const middleware = applyMiddleware(promiseMiddleware, logger);
// const store = createStore(reducers, middleware);
// const persistor = persistStore(store);

//const store = createStore(reducers,applyMiddleware)

// export {store, persistor};

const persistConfig = {
  key: 'root',
  stateReconciler: hardSet,
  storage,
  // whitelist: ['auth'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  applyMiddleware(promiseMiddleware, logger),
);
const persistor = persistStore(store);
export {store, persistor};
