
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity,} from 'react-native';

import axios from 'axios';


const baseRequest = axios.create({
  baseURL: 'https://us-central1-voice-tank-app.cloudfunctions.net/v1',
  responseType: 'json',
})

class Main extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {studentList: [],

    // 追加項目
    rec:[], //空の配列で初期化
    coords: null
 
  };
  }

  componentWillMount() {
    // api call(生徒一覧取得)
    baseRequest
      .get('/classes/1/students')
      .then( res => {
        console.log(res.data);
        this.setState({ studentList: res.data});
     

      })
      .catch( error => {
        console.log(error.response);
      });
  
  }







  doNotWork() {
    alert('まだ作ってません');
  }


  render(){

    const SeatList = [];
    var studentList = this.state.studentList;

    for (let i = 0; i < studentList.length; i++) {
      SeatList.push(
        <TouchableOpacity style={styles. seat1box}
                                  activeOpacity={0.2} 
                                  onPress={() => {
                                    this.props.navigation
                                      .navigate('Modal',
                                        { studentNumber: studentList[i].data.student_number }
                                      );
                                    }}>
          <View><Text style={styles.seat1}>{studentList[i].data.name}</Text></View>
        </TouchableOpacity>
      );
    }

  return(

      <View style={styles.mainbox}>
 
    <TouchableOpacity>
   
    </TouchableOpacity>
       <View style={styles.linkbuttons}>
        <View>
          <Button title="席替え" onPress={this.doNotWork.bind(this)}/>
        </View>
 
               <View>
               <Button title="補助簿" onPress={()=>{}}/>
              
               </View>
 
               <View>
               <Button title="一覧" onPress={()=>{}}/>
                
               </View>
 
              </View>
       
       
 
       <View style={styles.seats}>
 
         
         <View style>
            {SeatList}
          </View>
 
          <View style>
            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       // TODO: Modal側にstateの中のStudentNumberをわたす
                                      this.props.navigation
                                        .navigate({routeName:'ModalScreen'});
                                      }}>
              <View><Text style={styles.seat1}>清水</Text></View>
            </TouchableOpacity>
 
            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>山川</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>大石</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>谷川</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>長谷川</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>井上</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>松本</Text></View>
            </TouchableOpacity>

          </View>
         

          <View style>
            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       // TODO: Modal側にstateの中のStudentNumberをわたす
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>西村</Text></View>
            </TouchableOpacity>
 
            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>林</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>橋下</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>佐々木</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>山口</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>金子</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>阿部</Text></View>
            </TouchableOpacity>

          </View>


          <View style>
            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       // TODO: Modal側にstateの中のStudentNumberをわたす
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>前田</Text></View>
            </TouchableOpacity>
 
            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat23</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>山崎</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>田村</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>原</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>小川</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>岡本</Text></View>
            </TouchableOpacity>

          </View>

          <View style>
            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       // TODO: Modal側にstateの中のStudentNumberをわたす
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>酒井</Text></View>
            </TouchableOpacity>
 
            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>木下</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>安藤</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>坂井</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>石田</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>上野</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>上田</Text></View>
            </TouchableOpacity>

          </View>

          <View style>
            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       // TODO: Modal側にstateの中のStudentNumberをわたす
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>坂本</Text></View>
            </TouchableOpacity>
 
            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>小川</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>松田</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>後藤</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>遠藤</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>渡辺</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>中村</Text></View>
            </TouchableOpacity>

          </View>
 
 
       </View>

      
       <View style={styles.appbar}>
 
       <View><Text style={styles.appbartitle}>黒板</Text></View>
       </View>

       </View>
 
     );
   }


  }



          const styles = StyleSheet.create({

            mainbox:{
              //  flexShrink:1,→うまく作動しない。縦向きにしても席が全部見えるようにしたい
              justifyContent:'center',
              padding:1
            },

            appbar:{ 
              position: 'relative',
              backgroundColor:'#DDDDDD',
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
              fontSize:18,
              marginBottom:15,
              
            },

            seats:  {
              
              flexDirection: 'row',
              maxWidth:'90%',
              justifyContent: 'space-around',
              padding:20,

              
              
              },

              seat1box:{

                alignItems: 'center',
                justifyContent:'center',
                width:60,
                height:35,
                backgroundColor:'#DDDDDD',
                margin:2,
                borderRadius:10
                },

                seat1:{
                  fontSize:12,
                  color:"black"
                },






            
          linkbuttons:{
              position:'absolute',
              justifyContent: 'space-between',
              bottom:150,
              right:20,
              backgroundColor:'orange',
              borderRadius:10
            
            },

            linkbuttonstitles:{
              flexDirection: 'row',
              margin:3,
              padding:5,
              fontSize:13,
              color:'black'

            },


          });


   

  export default Main;



