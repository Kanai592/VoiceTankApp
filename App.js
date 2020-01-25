import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { StackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from './screens/Main';
import ModalExample from './screens/ModalExample'
import LoginScreen from './screens/LoginScreen'

// import {firebase} from 'firebase'



const MainNavigation = createStackNavigator({
  　Login:{ screen: LoginScreen },
    Main: { screen: Main },
    Modal: { screen: ModalExample },
  },

  {initialRouteName: 'Main', mode: 'card', headerMode: 'none'

});

export default createAppContainer(MainNavigation);
