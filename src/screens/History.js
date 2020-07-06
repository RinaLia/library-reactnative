import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import bg from '../assets/image/bg-profile.jpg';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class History extends Component {
  render() {
    return (
      <KeyboardAvoidingView>
        <Image source={bg} style={historyStyle.accent1} />
        <View style={historyStyle.accentOverlay} />
        <View style={historyStyle.headerText}>
          <Text style={historyStyle.textHeader}>History Transaction</Text>
        </View>
        <View style={historyStyle.form}>
          <View style={historyStyle.formCard1}>
            <View style={historyStyle.labelWrapper}>
              <Text style={historyStyle.label}>Username </Text>
              <Text style={historyStyle.label}>Email </Text>
            </View>
          </View>
          <View style={historyStyle.formCard2} />
        </View>

        {/* <View style={historyStyle.container} /> */}
      </KeyboardAvoidingView>
    );
  }
}

const accentHeight = 250;

const historyStyle = StyleSheet.create({
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
    marginTop: 28,
    alignSelf: 'center',
  },
  textHeader: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: 'white',
  },
  form: {
    position: 'absolute',
    zIndex: 1,
    width: deviceWidth,
    height: deviceHeight,
    paddingTop: 20,
  },
  formCard1: {
    position: 'relative',
    width: deviceWidth - 30,
    height: 100,
    alignSelf: 'center',
    backgroundColor: '#FEF9E7',
    marginTop: 115,
    marginBottom: 50,
    borderRadius: 10,
  },
  formCard2: {
    position: 'relative',
    width: deviceWidth - 30,
    height: 450,
    alignSelf: 'center',
    backgroundColor: '#FEF9E7',
    borderRadius: 10,
  },
  label: {
    marginTop: 15,
    paddingLeft: 15,
    fontSize: 18,
  },
});
