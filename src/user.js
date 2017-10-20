import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class reactnativeBootcamp extends Component {
  static navigationOptions = {
    title: 'Users',
    tabBarLabel: 'Users',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./images/user.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
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
              onPress={() => navigate('SingleUserPage', {user: item})}
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
    tabBarLabel: 'Users',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./images/user.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  });

  render() {

   const { user } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
      </View>
    );
  }
}

export const StackPage = StackNavigator({
  AllUsersPage: { 
    screen: reactnativeBootcamp 
  },
  SingleUserPage: {
    screen: SingleUser
  }
});
