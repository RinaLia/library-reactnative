import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Dimensions,
  TextInput,
} from 'react-native';

import bg from '../assets/image/bg-profile.jpg';
import avatar from '../assets/image/avatar.jpg';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Profile extends Component {
  render() {
    return (
      <KeyboardAvoidingView>
        <Image source={bg} style={profileStyle.accent1} />
        <View style={profileStyle.accentOverlay} />
        <View style={profileStyle.headerText}>
          <Text style={profileStyle.textHeader}>Profile</Text>
        </View>
        <Image style={profileStyle.avatar} source={avatar} />
        <Text style={profileStyle.name}>Emily Cortney</Text>

        <View style={profileStyle.form}>
          <View style={profileStyle.formCard}>
            <View style={profileStyle.inputWrapper}>
              <Text style={profileStyle.inputLabel}>Username:</Text>
              <TextInput placeholder="Emily" style={profileStyle.input} />
              <View style={profileStyle.inputWrapper}>
                <Text style={profileStyle.inputLabel}>Email:</Text>
                <TextInput
                  placeholder="emily@gmail.com"
                  style={profileStyle.input}
                />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const accentHeight = 250;

const profileStyle = StyleSheet.create({
  accent1: {
    position: 'absolute',
    width: deviceWidth,
    height: deviceHeight,
    zIndex: 0,
  },
  accentOverlay: {
    position: 'absolute',
    width: deviceWidth,
    height: deviceHeight,
  },
  headerText: {
    marginTop: 20,
    marginLeft: 15,
  },
  textHeader: {
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'smonospace',
  },
  avatar: {
    borderRadius: 65,
    width: 110,
    height: 110,
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 5,
    color: 'white',
    fontFamily: 'sans-serif-light',
    fontWeight: 'bold',
  },

  form: {
    position: 'absolute',
    zIndex: 1,
    width: deviceWidth,
    height: deviceHeight,
    justifyContent: 'center',
    paddingTop: 40,
  },
  formCard: {
    position: 'relative',
    width: deviceWidth - 100,
    height: 200,
    backgroundColor: '#FEF9E7',
    alignSelf: 'center',
    paddingTop: 35,
    paddingBottom: 40,
    borderRadius: 8,
  },
  inputLabel: {
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontFamily: 'sans-serif-medium',
    marginLeft: 10,
  },
});
