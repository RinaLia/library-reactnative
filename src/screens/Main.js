import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
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
        {/* <RegisterForm /> */}
        <View style={styles.container2}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('register')}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('login')}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9DFBF',
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
  container2: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#1E8449',
    marginTop: 15,
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
