import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

import Detail from '../screens/Detail';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Main from '../screens/Main';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Author from '../screens/Author';
import Genre from '../screens/Genre';
import History from '../screens/History';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
class Tab extends Component {
  render() {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen
          options={{
            title: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
          component={Home}
          name="home"
        />
        <BottomTab.Screen
          options={{
            title: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Icon name="account" color={color} size={size} />
            ),
          }}
          component={Profile}
          name="profile"
        />
        <BottomTab.Screen
          options={{
            title: 'Author',
            tabBarIcon: ({color, size}) => (
              <Icon2 name="pencil" color={color} size={size} />
            ),
          }}
          component={Author}
          name="author"
        />
        <BottomTab.Screen
          options={{
            title: 'Genre',
            tabBarIcon: ({color, size}) => (
              <Icon2 name="ticket" color={color} size={size} />
            ),
          }}
          component={Genre}
          name="genre"
        />
        <BottomTab.Screen
          options={{
            title: 'History',
            tabBarIcon: ({color, size}) => (
              <Icon2 name="history" color={color} size={size} />
            ),
          }}
          component={History}
          name="history"
        />
      </BottomTab.Navigator>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  login = () => {
    this.setState({isLogin: true});
  };
  render() {
    const {isLogin} = this.state;
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {!isLogin && (
            <>
              <Stack.Screen
                component={props => <Main {...props} />}
                options={{
                  headerShown: false,
                }}
                name={'main'}
              />
              <Stack.Screen
                component={props => (
                  <Register {...props} register={this.register} />
                )}
                options={{
                  headerShown: false,
                }}
                name={'register'}
              />
              <Stack.Screen
                component={props => <Login {...props} login={this.login} />}
                options={{
                  headerShown: false,
                }}
                name={'login'}
              />
              <Stack.Screen
                component={props => <Profile {...props} logout={this.logout} />}
                options={{
                  headerShown: false,
                }}
                name={'logout'}
              />
            </>
          )}
          {isLogin && (
            <>
              <Stack.Screen
                options={{title: 'Library'}}
                component={Tab}
                name={'main'}
              />
              <Stack.Screen
                options={{title: 'Detail'}}
                component={Detail}
                name={'detail'}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// export default connect(mapStateToProps)(App);
