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
import fetchAuthor from '../../src/redux/action/fetchData';
import bg from '../assets/image/bg-profile.jpg';
import {TouchableOpacity} from 'react-native-gesture-handler';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchAuthor();
  }

  fetchAuthor = async () => {
    this.props.fetchData;
    const {author, isLoading} = this.props.fetchData;
    this.setState({author, isLoading});
  };

  render() {
    const {author, isLoading} = this.state;

    return (
      <FlatList
        data={author}
        renderItem={({item}) => (
          <Item title={item.author} content={item.description} />
        )}
        keyExtractor={item => item.author}
        refreshing={isLoading}
      />
    );
  }
}

// <ScrollView>
//   {this.state.dataList.map((item, index) => (
//     <View
//       style={{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginVertical: 10,
//         marginLeft: 5,
//         marginTop: 20,
//       }}>
//       <Text>{item.title}</Text>
//       <View style={{marginRight: 5, flexDirection: 'row'}}>
//         <TouchableOpacity
//           style={{
//             borderWidth: 1,
//             marginRight: 5,
//             borderRadius: 3,
//             backgroundColor: '#CD6155',
//             elevation: 2,
//           }}>
//           <Text>DELETE</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             borderWidth: 1,
//             borderRadius: 3,
//             backgroundColor: '#7DCEA0',
//           }}>
//           <Text>EDIT</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   ))}
// </ScrollView>

class Item extends Component {
  render() {
    return (
      <View>
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
      </View>
    );
  }

  // return (
  //   <KeyboardAvoidingView>
  //     <Image source={bg} style={historyStyle.accent1} />
  //     <View style={historyStyle.accentOverlay} />
  //     <View style={historyStyle.headerText}>
  //       <Text style={historyStyle.textHeader}>Author</Text>
  //     </View>
  //     <View style={historyStyle.form}>
  //       <View style={historyStyle.formCard1}>
  //         <ListAllData />
  //       </View>
  //     </View>
  //   </KeyboardAvoidingView>
  //);
}

// const mapStateToProps = state => ({
//   fetchData: state.fetchData,
// });
const mapDispatchToProps = fetchAuthor;
export default connect(mapDispatchToProps)(Author);

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
