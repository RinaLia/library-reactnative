import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import ApiUrl from '../assets/utils/ApiUrl';

import bg from '../assets/image/bg-profile.jpg';
import cover from '../assets/image/covernya_dilan.png';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAllBook: [],
    };
  }

  async componentDidMount() {
    // this.loadAllBookData();
  }

  async loadAllBookData() {
    this.setState({loadingListBook: true});
    await fetch(ApiUrl.getAllBook, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      // body: "&lihatsemua=" + "false"
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status) {
          this.setState({dataAllBook: responseJson.data});
          console.log(this.state.dataAllBook);
        }
      })
      .catch(error => {
        console.log(error);
        Alert.alert('', 'Terjadi kesalahan pada aplikasi');
      });
    this.setState({loadingListBook: false});
  }

  render() {
    const ListAllBook = () => (
      <ScrollView horizontal={true}>
        {/* {this.state.dataAllBook.map((item, index) => ( */}
        <View style={dashboardStyle.collectionCard}>
          <Image style={dashboardStyle.collectionCardCover} source={cover} />
          <Text style={dashboardStyle.titleBook}>TEST</Text>
          <Text style={dashboardStyle.genreBook}>Romance</Text>
        </View>
        {/* ))} */}
      </ScrollView>
    );

    return (
      <KeyboardAvoidingView style={dashboardStyle.parent}>
        <Image source={bg} style={dashboardStyle.accent1} />
        <View style={dashboardStyle.header}>
          <Text style={dashboardStyle.headerTitle}>Library</Text>
        </View>
        <View style={dashboardStyle.search}>
          <Icon name="search" size={20} style={dashboardStyle.searchIcon} />
          <TextInput
            placeholder="What would like to read bro"
            autoCapitalize="none"
            autoCorrect={false}
            style={dashboardStyle.searchInput}
          />
        </View>
        <View style={dashboardStyle.subHeader}>
          <Text style={dashboardStyle.text}>Collections</Text>
        </View>
        <ListAllBook />
        <View />
      </KeyboardAvoidingView>
    );
  }
}

const dashboardStyle = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
  },
  accent1: {
    position: 'absolute',
    width: deviceWidth,
    height: deviceHeight,
    zIndex: 0,
  },
  header: {
    alignItems: 'center',
    marginTop: 25,
  },
  headerTitle: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'monospace',
  },
  search: {
    flexDirection: 'row',
    width: deviceWidth - 30,
    marginLeft: 14,
    marginTop: 20,
  },
  searchIcon: {
    alignSelf: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  subHeader: {
    marginTop: 8,
    marginLeft: 18,
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'sans-serif-condensed',
  },
  collectionCard: {
    width: 150,
    height: 160,
    borderWidth: 1,
    borderRadius: 10,
    marginStart: 20,
    marginTop: 15,
    backgroundColor: '#FFF',
  },
  collectionCardCover: {
    width: 150,
    height: 90,
  },
  titleBook: {
    marginTop: 5,
    alignSelf: 'center',
  },
  genreBook: {
    alignSelf: 'center',
  },
});
