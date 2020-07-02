import React, {Component} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Text,
  Button,
  Input,
  Item,
  CardItem,
  Left,
  Card,
} from 'native-base';
import styles from './styles';
import search from '../../assets/image/search-icon.png';
import bg from '../../assets/image/bg-login.jpg';

export default class Dashboard extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.headersearch}>
          {/* <Text style={styles.title}>Library</Text> */}
          <Item style={styles.inputsearch}>
            <Button>
              <Image
                source={search}
                style={{width: 20, height: 20, marginLeft: 10}}
              />
            </Button>
            <Input
              style={{fontFamily: 'sans-serif'}}
              placeholder="Search Books"
            />
          </Item>
        </Header>

        <TouchableOpacity>
          <Card style={styles.cardcontainer}>
            <CardItem style={styles.carditemcontainer1}>
              <Left>
                <Text style={styles.cardtext}>chronicle</Text>
              </Left>
              <Image style={styles.imagecard} source={bg} />
            </CardItem>
          </Card>
        </TouchableOpacity>

        {/* <TouchableOpacity>
          <Card style={styles.cardcontainer}>
            <CardItem style={styles.carditemcontainer2}>
              <Left>
                <Text style={styles.cardtext}>education</Text>
              </Left>
              <Image style={styles.imagecard} source={bg} />
            </CardItem>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card style={styles.cardcontainer}>
            <CardItem style={styles.carditemcontainer3}>
              <Left>
                <Text style={styles.cardtext}>solace</Text>
              </Left>
              <Image style={styles.imagecard} source={bg} />
            </CardItem>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card style={styles.cardcontainer}>
            <CardItem style={styles.carditemcontainer2}>
              <Left>
                <Text style={styles.cardtext}>fantasy</Text>
              </Left>
              <Image style={styles.imagecard} source={bg} />
            </CardItem>
          </Card>
        </TouchableOpacity> */}
        <Text style={StyleSheet.titlestyle}>List Book</Text>
      </Container>
    );
  }
}
