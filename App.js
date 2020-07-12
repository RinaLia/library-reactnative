import React, {Component} from 'react';
import {Provider} from 'react-redux';

import Router from './src/router/router';
import {store, persistor} from './src/redux/store';

import {PersistGate} from 'redux-persist/integration/react';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router />
          {/* <Penulis /> */}
          {/* <His /> */}
        </PersistGate>
      </Provider>
    );
  }
}
