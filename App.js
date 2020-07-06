import React, {Component} from 'react';
import {Provider} from 'react-redux';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Router from './src/router/router';
import store from './src/redux/store';
// import Penulis from './src/screens/Penulis';
// import History from './src/screens/History';
// import Login from './src/screens/Login';

// import Profile from './src/screens/Profile';
// import Detail from './src/screens/Detail';
// import His from './src/screens/His';
// import Author from './src/screens/Author';

export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Router />
          {/* <Penulis /> */}
          {/* <His /> */}
        </Provider>
      </>
    );
  }
}
