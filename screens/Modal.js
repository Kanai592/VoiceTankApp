import React, {Component} from 'react';

import { View, Text, StyleSheet, Button, TextInput, Modal } from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
// import firebase from 'firebase'
import axios from 'axios';

const baseRequest = axios.create({
  baseURL: 'https://us-central1-voice-tank-app.cloudfunctions.net/v1',
  responseType: 'json',
})

class Modals extends React.Component {
  // TODO:　表示時にすでに登録された評価を取得して、画面の色を塗るなりする
  constructor(props) {
    super(props);
    const { studentNumber } = props.navigation.state.params
    this.state = {
      studentName: "",
      studentNumber: studentNumber
    };
  }

  componentWillMount() {
    // api call(生徒取得)
    baseRequest
      .get('/classes/1/students/' + this.state.studentNumber)
      .then( res => {
        this.setState({ studentName: res.data[0].data.name});
      })
      .catch( error => {
        console.log(error.response);
      });
  
  }





  pointPress(pointText) {
    const class_id = "1";
    const student_number = this.state.studentNumber;

    var url = "/classes/" + class_id + "/students/" + student_number;

    baseRequest
    .post(url, {point: pointText})
      .then( res => {
        console.log(res.data);
      })
      .catch( error => {
        console.log(error.response);
      });
  }

  

  doNotWork() {
    alert('まだ作ってません');
  }

  render() {
  return(
      < Modal 
        animationType="slide"
        transparent={false}
        presentationStyle="pageSheet"
      >
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
                                onPress={this.pointPress.bind(this, 'A+')}>
                <View>
                  <Text style={styles.Aplus}>A+</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonA}
                                activeOpacity={0.2} 
                                onPress={this.pointPress.bind(this, 'A')}>
                <View><Text style={styles.A}>A</Text></View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonB}
                                activeOpacity={0.2} 
                                onPress={this.pointPress.bind(this, 'B')}>
                <View><Text style={styles.B}>B</Text></View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonC}
                                activeOpacity={0.2} 
                                onPress={this.pointPress.bind(this, 'C')}>
                <View><Text style={styles.B}>C</Text></View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonD}
                                activeOpacity={0.2} 
                                onPress={this.pointPress.bind(this, 'D')}>
                <View><Text style={styles.B}>D</Text></View>
              </TouchableOpacity>
            </View>

            <View style={styles.notebox}>
              <Text style={{ height: 35, fontSize:18, marginTop:5 }}>Excellent!</Text>
              <Text style={{ height: 35, fontSize:18, marginTop:5 }}>Great!</Text>
              <Text style={{ height: 35, fontSize:18, marginTop:5 }}>Good!</Text>
              <Text style={{ height: 35, fontSize:18, marginTop:5 }}>Need more effort.</Text>
              
              <TouchableOpacity style={styles.buttonabsent}
                                activeOpacity={0.2} 
                                onPress={this.doNotWork.bind(this)}>
                <View><Text style={styles.absent}>欠席(absent)</Text></View>
              </TouchableOpacity>
            </View>
          </View>

          {/* ここから生徒情報 */}
          <View style={styles.studentname}>
  <View><Text style={styles.studentnametitle}>#{this.state.studentNumber}   {this.state.studentName}</Text></View>
          </View>

          <View style={styles.recordingbox}>
            <View>
              <Button title="🎤" onPress={this.doNotWork.bind(this)}/>
              <Text style={styles.micophoneicon}>Tap to Record</Text>
            </View>
          </View>
        </View> 
    </Modal>
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
                height:120,
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
                fontSize:15,
            
    }

});


export default Modals;