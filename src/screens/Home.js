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
      token: '',
    };
  }

  fetchData = () => {
    this.props.getBook();
    const {bookData, isLoading} = this.props.book;
    this.setState({bookData, isLoading});
  };

  componentDidMount() {
    // this.props.auth.token;
    // console.log('token ', token);
    this.fetchData();
  }

  render() {
    const {bookData, isLoading} = this.state;
    return (
      <View style={historyStyle.itemContainer}>
        <Image source={bg} style={historyStyle.accent1} />
        <View style={historyStyle.search}>
          <TextInput
            style={historyStyle.searchInput}
            placeholder="Search book"
          />
        </View>
        <View style={historyStyle.header}>
          <Text style={historyStyle.headerText}>Collection</Text>
        </View>
        {console.log('ini book:', bookData)}
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
          <View style={historyStyle.imageWrapper}>
            {console.log('ini image loo he => ', this.props.image)}
            <Image
              style={historyStyle.img}
              source={{uri: `${this.props.image}`}}
            />
            {/* <Text style={historyStyle.textFlat}>{this.props.title}</Text> */}
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  book: state.book,
  // auth: state.auth,
});
const mapDispatchToProps = {getBook};
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
    backgroundColor: 'red',
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
    width: 100,
    height: 150,
    margin: 3,
    backgroundColor: 'red',
    borderRadius: 5,
    //backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  img: {
    // height: 100,
    flex: 1,
    height: undefined,
    width: undefined,
    borderRadius: 5,
    resizeMode: 'cover',
  },
});
