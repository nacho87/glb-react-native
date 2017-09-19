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
  View
} from 'react-native';

export default class reactnativeBootcamp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Hello
        </Text>
        <Text style={styles.text}>
          World
        </Text>
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
  }
});

AppRegistry.registerComponent('reactnativeBootcamp', () => reactnativeBootcamp);
