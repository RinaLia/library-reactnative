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
import {connect} from 'react-redux';
import {getData} from '../redux/action/book';
import Icon from 'react-native-vector-icons/FontAwesome';

import bg from '../assets/image/bg-profile.jpg';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({isLoading: true}, this.getData);
    // this.loadAllBookData();
  }
  getData = async () => {
    const url = 'https://rnlibrary.herokuapp.com/books';
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          data: this.state.data.concat(responseJson.data),
        });
      });
  };

  ListAllBook = (image, title, genre) => (
    <ScrollView vertical={true}>
      <View style={dashboardStyle.collectionCard}>
        <Image
          style={dashboardStyle.collectionCardCover}
          source={{uri: image}}
        />
        {/* {console.log(image)} */}
        <Text style={dashboardStyle.titleBook}>{title}</Text>
        <Text style={dashboardStyle.genreBook}>{genre}</Text>
      </View>
    </ScrollView>
  );
  // };

  render() {
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
        {/* <renderRow /> */}
        {/* {console.log(this.state.data.length)} */}
        {this.state.data.length > 0
          ? this.state.data.map(i => {
              return this.ListAllBook(i.image, i.book_title, i.book_genre);
            })
          : null}
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
    // backgroundColor: '#FFF',
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
