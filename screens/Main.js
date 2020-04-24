
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity,} from 'react-native';

import axios from 'axios';
import { useCardAnimation } from 'react-navigation-stack';

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
          <View><Text style={styles.seat1}>seat{i + 1}</Text></View>
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
              <View><Text style={styles.seat1}>seat8</Text></View>
            </TouchableOpacity>
 
            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat9</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat10</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat11</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat12</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat13</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat14</Text></View>
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
              <View><Text style={styles.seat1}>seat15</Text></View>
            </TouchableOpacity>
 
            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat16</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat17</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat18</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat19</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat20</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat21</Text></View>
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
              <View><Text style={styles.seat1}>seat22</Text></View>
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
              <View><Text style={styles.seat1}>seat24</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat25</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat26</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat27</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat28</Text></View>
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
              <View><Text style={styles.seat1}>seat29</Text></View>
            </TouchableOpacity>
 
            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat30</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat31</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat32</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat33</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat34</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat35</Text></View>
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
              <View><Text style={styles.seat1}>seat36</Text></View>
            </TouchableOpacity>
 
            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat37</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat38</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat39</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat40</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                      
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat41</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.2} 
                                     onPress={() => {
                                       
                                      this.props.navigation
                                        .navigate({routeName:'Modal'});
                                      }}>
              <View><Text style={styles.seat1}>seat42</Text></View>
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



