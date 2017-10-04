/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// const URL = 'https://jsonplaceholder.typicode.com/users';

class reactnativeBootcamp extends Component {
	static navigationOptions = {
		title: 'Home',
	};

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
	const { navigate } = this.props.navigation;

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
          renderItem={
          	({item}) => 
          	<Text 
          		onPress={() => navigate('Single', {user: item})}
          		style={styles.item}>{item.name}</Text>
          }
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


class SingleUser extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.user.name,
    headerTitleStyle: styles.text,
  });

  render() {

  	const { user } = this.props.navigation.state.params;
    return (
      <View>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
      </View>
    );
  }
}

export const SimpleApp = StackNavigator({
  Home: { screen: reactnativeBootcamp },
  Single: { screen: SingleUser },
});
