import{ StyleSheet, View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './screens/Main';
import ModalExample from './screens/ModalExample';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';





const App = createStackNavigator({
  Login:{ screen: LoginScreen },  
  Main:{ screen: Main},
    Modal: { screen: ModalExample },
    
    Signup:{ screen: SignupScreen },
    
},{
    defaultnavigationOption:{ 
    headerTitle:'Voice Tank',
    headerTitleStyle:{
    backgroundColor:'#77EEFF',
    },
  },
} );

    export default createAppContainer(App);