
// import React, { Component } from 'react';
// import { Button, PermissionsAndroid, Platform, SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
// import Slider from '@react-native-community/slider';
// import { Player, Recorder, MediaStates } from '@react-native-community/audio-toolkit';



// import { TextInput, Image, Modal } from 'react-native';
// import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
// // import firebase from 'firebase'
// import axios from 'axios';



// const baseRequest = axios.create({
//     baseURL: 'https://us-central1-voice-tank-app.cloudfunctions.net/v1',
//     responseType: 'json',
//   })

// //   constructor(props) {
// //     super(props);
// //     const { studentNumber } = props.navigation.state.params
// //     this.state = {
// //       studentName: "",
// //       studentNumber: studentNumber
// //     };
// //   }

// //   componentWillMount() {
// //     // api call(生徒取得)
// //     baseRequest
// //       .get('/classes/1/students/' + this.state.studentNumber)
// //       .then( res => {
// //         this.setState({ studentName: res.data[0].data.name});
// //       })
// //       .catch( error => {
// //         console.log(error.response);
// //       });
  
// //   }





// //   pointPress(pointText) {
// //     const class_id = "1";
// //     const student_number = this.state.studentNumber;

// //     var url = "/classes/" + class_id + "/students/" + student_number;

// //     baseRequest
// //     .post(url, {point: pointText})
// //       .then( res => {
// //         console.log(res.data);
// //       })
// //       .catch( error => {
// //         console.log(error.response);
// //       });
// //   }

  

// //   doNotWork() {
// //     alert('まだ作ってません');
// //   }






//   render() {
//     return(
  
  
  
  
//         < Modal 
//           animationType="slide"
//           transparent={false}
//           presentationStyle="pageSheet"
//         >
//           <View style={styles.container}>
//             <View style={styles.appbar}>
//               <View>
//                 <Text style={styles.appbartitle}> 評価</Text>
//               </View>  
//             </View>
  
//             <View style={styles.evaluationboxheader}>
//               <View><Text style={styles.evaluationboxtitle}>評価基準メモ</Text></View>
//             </View> 
  
//             <View style={styles.evaluationbox}>
//               <View style={styles.evaluations}>
//                 <TouchableOpacity style={styles.buttonAplus} 
//                                   activeOpacity={0.2}
//                                   onPress={this.pointPress.bind(this, 'A+')}>
//                   <View>
//                     <Text style={styles.Aplus}>A+</Text>
//                   </View>
//                 </TouchableOpacity>
  
//                 <TouchableOpacity style={styles.buttonA}
//                                   activeOpacity={0.2} 
//                                   onPress={this.pointPress.bind(this, 'A')}>
//                   <View><Text style={styles.A}>A</Text></View>
//                 </TouchableOpacity>
  
//                 <TouchableOpacity style={styles.buttonB}
//                                   activeOpacity={0.2} 
//                                   onPress={this.pointPress.bind(this, 'B')}>
//                   <View><Text style={styles.B}>B</Text></View>
//                 </TouchableOpacity>
  
//                 <TouchableOpacity style={styles.buttonC}
//                                   activeOpacity={0.2} 
//                                   onPress={this.pointPress.bind(this, 'C')}>
//                   <View><Text style={styles.B}>C</Text></View>
//                 </TouchableOpacity>
  
//                 <TouchableOpacity style={styles.buttonD}
//                                   activeOpacity={0.2} 
//                                   onPress={this.pointPress.bind(this, 'D')}>
//                   <View><Text style={styles.B}>D</Text></View>
//                 </TouchableOpacity>
//               </View>
  
//               <View style={styles.notebox}>
//                 <Text style={{ height: 35, fontSize:18, marginTop:5 }}>Excellent! &nbsp;&nbsp;~ができる</Text>
//                 <Text style={{ height: 35, fontSize:18, marginTop:5 }}>Great! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~ができる</Text>
//                 <Text style={{ height: 35, fontSize:18, marginTop:5 }}>Good! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~ができる</Text>
//                 <Text style={{ height: 35, fontSize:18, marginTop:5 }}>努力が必要</Text>
                
//                 <TouchableOpacity style={styles.buttonabsent}
//                                   activeOpacity={0.2} 
//                                   onPress={this.doNotWork.bind(this)}>
//                   <View><Text style={styles.absent}>欠席(absent)</Text></View>
//                 </TouchableOpacity>
//               </View>
//             </View>
  
//             {/* ここから生徒情報 */}
//             <View style={styles.studentname}>
//     <View><Text style={styles.studentnametitle}>#{this.state.studentNumber}   {this.state.studentName}</Text></View>
//             </View>
  
//             <View style={styles.recordingbox}>
//               <View style={styles.microphone}> 
//               <View>
//                  <Image style={{ width: 80, height: 78, }} 
//                      source={require('../assets/images/microphone.png')}
//                     />
//                 {/* <Button title="🎤" onPress={this.doNotWork.bind(this)}/> */}
//                 <Text style={styles.micophoneicon}>Tap to Record</Text>
//                 </View>
//               </View>
//             </View>
//           </View> 
//       </Modal>
//     );
//     }
//   }



// // ここから録音機能


// const filename = 'test.mp4';

// type Props = {};

// type State = {
//   playPauseButton: string,
//   recordButton: string,

//   stopButtonDisabled: boolean,
//   playButtonDisabled: boolean,
//   recordButtonDisabled: boolean,

//   loopButtonStatus: boolean,
//   progress: number,

//   error: string | null
// };

// export default class RecordingScreen extends Component<Props, State> {
//   player: Player | null;
//   recorder: Recorder | null;
//   lastSeek: number;
//   _progressInterval: IntervalID;

//   constructor(props: Props) {
//     super(props);

//     this.state = {
//       playPauseButton: 'Preparing...',
//       recordButton: 'Preparing...',

//       stopButtonDisabled: true,
//       playButtonDisabled: true,
//       recordButtonDisabled: true,

//       loopButtonStatus: false,
//       progress: 0,

//       error: null
//     };
//   }

//   componentWillMount() {
//     this.player = null;
//     this.recorder = null;
//     this.lastSeek = 0;

//     this._reloadPlayer();
//     this._reloadRecorder();

//     this._progressInterval = setInterval(() => {
//       if (this.player && this._shouldUpdateProgressBar()) {
//         let currentProgress = Math.max(0, this.player.currentTime) / this.player.duration;
//         if (isNaN(currentProgress)) {
//           currentProgress = 0;
//         }
//         this.setState({ progress: currentProgress });
//       }
//     }, 100);
//   }

//   componentWillUnmount() {
//     clearInterval(this._progressInterval);
//   }

//   _shouldUpdateProgressBar() {
//     // Debounce progress bar update by 200 ms
//     return Date.now() - this.lastSeek > 200;
//   }

//   _updateState(err) {
//     this.setState({
//       playPauseButton: this.player && this.player.isPlaying ? 'Pause' : 'Play',
//       recordButton: this.recorder && this.recorder.isRecording ? 'Stop' : 'Record',

//       stopButtonDisabled: !this.player || !this.player.canStop,
//       playButtonDisabled: !this.player || !this.player.canPlay || this.recorder.isRecording,
//       recordButtonDisabled: !this.recorder || (this.player && !this.player.isStopped),
//     });
//   }

//   _playPause() {
//     this.player.playPause((err, paused) => {
//       if (err) {
//         this.setState({
//           error: err.message
//         });
//       }
//       this._updateState();
//     });
//   }

//   _stop() {
//     this.player.stop(() => {
//       this._updateState();
//     });
//   }

//   _seek(percentage) {
//     if (!this.player) {
//       return;
//     }

//     this.lastSeek = Date.now();

//     let position = percentage * this.player.duration;

//     this.player.seek(position, () => {
//       this._updateState();
//     });
//   }

//   _reloadPlayer() {
//     if (this.player) {
//       this.player.destroy();
//     }

//     this.player = new Player(filename, {
//       autoDestroy: false
//     }).prepare((err) => {
//       if (err) {
//         console.log('error at _reloadPlayer():');
//         console.log(err);
//       } else {
//         this.player.looping = this.state.loopButtonStatus;
//       }

//       this._updateState();
//     });

//     this._updateState();

//     this.player.on('ended', () => {
//       this._updateState();
//     });
//     this.player.on('pause', () => {
//       this._updateState();
//     });
//   }

//   _reloadRecorder() {
//     if (this.recorder) {
//       this.recorder.destroy();
//     }

//     this.recorder = new Recorder(filename, {
//       bitrate: 256000,
//       channels: 2,
//       sampleRate: 44100,
//       quality: 'max'
//     });

//     this._updateState();
//   }

//   _toggleRecord() {
//     if (this.player) {
//       this.player.destroy();
//     }

//     let recordAudioRequest;
//     if (Platform.OS == 'android') {
//       recordAudioRequest = this._requestRecordAudioPermission();
//     } else {
//       recordAudioRequest = new Promise(function (resolve, reject) { resolve(true); });
//     }

//     recordAudioRequest.then((hasPermission) => {
//       if (!hasPermission) {
//         this.setState({
//           error: 'Record Audio Permission was denied'
//         });
//         return;
//       }

//       this.recorder.toggleRecord((err, stopped) => {
//         if (err) {
//           this.setState({
//             error: err.message
//           });
//         }
//         if (stopped) {
//           this._reloadPlayer();
//           this._reloadRecorder();
//         }

//         this._updateState();
//       });
//     });
//   }

//   async _requestRecordAudioPermission() {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//         {
//           title: 'Microphone Permission',
//           message: 'ExampleApp needs access to your microphone to test react-native-audio-toolkit.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         return true;
//       } else {
//         return false;
//       }
//     } catch (err) {
//       console.error(err);
//       return false;
//     }
//   }

//   _toggleLooping(value) {
//     this.setState({
//       loopButtonStatus: value
//     });
//     if (this.player) {
//       this.player.looping = value;
//     }
//   }

//   render() {
//     return (
//       <View>
    
//         <View>
//         <Text style={styles.title}>
//             30.06s
//           </Text>
//         </View>

//         <TouchableOpacity style={styles.buttonRecord}
//                                 activeOpacity={0.2} >
//         <View>
//           <Button title={this.state.recordButton} disabled={this.state.recordButtonDisabled} onPress={() => this._toggleRecord()} />
//         </View>
//         </TouchableOpacity>

//         <View>
//           <Text style={styles.errorMessage}>{this.state.error}</Text>
//         </View>

//         <View >
//           <Button title={this.state.playPauseButton} disabled={this.state.playButtonDisabled} onPress={() => this._playPause()} />
//           <Button title={'Stop'} disabled={this.state.stopButtonDisabled} onPress={() => this._stop()} />
//         </View>

//         {/* スライダー */}
//         <View style={styles.slider}>
//           <Slider step={0.0001} disabled={this.state.playButtonDisabled} onValueChange={(percentage) => this._seek(percentage)} value={this.state.progress} />
//         </View>
  
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   slider: {
//     height: 10,
//     margin: 10,
//     marginBottom: 50,
//   },
//   settingsContainer: {
//     alignItems: 'center',
//   },
//   container: {
//     borderRadius: 4,
//     borderWidth: 0.5,
//     borderColor: '#d6d7da',
//   },
//   title: {
//     fontSize: 19,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     padding: 20,
//   },
//   errorMessage: {
//     fontSize: 15,
//     textAlign: 'center',
//     padding: 10,
//     color: 'red'
//   },

//   buttonRecord: {
//     backgroundColor: "lightblue",
//     padding: 10,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: "lightblue",
//     overflow: "hidden"
// },

// // ここから録音機能分

// container:{
//     justifyContent:'center',
//     padding:8
//   },

// appbar:{ 
// alignItems: 'center',
// justifyContent:'center',
// backgroundColor:'white',
// height:50,
// padding:2,
// justifyContent:'center',
// shadowColor:'black',
// shadowOffset:{width:0, height:2},
// shadowOpacity:0.3,
// shadowRadius:6,

// },


// appbartitle:{

// color:'black',
// fontSize:18
// },

// evaluationboxheader:{
// // position:'',
// padding:20,
// marginBottom:10

// },

// evaluationboxtitle:{
// position:'absolute',
// fontSize:15
// },

// evaluationbox:  {

// flexDirection: 'row',
// maxWidth:'100%',
// justifyContent: 'space-around',
// padding:20,


// },


// // オレンジ評価ボタンのスタイリング
// buttonAplus:{

// alignItems: 'center',
// justifyContent:'center',
// width:35,
// height:35,
// backgroundColor:'orange',
// margin:2

// },

// Aplus:{
// fontSize:18,
// color:"black"
// },

// buttonA:{

// alignItems: 'center',
// justifyContent:'center',
// width:35,
// height:35,
// backgroundColor:'orange',
// margin:2

// },

// A:{
// fontSize:18,
// color:"black"
// },

// buttonB:{

// alignItems: 'center',
// justifyContent:'center',
// width:35,
// height:35,
// backgroundColor:'orange',
// margin:2

// },

// B:{
//  fontSize:18,
//  color:"black"
// },


// buttonC:{

//  alignItems: 'center',
//  justifyContent:'center',
//  width:35,
//  height:35,
//  backgroundColor:'orange',
//  margin:2
//  },

//  C:{
//    fontSize:18,
//    color:"black"
//  },


//  buttonD:{

//  alignItems: 'center',
//  justifyContent:'center',
//  width:35,
//  height:35,
//  backgroundColor:'orange',
//  margin:2

//  },

//    D:{
//      fontSize:18,
//      color:"black"
//    },

// 　　　　// 欠席ボタン

//  attendancebox:{
//      flexDirection: 'row',
//    },

//  buttonabsent:{

//    alignItems: 'center',
//    justifyContent:'center',
//    width:197,
//    height:35,
//    backgroundColor:'lightblue',
//    margin:2
//    },


// absent:{

//  fontSize:18,
//  color:'blue',
//  margin:2    
   
//  },



// // 　評価基準メモ

//  notebox:{
//  flexDirection: 'column',
//  width:200,
//  justifyContent: 'space-between',
//  padding:1
//  },


// // 生徒情報
//  studentname:{
//      position: 'relative',
//      backgroundColor:'white',
//      height:50,
//      padding:2,
//      justifyContent:'center',
//      shadowColor:'black',
//      shadowOffset:{width:0, height:2},
//      shadowOpacity:0.3,
//      shadowRadius:6,
//  },

//  studentnametitle:{
//      textAlign: 'center',
//      color:'black',
//      fontSize:18
//  },

// // 録音機能
//  recordingbox:{
//      position: 'relative',
//      backgroundColor:'white',
//      height:120,
//      padding:2,
//      justifyContent:'center',
//      shadowColor:'black',
//      shadowOffset:{width:0, height:2},
//      shadowOpacity:0.3,
//      shadowRadius:6,

//  },

//  micophoneicon:{
//      textAlign: 'center',
//      color:'black',
//      fontSize:15,
 
//   },
//     micophone:{
//     position: 'relative',
//     justifyContent: 'center',
//     color:'black',
//     fontSize:15,
// }

// });





// // export default RecordingScreen;
