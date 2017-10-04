/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';

// const URL = 'https://jsonplaceholder.typicode.com/users';

export default class reactnativeBootcamp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showText: true
    };
  }

  toggleText = () => { 
    this.setState({
      showText: !this.state.showText
    });
  }

  // getUsers() {
  //   return fetch(URL)
  //     .then(response => {
  //       console.warn(JSON.stringify(response.json()))
  //       this.setState({users: response.json()})
  //     })

  // }

  getUsers() {
      return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((responseJson) => {
          return this.setState({users: responseJson})
        })
        .catch((error) => {
          console.error(error);
        });
    }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    let display = this.state.showText ? 'React Native' : 'BootCamp';
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Hello
        </Text>
        <Text style={styles.text}>
          World
        </Text>
        <Button
          onPress={this.toggleText}
          title={display}
        />

        <FlatList
          data={this.state.users}
          renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    color: 'blue',
  },
  item: {
    flex: 1,
    color: 'red',
  }
});

AppRegistry.registerComponent('reactnativeBootcamp', () => reactnativeBootcamp);
