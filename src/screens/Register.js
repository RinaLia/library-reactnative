import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import RegisterForm from './RegisterForm';
import bg from '../assets/image/bg-login.jpg';

export default class Register extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={bg} />
          <Text style={styles.title}>
            An app made for library using React Native
          </Text>
        </View>
        <View style={styles.formContainer} />
        <RegisterForm />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AED6F1',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9,
  },
});
