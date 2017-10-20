/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import  MyHomeScreen  from './home';
import  MyNotificationScreen  from './notification';
import  { StackPage }  from './user';

export const SimpleApp = TabNavigator({
  Home: { 
    screen: MyHomeScreen 
  },
  Notifications: {
    screen: MyNotificationScreen
  },
  Single: { 
    screen: StackPage 
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});
