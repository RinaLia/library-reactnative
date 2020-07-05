import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import bg from '../assets/image/bg-profile.jpg';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class History extends Component {
  render() {
    return (
      <KeyboardAvoidingView>
        <Image source={bg} style={detailStyle.accent1} />
        <View style={detailStyle.accentOverlay} />
        <View style={detailStyle.headerText}>
          <Text style={detailStyle.textHeader}>Detail Book</Text>
        </View>
        <View style={detailStyle.form}>
          <View style={detailStyle.formCard1}>
            <Text style={detailStyle.text3}>
              ies, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </Text>
            <TouchableOpacity style={detailStyle.btnBorrow}>
              <Text style={detailStyle.buttonText}>Borrow Book</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={detailStyle.formCard2} />
        {/* <TouchableOpacity style={detailStyle.btnBorrow}>
          <Text style={detailStyle.buttonText}>Borrow</Text>
        </TouchableOpacity> */}
      </KeyboardAvoidingView>
    );
  }
}

const accentHeight = 250;

const detailStyle = StyleSheet.create({
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
    height: 500,
    alignSelf: 'center',
    backgroundColor: '#FEF9E7',
    marginTop: 150,
    marginBottom: 50,
    borderRadius: 10,
  },
  formCard2: {
    position: 'relative',
    width: 130,
    height: 150,
    backgroundColor: 'red',
    zIndex: 2,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 7,
    backgroundColor: '#EAFAF1',
    borderColor: 'white',
    borderWidth: 5,
  },
  text3: {
    marginTop: 120,
    paddingLeft: 35,
    paddingRight: 20,
    fontSize: 15,
    fontFamily: 'arial',
  },
  btnBorrow: {
    backgroundColor: '#A9DFBF',
    marginLeft: 100,
    marginRight: 100,
    alignSelf: 'center',
    marginTop: 175,
    borderRadius: 3,
    elevation: 1.5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
