import React, {Component} from 'react';

import { View, Text, StyleSheet, Button, TextInput, } from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';






class Modal extends React.Component {


    render(){
    return(


         <View style={styles.container}>
    
            <View style={styles.appbar}>

            <View>
           
             <Text style={styles.appbartitle}> 評価</Text>
           
            </View>
           
        </View>

        <View style={styles.evaluationboxheader}>
           <View><Text style={styles.evaluationboxtitle}>評価基準メモ</Text></View>
             </View> 
    
          <View style={styles.evaluationbox}>
   
          
          
             <View style={styles.evaluations}>

             <TouchableOpacity style={styles.buttonAplus}
                               activeOpacity={0.2} 
                               onPress={()=>{}}>

             <View><Text style={styles.Aplus}>A+</Text></View>
    
             </TouchableOpacity>

             <TouchableOpacity style={styles.buttonA}
                               activeOpacity={0.2} 
                               onPress={()=>{}}>

             <View><Text style={styles.A}>A</Text></View>
    
             </TouchableOpacity>

             <TouchableOpacity style={styles.buttonB}
                               activeOpacity={0.2} 
                               onPress={()=>{}}>

             <View><Text style={styles.B}>B</Text></View>
    
             </TouchableOpacity>
            

             <TouchableOpacity style={styles.buttonC}
                               activeOpacity={0.2} 
                               onPress={()=>{}}>

             <View><Text style={styles.B}>C</Text></View>
    
             </TouchableOpacity>


             <TouchableOpacity style={styles.buttonD}
                               activeOpacity={0.2} 
                               onPress={()=>{}}>

             <View><Text style={styles.B}>D</Text></View>
    
             </TouchableOpacity>
            
            
 



    
                </View>
    
    
                <View style={styles.notebox}>
                <TextInput style={{ height: 35, borderColor: 'gray', borderWidth: 1 }}></TextInput>
                <TextInput style={{ height: 35, borderColor: 'gray', borderWidth: 1 }}></TextInput>
                <TextInput style={{ height: 35, borderColor: 'gray', borderWidth: 1 }}></TextInput>
                <TextInput style={{ height: 35, borderColor: 'gray', borderWidth: 1 }}></TextInput>
                
                  
                <TouchableOpacity style={styles.buttonabsent}
                               activeOpacity={0.2} 
                               onPress={()=>{}}>

             <View><Text style={styles.absent}>欠席(absent)</Text></View>
    
             </TouchableOpacity>
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
    }


const styles = StyleSheet.create({

    container:{
               justifyContent:'center',
               padding:8
             },
          
    appbar:{ 
    alignItems: 'center',
    justifyContent:'center',
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
    
      color:'black',
      fontSize:18
    },
  
    evaluationboxheader:{
      // position:'',
      padding:20,
      marginBottom:10

    },

    evaluationboxtitle:{
      position:'absolute',
      fontSize:15
    },

     evaluationbox:  {
      
       flexDirection: 'row',
       maxWidth:'100%',
       justifyContent: 'space-around',
       padding:20,
       
      
      },
  

    // オレンジ評価ボタンのスタイリング
      buttonAplus:{

      alignItems: 'center',
      justifyContent:'center',
      width:35,
      height:35,
      backgroundColor:'orange',
      margin:2

      },

      Aplus:{
        fontSize:18,
        color:"black"
      },

      buttonA:{

        alignItems: 'center',
        justifyContent:'center',
        width:35,
        height:35,
        backgroundColor:'orange',
        margin:2
  
        },
  
        A:{
          fontSize:18,
          color:"black"
        },

        buttonB:{

          alignItems: 'center',
          justifyContent:'center',
          width:35,
          height:35,
          backgroundColor:'orange',
          margin:2
    
          },
    
          B:{
            fontSize:18,
            color:"black"
          },


          buttonC:{

            alignItems: 'center',
            justifyContent:'center',
            width:35,
            height:35,
            backgroundColor:'orange',
            margin:2
            },
      
            C:{
              fontSize:18,
              color:"black"
            },


            buttonD:{

            alignItems: 'center',
            justifyContent:'center',
            width:35,
            height:35,
            backgroundColor:'orange',
            margin:2
        
            },
        
              D:{
                fontSize:18,
                color:"black"
              },
    
　　　　// 欠席ボタン

            attendancebox:{
                flexDirection: 'row',
              },

            buttonabsent:{

              alignItems: 'center',
              justifyContent:'center',
              width:197,
              height:35,
              backgroundColor:'lightblue',
              margin:2
              },

  
           absent:{

            fontSize:18,
            color:'blue',
            margin:2    
              
            },


        
// 　評価基準メモ
  
      notebox:{
      flexDirection: 'column',
       width:200,
       justifyContent: 'space-between',
       padding:1
      },
  

// 生徒情報
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
  
  // 録音機能
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




export default Modal;