import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

import { googleLogin } from 'libs/google_auth'

import Icon from 'react-native-vector-icons';

import firebase from 'react-native-firebase';

export default class WelcomeSplash extends Component {
  constructor(props) {
    super(props);
  }
  _signIn = () => googleLogin()
  render() {
    return <View style={stylesheet.container}>
      <GoogleSigninButton
        style={{ width: 48, height: 48 }}
        size={GoogleSigninButton.Size.Icon}
        color={GoogleSigninButton.Color.Dark}
        onPress={this._signIn} />
    </View>
  }
}

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
