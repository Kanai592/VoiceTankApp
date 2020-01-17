import React, {Component} from 'react';
import { createStackNavigator} from 'react-navigation-stack'
// import { createStackNavigator } from '@react-navigation/stack';

import Main from './Main'
import ModalExample from './ModalExample'




const MainNavigation = createStackNavigator(
  {
    Main: { screen: Main },
    Modal: { screen: ModalExample },
  },
  {initialRouteName: 'Main', mode: 'card', headerMode: 'none'}
)


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <MainNavigation />
    );
  }
}