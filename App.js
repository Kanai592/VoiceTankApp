import React from 'react';
import firebase from 'firebase';


// require("firebase/firestore");



import{ StyleSheet, View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './screens/Main';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Modal from './screens/Modal';

import ENV from './env.json';



const firebaseConfig = {
  apiKey:             ENV.FIREBASE_API_KEY,
  authDomain:         ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:        ENV.FIREBASE_DB_URL,
  projectId:          ENV.FIREBASE_PROJECT_ID,
  storageBucket:      ENV.FIREBASE_STORAGE,
  messagingSenderId:  ENV.FIREBASE_SENDER_ID,
  appId:              ENV.FIREBASE__APP_ID,
  measurementId:      ENV.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);



const App = createStackNavigator({

  Login:{ screen: LoginScreen },
  Main:{ screen: Main},
  Login:{ screen: LoginScreen },
  Signup:{ screen: SignupScreen },
     
   
   
    Modal:{ screen: Modal,
    navigationOptions: {
      headerShown: true,
    },
    
    },

},{
    defaultNavigationOptions:{ 
    // headerTitle:'Voice Tank',
    headerTintColor:'#888888',
    headerBackTitle: null,
    headerStyle:{
    backgroundColor:'#77EEFF',
    },
  },
} );

    export default createAppContainer(App);