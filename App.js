import React, {Component} from 'react';
// import {View, Text, StyleSheet, FlatList} from 'react-native';

import TesScreen from './src/screens/Tes';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Dashboard from './src/screens/Dashboard/Dashboard';
import Profile from './src/screens/Profile';

export default class App extends Component {
  render() {
    return (
      <>
        <Profile />
      </>
    );
  }
}
