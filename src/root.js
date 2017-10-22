/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { SimpleApp } from './index';
import { DrawerNavigatorHome } from './drawer';



class Root extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('TabNavigator')}
          title="Tab Navigator"
        />

       <Button
          onPress={() => this.props.navigation.navigate('DrawerNavigatorPage')}
          title="Drawer Navigator"
        />
      </View>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});



export const RootStack = StackNavigator({
  RootPage: {
    screen: Root
  },
  TabNavigator: { 
    screen: SimpleApp 
  },
  DrawerNavigatorPage: {
    screen: DrawerNavigatorHome
  }
});
