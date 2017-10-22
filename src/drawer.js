import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';


class Drawer extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>
          Drawer Home
        </Text>

        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Open Drawer"
        />
      </View>
    )
  }
}

class Drawer1 extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>
          Drawer Page 1
        </Text>
      </View>
    )
  }
}

class Drawer2 extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>
          Drawer Page 2
        </Text>
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


export const DrawerNavigatorHome = DrawerNavigator({
  DrawerHome: {
    screen: Drawer,
  },
  DrawerPage1: {
    screen: Drawer1,
  },
  DrawerPage2: {
    screen: Drawer2
  }
});
