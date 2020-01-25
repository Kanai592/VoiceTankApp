import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, TextInput, } from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

import{ createStackNavigator} from 'react-navigation-stack';

class SignupScreen extends React.Component {
 

    render(){
    return(

        <View style={styles.container}> 
           <Text style={styles.title}> 
            メンバー登録画面
           </Text>
        

           <TextInput style={styles.input} value="Email Address"/>
           <TextInput style={styles.input} value="Password"/>
     
     
            <TouchableOpacity style ={styles.button} 
                                onPress={()=>{
              props.navigation.navigate({routeName:'Main'});
             }}> 
                
                <View><Text style={styles.buttontitle}>送信する</Text></View>

            </TouchableOpacity>
            
          


        </View>
    

            );

            }
            }
    const styles = StyleSheet.create({

            container:{
                flex:1,
                width:'100%',
                backgroundColor:'#77EEFF'

            },

            input:{
                backgroundColor:'#fff',
                height:48,
                marginBottom:16,
                borderColor:'#fff',
                borderWidth:1,
                padding:8,
                borderRadius:14,
            },
            title:{
                fontSize:24,
                alignSelf:'center',
                marginBottom: 24,
            },

            button:{

                backgroundColor:'#fff',
                height:48,
                borderRadius:14,
                justifyContent:'center',
                alignItems:'center'

            },

            buttontitle:{
                color:'grey',
                fontSize:20
            


            }
            


        });




export default SignupScreen;