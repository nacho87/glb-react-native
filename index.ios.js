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
  Button
} from 'react-native';

export default class reactnativeBootcamp extends Component {

  constructor(props) {
    super(props);
    this.state = {showText: true};
  }

  toggleText = () => { 
    this.setState({
      showText: !this.state.showText
    });
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
