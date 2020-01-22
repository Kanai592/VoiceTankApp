import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

import{ createStackNavigator} from 'react-navigation-stack';



const ModalExample = props =>{
        return (
         <View style={styles.container}>
    
    
            <View style={styles.appbar}>
    
            <View><Text style={styles.appbartitle}>評価</Text></View>
            </View>
    
         
    
          <View style={styles.evaluationbox}>


          <Button title="< Back" onPress={()=> {
              props.navigation.navigate({routeName:'Main'});
              }}/>


          <View><Text style={styles.evaluationboxtitle}>評価基準メモ</Text></View>
    
          
             <View style={styles.evaluations}>
                <Button title="A+" onPress={()=>{}}/>
    
                <Button title="A" onPress={()=>{}}/>
    
                <Button title="B" onPress={()=>{}}/>
    
                <Button title="C" onPress={()=>{}}/>
    
                <Button title="D" onPress={()=>{}}/>
    
                </View>
    
    
                <View style={styles.notebox}>
                <TextInput style={{ height: 35, borderColor: 'gray', borderWidth: 1 }}></TextInput>
                <TextInput style={{ height: 35, borderColor: 'gray', borderWidth: 1 }}></TextInput>
                <TextInput style={{ height: 35, borderColor: 'gray', borderWidth: 1 }}></TextInput>
                <TextInput style={{ height: 35, borderColor: 'gray', borderWidth: 1 }}></TextInput>
                
                  <View style={styles.attendancebox}>
                  <Button title="欠席" onPress={()=>{}}/>
    
                  <Button title="出席" onPress={()=>{}}/>
                  </View>
                </View>
                
      
     
    
          </View>
    
          {/* ここから生徒情報 */}
              <View style={styles.studentname}>
          
             <View><Text style={styles.studentnametitle}>#07   叶　隆之介</Text></View>
    
             </View>
    
             <View style={styles.recordingbox}>
          
              <View>
               
               <Button title="🎤" onPress={()=>{}}/>
               <Text style={styles.micophoneicon}>Tap to Record</Text>
              </View>
    
          </View>
    
          
    
          </View>
    
          
    
          
    
    
    
        );
      }

const styles = StyleSheet.create({

     container:{
       justifyContent:'center',
       padding:1
     },
  
     appbar:{ 
       position: 'relative',
       backgroundColor:'white',
       height:50,
       padding:2,
       justifyContent:'center',
       shadowColor:'black',
       shadowOffset:{width:0, height:2},
       shadowOpacity:0.3,
       shadowRadius:6,
    },
  
    appbartitle:{
      textAlign: 'center',
      color:'black',
      fontSize:18
    },
  
     evaluationbox:  {
      
       flexDirection: 'row',
       maxWidth:'90%',
       justifyContent: 'space-around',
       padding:20
      
      },
  
      evaluationboxtitle:{
        position:'absolute',
       
  
      },
  
      notebox:{
      flexDirection: 'column',
       maxWidth:'90%',
       justifyContent: 'space-between',
       padding:20
      },
  
      attendancebox:{
        flexDirection: 'row',
      },
  
      studentname:{
        position: 'relative',
        backgroundColor:'white',
        height:50,
        padding:2,
        justifyContent:'center',
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.3,
        shadowRadius:6,
      },
  
      studentnametitle:{
        textAlign: 'center',
        color:'black',
        fontSize:18
      },
  
  
      recordingbox:{
        position: 'relative',
        backgroundColor:'white',
        height:100,
        padding:2,
        justifyContent:'center',
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.3,
        shadowRadius:6,
  
      },
  
      micophoneicon:{
        textAlign: 'center',
        color:'black',
        fontSize:18
      }
  
  });
  
  

  export default ModalExample;