import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  FlatList,
  ScrollView,
} from 'react-native';
import bg from '../assets/image/bg-profile.jpg';
import {TouchableOpacity} from 'react-native-gesture-handler';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAllBook: [],
      dataList: [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ],
    };
  }
  render() {
    const ListAllData = () => (
      <ScrollView>
        {this.state.dataList.map((item, index) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
              marginLeft: 5,
              marginTop: 20,
            }}>
            <Text>{item.title}</Text>
            <View style={{marginRight: 5, flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  marginRight: 5,
                  borderRadius: 3,
                  backgroundColor: '#CD6155',
                  elevation: 2,
                }}>
                <Text>DELETE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 3,
                  backgroundColor: '#7DCEA0',
                }}>
                <Text>EDIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    );

    return (
      <KeyboardAvoidingView>
        <Image source={bg} style={historyStyle.accent1} />
        <View style={historyStyle.accentOverlay} />
        <View style={historyStyle.headerText}>
          <Text style={historyStyle.textHeader}>Author</Text>
        </View>
        <View style={historyStyle.form}>
          <View style={historyStyle.formCard1}>
            <ListAllData />
          </View>
        </View>
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
    marginTop: 90,
    marginBottom: 50,
    borderRadius: 10,
    flex: 1,
  },
  label: {
    marginTop: 15,
    paddingLeft: 15,
    fontSize: 18,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
