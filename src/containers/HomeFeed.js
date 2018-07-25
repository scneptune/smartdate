import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { FormLabel, FormInput, FormValidationMessage, Button, Card } from 'react-native-elements';
import firebase from 'react-native-firebase';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomeFeed extends Component {
  _signOut = () => {
    firebase.auth().signOut()
      .then(() => navigation.navigate("Login"))
      .catch(error => console.warn(error))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome You've Logged into Third Act!</Text>
        <Text style={styles.instructions}>To get started, edit this file </Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button onPress={this._signOut} title="Sign out" />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});