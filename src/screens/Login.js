import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import bg from '../assets/image/bg-login.jpg';
import {connect} from 'react-redux';
import {login, clear} from '../redux/action/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isError: false,
    };
  }

  login = () => {
    const dataSubmit = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(dataSubmit);
    const {email, password} = this.state;
    if (email == '' || password == '') {
      Alert.alert('Please fill all data');
    } else {
      this.props.login(dataSubmit);
    }
  };

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
        <View style={styles.container2}>
          <TextInput
            onChangeText={e => {
              this.setState({email: e});
            }}
            placeholder="your email"
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput
            placeholder="password"
            onChangeText={e => {
              this.setState({password: e});
            }}
            returnKeyType="go"
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = {login, clear};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

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
    backgroundColor: '#5499C7',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
