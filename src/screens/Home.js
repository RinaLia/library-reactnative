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
    };
  }

  fetchData = () => {
    this.props.getBook();
    const {bookData, isLoading} = this.props.book;
    this.setState({bookData, isLoading});
  };

  componentDidMount() {
    // console.log('book: ', this.props.book);
    this.fetchData();
  }

  render() {
    const {bookData, isLoading} = this.state;
    return (
      <View style={historyStyle.itemContainer}>
        <Image source={bg} style={historyStyle.accent1} />
        <View style={historyStyle.header}>
          <Text style={historyStyle.headerText}>Collection</Text>
        </View>
        {/* <View style={historyStyle.inputWraper}>
          <TextInput placeholder="Search book ..." />
        </View> */}

        <FlatList
          style={historyStyle.flatWrapper}
          data={bookData}
          renderItem={({item}) => (
            <Item title={item.book_title} image={`${API_URL}${item.image}`} />
          )}
          keyExtractor={item => item.id}
          numColumns={3}
        />
        {/* <View style={historyStyle.btn2}>
          <TouchableOpacity style={historyStyle.add}>
            <Text style={historyStyle.textAdd}>Add</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

class Item extends Component {
  render() {
    return (
      <View style={historyStyle.parent}>
        <View style={historyStyle.flatText}>
          <Text style={historyStyle.textFlat}>{this.props.title}</Text>
          <View style={historyStyle.imageWrapper}>
            {console.log('ini image => ', this.props.image)}
            <Image
              style={historyStyle.img}
              source={{uri: `${API_URL}${this.props.image}`}}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  book: state.book,
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
    // height: deviceHeight,
    zIndex: 0,
    // flex: 1,
  },
  // accentOverlay: {
  //   position: 'absolute',
  //   width: deviceWidth,
  //   height: deviceHeight,
  // },
  header: {
    alignItems: 'center',
    // color: 'white',
    // justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    marginTop: 20,
    fontFamily: 'monospace',
  },
  flatText: {
    // marginVertical: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5,

    // backgroundColor: 'black',
  },
  textFlat: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    paddingLeft: 10,
  },

  label: {
    marginTop: 15,
    paddingLeft: 15,
    fontSize: 18,
    // backgroundColor: 'red',
  },
  parent: {
    flex: 1,
    backgroundColor: '#FEF9E7',
    // padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    // borderRadius: 10,
    // marginHorizontal: 16,
    // marginTop: 10,
  },
  title: {
    fontSize: 32,
  },
  flatWrapper: {
    marginTop: 40,
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
    margin: 5,

    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  img: {
    height: 100,
  },
});
