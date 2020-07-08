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
import {connect} from 'react-redux';
import {getGenre} from '../redux/action/genre';
import bg from '../assets/image/bg-profile.jpg';
import {TouchableOpacity} from 'react-native-gesture-handler';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genreData: [],
      isLoading: true,
    };
  }

  fetchData = () => {
    this.props.getGenre();
    const {genreData, isLoading} = this.props.genre;
    this.setState({genreData, isLoading});
  };

  componentDidMount() {
    console.log('genre: ', this.props.genre);
    this.fetchData();
  }

  render() {
    const {genreData, isLoading} = this.state;
    return (
      <View style={historyStyle.itemContainer}>
        <Image source={bg} style={historyStyle.accent1} />
        <View style={historyStyle.header}>
          <Text style={historyStyle.headerText}>Genre</Text>
        </View>

        <FlatList
          style={historyStyle.flat}
          data={genreData}
          renderItem={({item}) => <Item title={item.name} />}
          keyExtractor={item => item.id}
        />
        <View style={historyStyle.btn2}>
          <TouchableOpacity style={historyStyle.add}>
            <Text style={historyStyle.textAdd}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class Item extends Component {
  render() {
    return (
      <View style={historyStyle.parent}>
        {/* <View style={historyStyle.headerText}>
          <Text>Author</Text>
        </View> */}
        {/* <Image source={bg} style={historyStyle.accent1} /> */}
        {/* <View style={historyStyle.accentOverlay} /> */}
        <View style={historyStyle.flatText}>
          <Text style={historyStyle.textFlat}>{this.props.title}</Text>
          <View style={historyStyle.btn1}>
            <TouchableOpacity style={historyStyle.edit}>
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={historyStyle.del}>
              <Text>Del</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  genre: state.genre,
});
const mapDispatchToProps = {getGenre};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Genre);

const historyStyle = StyleSheet.create({
  accent1: {
    position: 'absolute',
    width: deviceWidth,
    // height: deviceHeight,
    zIndex: 0,
    flex: 1,
  },
  accentOverlay: {
    position: 'absolute',
    width: deviceWidth,
    height: deviceHeight,
  },
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
    borderRadius: 10,
    // marginHorizontal: 16,
    // marginTop: 10,
  },
  title: {
    fontSize: 32,
  },
  flat: {
    marginTop: 40,
  },
  btn1: {
    // alignItems: 'flex-end',
    // justifyContent: 'space-around',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 5,
  },
  btn2: {
    alignSelf: 'center',
    marginTop: 20,
    // width: deviceWidth,
  },
  edit: {
    // paddingRight: 7,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#c2b0c9',
    marginRight: 5,
    paddingVertical: 2,
    paddingHorizontal: 2,

    // marginLeft: 5,
  },
  del: {
    paddingRight: 5,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#e26241',
    paddingVertical: 2,
    paddingHorizontal: 2,
  },
  add: {
    backgroundColor: '#ffa1ac',

    width: deviceWidth - 100,
    borderRadius: 10,
    paddingVertical: 7,
  },
  textAdd: {
    alignSelf: 'center',
    fontSize: 16,
  },
});
