import React, {Component} from 'react';

import { View, Text, StyleSheet, Button, TextInput, Image, Modal, PermissionsAndroid, Platform, SafeAreaView,TouchableOpacity } from 'react-native';

import { Form, Header } from "native-base";

// import firebase from 'firebase'
import axios from 'axios';


import Slider from '@react-native-community/slider';
import { Player, Recorder } from '@react-native-community/audio-toolkit';

const filename = 'test2.mp4'; // 録音した音声のファイル名

type Props = {};

// 状態保持するための枠
type State = {
  playPauseButton: string, // 再生/停止ボタンの名称を管理
  recordButton: string, // 録音ボランの名称を管理

  // booleanは true / false : 真偽値
  stopButtonDisabled: boolean, // 停止ボタンが使えるか?
  playButtonDisabled: boolean, // 再生ボタンが使えるか?
  recordButtonDisabled: boolean, // 録音ボタンが使えるか?

  progress: number, // 進捗barの進み具合

  error: string | null,

  studentName: String,
  studentNumber: any,
};

const baseRequest = axios.create({
  baseURL: 'https://us-central1-voice-tank-app.cloudfunctions.net/v1',
  responseType: 'json',
})

class Modals extends React.Component<Props, State> {
  player: Player | null;
  recorder: Recorder | null;
  lastSeek: number;
  _progressInterval: IntervalID;
  _recordTimerInterval: IntervalID;

  // TODO:　表示時にすでに登録された評価を取得して、画面の色を塗るなりする
  constructor(props) {
    super(props);
    const { studentNumber } = props.navigation.state.params
    this.state = {
      playPauseButton: 'Preparing...',
      recordButton: 'Preparing...',

      stopButtonDisabled: true,
      playButtonDisabled: true,
      recordButtonDisabled: true,

      //loopButtonStatus: false,
      progress: 0,

      recordStartTime: null,

      recordDurationTime: null,    //経過時間

      error: null,


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

    this.player = null;
    this.recorder = null;
    this.lastSeek = 0;

    // プレイヤを使えるようにする(ex. itunesを起動)
    this._reloadPlayer();
    this._reloadRecorder();

    // setInterval(動かしたい関数, 動かしたい感覚:ms)
    this._progressInterval = setInterval(() => {
      // もし,プレイヤ-が存在してる,かつ進捗barを更新すべきなら
      if (this.player && this._shouldUpdateProgressBar()) {
        // 現在再生している時間 / 全体の録音時間
        let currentProgress = Math.max(0, this.player.currentTime) / this.player.duration;
        if (isNaN(currentProgress)) {
          currentProgress = 0;
        }
        this.setState({ progress: currentProgress }); // 進捗barを更新

        this.setState({ counttimer: this.state.counttimer+1}); //１秒ごとにカウントされる
      }
    }, 100);
  
  }

  componentWillUnmount() {
    clearInterval(this._progressInterval);
    clearInterval(this._recordTimerInterval);
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

  

  _shouldUpdateProgressBar() {
    // スライダを動かしたあとは2sのタイムラグを生んでいる
    // Debounce progress bar update by 200 ms
    return Date.now() - this.lastSeek > 200;
  }

  _updateState(err) {
    this.setState({
      // 三項演算子  A ? B : C  AがtrueならB,falseならC.
      // 再生/停止ボタンの名称について,プレイヤが起動している,かつプレイヤが再生中の場合は[Pause]をはめる.そうじゃないなら[Play]をはめる
      playPauseButton: this.player && this.player.isPlaying ? 'Pause' : 'Play',
      recordButton: this.recorder && this.recorder.isRecording ? 'Stop' : 'Record',

      // 停止ボタンを見せるか?について,プレイヤが存在しない場合は見せない.または,プレイヤが止めることができない場合は見せない.それ以外は見せる
      stopButtonDisabled: !this.player || !this.player.canStop,
      playButtonDisabled: !this.player || !this.player.canPlay || this.recorder.isRecording,
      recordButtonDisabled: !this.recorder || (this.player && !this.player.isStopped),
    });
  }

  _playPause() {
    this.player.playPause((err, paused) => {
      if (err) {
        this.setState({
          error: err.message
        });
      }
      this._updateState();

      this.setState({ recordDurationTime: null})
    });
  }

  _stop() {
    this.player.stop(() => {
      this._updateState();
    });
  }

  _seek(percentage) {
    if (!this.player) {
      return;
    }

    this.lastSeek = Date.now();

    let position = percentage * this.player.duration;

    this.player.seek(position, () => {
      this._updateState();
    });
  }

  _reloadPlayer() {
    // もしすでに起動していたら,一旦削除(ex. itunesを落とす
    if (this.player) {
      this.player.destroy();
    }

    // 起動(ex. itunesを起動)
    this.player = new Player(filename, {
      autoDestroy: false
    }).prepare((err) => {
      if (err) {
        console.log('error at _reloadPlayer():');
        console.log(err);
      }

      this._updateState();
    });

    this._updateState();

    // プレイヤが再生完了したらstate更新
    this.player.on('ended', () => {
      this._updateState();
    });
    // プレイヤが停止したらstate更新
    this.player.on('pause', () => {
      this._updateState();
    });
  }

  _reloadRecorder() {
    if (this.recorder) {
      this.recorder.destroy();
    }

    this.recorder = new Recorder(filename, {
      bitrate: 256000,
      channels: 2,
      sampleRate: 44100,
      quality: 'max'
    });

    this._updateState();
  }

  _toggleRecord() {
    if (this.player) {
      this.player.destroy();
    }

    let recordAudioRequest;
    if (Platform.OS == 'android') {
      recordAudioRequest = this._requestRecordAudioPermission();
    } else {
      recordAudioRequest = new Promise(function (resolve, reject) { resolve(true); });
    }

    recordAudioRequest.then((hasPermission) => {
      if (!hasPermission) {
        this.setState({
          error: 'Record Audio Permission was denied'
        });
        return;
      }

      this.recorder.toggleRecord((err, stopped) => {
        if (err) {
          this.setState({
            error: err.message
          });
        }
        if (stopped) {
          this._reloadPlayer();
          this._reloadRecorder();

          clearInterval(this._recordTimerInterval);

        } else {
          this.setState({ recordStartTime: new Date()})  //レコード開始時間を取得

          this._recordTimerInterval = setInterval(() => {
            var stopTime = new Date(); // 経過時間を退避

            var elapsed = stopTime.getTime() - this.state.recordStartTime.getTime(); // 経過時間の差分を取得
            var H = Math.floor(elapsed / (60 * 60 * 1000)); // 時間取得
            elapsed = elapsed - (H * 60 * 60 * 1000);
            var M = Math.floor(elapsed / (60 * 1000)); // 分取得
            elapsed = elapsed - (M * 60 * 1000);
            var S = Math.floor(elapsed / 1000); // 秒取得
            var MS = elapsed % 100; // ミリ秒取得

            this.setState({ recordDurationTime: this._organizeTime(M,S,MS)})
          }, 100);
        }

        

        this._updateState();
      });
    });
  }

  _organizeTime(minutes, second, milisecond) {
    return this._alignTime(minutes) + ":" + this._alignTime(second) + "." + this._alignTime(milisecond)
  }
  _alignTime(time) {
    return ("0"+time).slice(-2)
  }

  async _requestRecordAudioPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Microphone Permission',
          message: 'ExampleApp needs access to your microphone to test react-native-audio-toolkit.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  doNotWork() {
    alert('まだ作ってません');
  }

  render() {
  return(




//  < Modal 
//         animationType="slide"
//         transparent={false}
//         presentationStyle="formSheet"
//       >
<Form>

<View style= {styles.outercontainer}> 
   



      <View style={styles.container1}>






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
              <Text style={{ height: 35, fontSize:18, marginTop:5 }}>Excellent! &nbsp;&nbsp;~ができる</Text>
              <Text style={{ height: 35, fontSize:18, marginTop:5 }}>Great! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~ができる</Text>
              <Text style={{ height: 35, fontSize:18, marginTop:5 }}>Good! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~ができる</Text>
              <Text style={{ height: 35, fontSize:18, marginTop:5 }}>努力が必要</Text>
              
              <TouchableOpacity style={styles.buttonabsent}
                                activeOpacity={0.2} 
                                onPress={this.doNotWork.bind(this)}>
                <View><Text style={styles.absent}>欠席(absent)</Text></View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.imageperson}>
                  <Image style={{   width: 80, height: 80, }} 
                        source={require('../assets/images/person-icon.jpg')}
                    />
            </View>

          {/* ここから生徒情報 */}
          <View style={styles.studentname}>
          <View><Text style={styles.studentnametitle}>#{this.state.studentNumber}   {this.state.studentName}</Text></View>
          </View>


        </View> 


            <View style= {styles.container2}> 


            <View>
              <Text style={styles.errorMessage}>{this.state.error}</Text>
            </View>
            <View style={styles.slider}>
              <Slider step={0.0001} disabled={this.state.playButtonDisabled} onValueChange={(percentage) => this._seek(percentage)} value={this.state.progress} />
            </View>
            <View style={styles.playpause}>
              <Button title={this.state.playPauseButton} disabled={this.state.playButtonDisabled} onPress={() => this._playPause()} />
              <Button title={'Stop'} disabled={this.state.stopButtonDisabled} onPress={() => this._stop()} />
              <Text style={styles.errorMessage}>{this.state.recordDurationTime}</Text>
            </View>     

            <View style={styles.recordingbox}>
              <TouchableOpacity style={styles.buttonRecord}
                                    activeOpacity={0.4} >

                                      <View style={styles.image}>
                                      <Image style={{   width: 60, height: 60, }} 
                                        source={require('../assets/images/whitemicrophone.png')}
                                        />

                                      </View>


               <View>
                <Button title={this.state.recordButton} disabled={this.state.recordButtonDisabled} onPress={() => this._toggleRecord()} />
               </View>
            </TouchableOpacity>
              
              </View>   

         




          </View>






  </View> 



</Form>

// 
    // </Modal>
  );
  }
}

const styles = StyleSheet.create({


  // 録音部分

  imageperson:{
    // backgroundColor:"black",
    alignItems:"center"


  },

  slider: {
    height: 5,
    margin: 3,
    marginBottom: 20,
  },

  playpause:{
    marginTop:20,
    marginBottom:20,

  },


  errorMessage: {
    fontSize: 15,
    textAlign: 'center',
    padding: 20,
    color: 'red'
  },

  recordingbox:{
   
    alignItems:"center"

  },

  buttonRecord: {
   backgroundColor:"#4BDAE0",
   
   width:220,
    padding: 5,
    borderRadius: 180,
    borderWidth: 5,
    borderColor: "#4BDAE0",
    // overflow: "hidden"
    
    shadowColor:'black',
    shadowOffset:{width:2, height:2},
    shadowOpacity:0.1,
    shadowRadius:6,
},
   image: {
    alignItems: 'center',

   },



// ここから評価部分


    outercontainer:{
      flexDirection: 'row',
      marginRight:20,
      marginLeft:20,
      marginTop:10,
      marginBottom:10,

            
           
  
           },
    container１:{
               flex:1,
              //  justifyContent:'center',
               padding:8
             },

            

            container2:{
               flex:1,
               justifyContent:'center',

            },
          
 
     evaluationbox:  {
      
       flexDirection: 'row',
       maxWidth:'100%',
       justifyContent: 'space-around',
       padding:15,
       
      
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
            color:'black',
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
                // shadowColor:'black',
                // shadowOffset:{width:0, height:2},
                // shadowOpacity:0.3,
                // shadowRadius:6,
            },
  
            studentnametitle:{
                textAlign: 'center',
                color:'black',
                fontSize:18
            },
  
    

              evaluationcontainer:{
                
                flexDirection: 'column',

            
              
    

              
                

  }

});


export default Modals;