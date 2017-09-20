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

const URL = 'https://jsonplaceholder.typicode.com/users';

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

  getUsers() {
    return fetch(URL)
      .then(response => response.json())
  }

  render() {
    let display = this.state.showText ? 'React Native' : 'BootCamp';
    let data = this.getUsers();
    console.warn(data);
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

        <Text>
          {data}
        </Text>

        <FlatList
          data={data}
          renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
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
    color: 'red',
  }
});

AppRegistry.registerComponent('reactnativeBootcamp', () => reactnativeBootcamp);
