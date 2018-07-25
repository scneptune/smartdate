import {
  StackNavigator,
  TabNavigator,
  createSwitchNavigator
} from "react-navigation";

import React from 'react';
import { Platform, StatusBar } from 'react-native';


import WelcomeSplash from 'containers/WelcomeSplash';
import LoadingScreen from 'containers/LoadingScreen';
import HomeFeed from 'containers/HomeFeed';

const createRootNavigator = (isSignedIn = false) => {

  return createSwitchNavigator(
    {
      Login: {
        screen: WelcomeSplash
      },
      Loading: {
        screen: LoadingScreen
      },
      // Register: {
      //   screen: Register
      // },
      Home: {
        screen: HomeFeed
      }
    },
    {
      initialRouteName: LoadingScreen
    }
  );
};

export default createRootNavigator;
