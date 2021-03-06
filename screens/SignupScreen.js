import React, {Component} from 'react';
import firebase from 'firebase';

import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

import{ createStackNavigator} from 'react-navigation-stack';

class SignupScreen extends React.Component {
 

    state = {
        email:'',
        password:'',
  
      }

      handleSubmit(){

        // signupの処理！
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)

        .then((error)=>{
        this.props.navigation.navigate('Main')
        console.log(success);
        
        })
        .catch((error)=>{
        console.log(error);
        });

    }





    render(){
    return(

        <View style={styles.container}> 
           {/* <Text style={styles.title}> 
            メンバー登録画面
           </Text> */}
        

           <TextInput style={styles.input} 
                      value ={this.state.email} 
                      onChangeText={(text)=>{this.setState({email:text});}}
                      autoCapitalize='none'
                      autoCorrect={false}
                      placeholder="Email Adress"
                      />

           <TextInput style={styles.input} 
                      value ={this.state.password}
                      onChangeText={(text)=>{this.setState({password:text});}}
                      autoCapitalize='none'
                      autoCorrect={false}
                      placeholder="Password"
                      secureTextEntry
                      />
     
     
            <TouchableOpacity style ={styles.button} 
                                onPress={this.handleSubmit.bind(this)}> 
                
                <View><Text style={styles.buttontitle}>送信する</Text></View>

            </TouchableOpacity>

            <View style ={styles.image}>

            <Image style={{ width: 350, height: 350 , opacity:0.7, }} 
                   source={require('../assets/images/replying.png')}

                   />


            </View>
                   
            
          


        </View>
    

            );

            }
            }
    const styles = StyleSheet.create({

            container:{
                flex:1,
                width:'100%',
                backgroundColor:'#4BDAE0',
                padding:15,

            },

            input:{
                backgroundColor:'#fff',
                height:48,
                width:290,
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
                width:290,
                borderRadius:14,
                justifyContent:'center',
                alignItems:'center'

            },

            buttontitle:{
                color:'grey',
                fontSize:20
            


            },

            image:{
                flex:1,
                bottom:195,
                left:300,
                


            }
            


        });




export default SignupScreen;