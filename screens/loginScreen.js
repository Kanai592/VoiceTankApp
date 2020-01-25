import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, TextInput, } from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

import{ createStackNavigator} from 'react-navigation-stack';

class LoginScreen extends React.Component {
 
    

    render(){
    return(

        <View style={styles.container}> 
           <Text>
            ログイン
           </Text>
        

           <TextInput style={styles.input} value="Email Address"/>
           <TextInput style={styles.input} value="Password"/>
     
     
            <TouchableHighlight style ={styles.button} 
                                onPress={()=>
            {this.props.navigation.navigate({routeName:'Main'});
             }}>
            <Button style={styles.buttontitle}>送信</Button>
            </TouchableHighlight>


        </View>
    

    );

            }
        }
    const styles = StyleSheet.create({

            container:{
                flex:1,
                width:'100%'

            },
        });




export default LoginScreen;