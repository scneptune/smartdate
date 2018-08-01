import React, { Component } from 'react'

import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import firebase from 'react-native-firebase';

export default class Loading extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    setTimeout(() => firebase.auth().onAuthStateChanged(
      user => this.props.navigation.navigate(user ? 'Home' : 'Login')
    ), 500);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading your Third Act ...</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
