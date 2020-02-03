import React, {Component} from 'react';
import firebase from 'firebase';
import { View, Text, StyleSheet, Image, TextInput, } from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';






class LoginScreen extends React.Component {
 





    state = {
      email:'',
      password:'',

    }


    handleSubmit(){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)

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
                
                <View><Text style={styles.buttontitle}>ログイン</Text></View>

            </TouchableOpacity>


            <TouchableOpacity style ={styles.signupbutton} 
                                onPress={() => {
                                this.props.navigation
                                .navigate({routeName:'Signup'});
                                 }}>
                
                <View><Text style={styles.buttontitle}>今すぐ始める！（登録する）</Text></View>

            </TouchableOpacity>
            

            <View style ={styles.image}>
            <Image style={{ width: 310, height: 310 , opacity:0.7, }} 
                   source={require('../assets/images/speaking.png')}

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
                padding:15
                // justifyContent:'center',

            },

            input:{
                backgroundColor:'#fff',
                height:48,
                width:290,
                justifyContent:'center',
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
                justifyContent:'center',
                marginBottom:16,
                borderRadius:14,
                justifyContent:'center',
                alignItems:'center',
                padding:8,

            },

            buttontitle:{
                color:'grey',
                fontSize:20,
                padding:10,
            


            },

            signupbutton:{
               
                backgroundColor:'#DDDDDD',
                height:48,
                width:290,
                justifyContent:'center',
                borderRadius:14,
                alignItems:'center',


            },

            buttontitle:{
                color:'grey',
                fontSize:20,
                padding:10,
                

            },

            image:{
                flex:1,
                bottom:225,
                left:315,

            },



           
            


        });




export default LoginScreen;