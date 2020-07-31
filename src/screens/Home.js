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
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {getBook} from '../redux/action/book';
import {getGenre} from '../redux/action/genre';
import bg from '../assets/image/bg-profile.jpg';
import {TouchableOpacity} from 'react-native-gesture-handler';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const API_URL = 'http://localhost:5000/';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
      isLoading: true,
      search: '',
      genreData: [],
    };
  }

  fetchData = () => {
    this.props.getBook();
    const {bookData, isLoading} = this.props.book;
    this.setState({bookData, isLoading});
  };

  handleSearch = () => {
    const {search} = this.state;
    this.props.getBook('search='.concat(search.toLowerCase()));
    const {bookData} = this.props.book;
    this.setState({bookData});
    // this.setState({search: e});
    console.log('search', search);
  };

  fetchGenre = () => {
    this.props.getGenre();
    const {genreData, isLoading} = this.props.genre;
    this.setState({genreData, isLoading});
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const {bookData, isLoading} = this.state;
    const {genreData} = this.state;
    return (
      <View style={historyStyle.itemContainer}>
        <Image source={bg} style={historyStyle.accent1} />
        <View style={historyStyle.search}>
          <TextInput
            // {console.log('search:', this. handleSearch)}
            onChangeText={e => {
              this.setState({search: e});
            }}
            onSubmitEditing={this.handleSearch}
            style={historyStyle.searchInput}
            placeholder="Search book"

            // {console.log('search:',this.handleSearch )}
          />
          {/* <Icon name="search" /> */}
          {/* <TouchableOpacity onPress={this.handleSearch} /> */}
        </View>
        <View style={historyStyle.header}>
          <Text style={historyStyle.headerText}>Collection</Text>
        </View>
        {/* <View style={historyStyle.genre}>
          <TouchableOpacity style={historyStyle.genreText}>
            {this.props.title}
            <Text style={historyStyle.genreText1}>Genre</Text>
          </TouchableOpacity>
        </View> */}

        <FlatList
          style={historyStyle.flatWrapper}
          data={bookData}
          renderItem={({item}) => (
            <Item title={item.book_title} image={`${API_URL}${item.image}`} />
          )}
          keyExtractor={item => item.id}
          numColumns={3}
          horizontal={false}
        />
      </View>
    );
  }
}

class Item extends Component {
  render() {
    return (
      <View style={historyStyle.parent}>
        <View style={historyStyle.flatText}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('detail')}>
            <View style={historyStyle.imageWrapper}>
              {/* {console.log('ini image loo he => ', this.props.image)} */}
              <Image
                style={historyStyle.img}
                source={{uri: `${this.props.image}`}}
              />

              <Text style={historyStyle.textFlat}>{this.props.title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
//width navigation(Detail)
const mapStateToProps = state => ({
  book: state.book,
  genre: state.genre,
  // auth: state.auth,
});
const mapDispatchToProps = {getBook, getGenre};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

const historyStyle = StyleSheet.create({
  accent1: {
    position: 'absolute',
    width: deviceWidth,
    zIndex: 0,
  },
  header: {
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: '#E5E8E8',
    borderRadius: 30,
    width: deviceWidth - 30,
    marginTop: 35,
    alignSelf: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    marginTop: 30,
    fontFamily: 'monospace',
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
  // flatText: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   paddingVertical: 5,
  // },
  textFlat: {
    fontSize: 13,
    //fontWeight: 'bold',
    fontFamily: 'monospace',
    // paddingLeft: 10,
    // backgroundColor: 'red',
  },

  label: {
    marginTop: 15,
    paddingLeft: 15,
    fontSize: 18,
    // backgroundColor: 'red',
  },
  // parent: {
  //   flex: 1,
  //   backgroundColor: '#FEF9E7',
  //   marginVertical: 8,
  //   marginHorizontal: 16,

  // },
  title: {
    fontSize: 32,
  },
  flatWrapper: {
    marginTop: 15,
    alignSelf: 'center',
    //flex: 1,
    //justifyContent: 'space-between',

    // alignSelf: 'stretch',
  },

  // btn2: {
  //   alignSelf: 'center',
  //   marginTop: 20,
  // },

  textAdd: {
    alignSelf: 'center',
    fontSize: 16,
  },
  imageWrapper: {
    width: 110,
    height: 150,
    margin: 3,
    // backgroundColor: 'red',
    borderRadius: 5,

    // backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  img: {
    // height: 100,
    flex: 1,
    height: undefined,
    width: undefined,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  genre: {
    backgroundColor: 'red',
    paddingLeft: 13,
    fontSize: 15,
    borderRadius: 5,
    width: deviceWidth - 250,
  },
  parent: {
    margin: 5,
  },
});
