
// import React, { Component } from 'react';
// import { Button, PermissionsAndroid, Platform, SafeAreaView, StyleSheet, Switch, Text, View,TouchableOpacity, Image } from 'react-native';
// import Slider from '@react-native-community/slider';
// import { Player, Recorder, MediaStates } from '@react-native-community/audio-toolkit';

// const filename = 'test.mp4'; // 録音した音声のファイル名

// type Props = {};

// // 状態保持するための枠
// type State = {
//   playPauseButton: string, // 再生/停止ボタンの名称を管理
//   recordButton: string, // 録音ボランの名称を管理

//   // booleanは true / false : 真偽値
//   stopButtonDisabled: boolean, // 停止ボタンが使えるか?
//   playButtonDisabled: boolean, // 再生ボタンが使えるか?
//   recordButtonDisabled: boolean, // 録音ボタンが使えるか?

//   //loopButtonStatus: boolean, // loopボタンがONかOFFか
//   progress: number, // 進捗barの進み具合

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

//       //loopButtonStatus: false,
//       progress: 0,

//       error: null
//     };
//   }

//   componentWillMount() {
//     this.player = null;
//     this.recorder = null;
//     this.lastSeek = 0;

//     // プレイヤを使えるようにする(ex. itunesを起動)
//     this._reloadPlayer();
//     this._reloadRecorder();

//     // setInterval(動かしたい関数, 動かしたい感覚:ms)
//     this._progressInterval = setInterval(() => {
//       // もし,プレイヤ-が存在してる,かつ進捗barを更新すべきなら
//       if (this.player && this._shouldUpdateProgressBar()) {
//         // 現在再生している時間 / 全体の録音時間
//         let currentProgress = Math.max(0, this.player.currentTime) / this.player.duration;
//         if (isNaN(currentProgress)) {
//           currentProgress = 0;
//         }
//         this.setState({ progress: currentProgress }); // 進捗barを更新
//       }
//     }, 100);
//   }

//   componentWillUnmount() {
//     clearInterval(this._progressInterval);
//   }

//   _shouldUpdateProgressBar() {
//     // スライダを動かしたあとは2sのタイムラグを生んでいる
//     // Debounce progress bar update by 200 ms
//     return Date.now() - this.lastSeek > 200;
//   }

//   _updateState(err) {
//     this.setState({
//       // 三項演算子  A ? B : C  AがtrueならB,falseならC.
//       // 再生/停止ボタンの名称について,プレイヤが起動している,かつプレイヤが再生中の場合は[Pause]をはめる.そうじゃないなら[Play]をはめる
//       playPauseButton: this.player && this.player.isPlaying ? 'Pause' : 'Play',
//       recordButton: this.recorder && this.recorder.isRecording ? 'Stop' : 'Record',

//       // 停止ボタンを見せるか?について,プレイヤが存在しない場合は見せない.または,プレイヤが止めることができない場合は見せない.それ以外は見せる
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
//     // もしすでに起動していたら,一旦削除(ex. itunesを落とす
//     if (this.player) {
//       this.player.destroy();
//     }

//     // 起動(ex. itunesを起動)
//     this.player = new Player(filename, {
//       autoDestroy: false
//     }).prepare((err) => {
//       if (err) {
//         console.log('error at _reloadPlayer():');
//         console.log(err);
//       }
//       //} else {
//         //this.player.looping = false; //this.state.loopButtonStatus;
//       //}

//       this._updateState();
//     });

//     this._updateState();

//     // プレイヤが再生完了したらstate更新
//     this.player.on('ended', () => {
//       this._updateState();
//     });
//     // プレイヤが停止したらstate更新
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

// //  _toggleLooping(value) {
// //    this.setState({
// //      loopButtonStatus: value
// //    });
// //    if (this.player) {
// //      this.player.looping = value;
// //    }
// //  }

//   render() {
//     return (
     
//         // Viewに変えると録音できなくなる
    
//      <SafeAreaView> 
//         <View>
//         <Text style={styles.title}>
//             30.06s
//           </Text>
//         </View>

              
         

//         <TouchableOpacity style={styles.buttonRecord}
//                                 activeOpacity={0.2} >
//         <Image style={{ resizeMode: "contain", width: 110, height: 100, }} 
//                    source={require('../assets/images/microphone.png')}
//                   />
//         <View>
//           <Button title={this.state.recordButton} disabled={this.state.recordButtonDisabled} onPress={() => this._toggleRecord()} />
//         </View>
//         </TouchableOpacity>

//         <View>
//           <Text style={styles.errorMessage}>{this.state.error}</Text>
//         </View>
//         <View style={styles.slider}>
//           <Slider step={0.0001} disabled={this.state.playButtonDisabled} onValueChange={(percentage) => this._seek(percentage)} value={this.state.progress} />
//         </View>
//         <View >
//           <Button title={this.state.playPauseButton} disabled={this.state.playButtonDisabled} onPress={() => this._playPause()} />
//           <Button title={'Stop'} disabled={this.state.stopButtonDisabled} onPress={() => this._stop()} />
//         </View>
//         {/* <View style={styles.settingsContainer}>
//           <Switch
//             onValueChange={(value) => this._toggleLooping(value)}
//             value={this.state.loopButtonStatus} />
//           <Text>Toggle Looping</Text>
//         </View> */}
  
//       </SafeAreaView>
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
   
//     padding: 10,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: "lightblue",
//     overflow: "hidden"
// },

// });
