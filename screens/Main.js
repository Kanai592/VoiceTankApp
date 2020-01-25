
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';


class Main extends React.Component {
 

  render(){
  return(

      <View style={styles.mainbox}>
 
 
         <View style={styles.appbar}>
 
         <View><Text style={styles.appbartitle}>Let's start Evaluating</Text></View>
         </View>
 <TouchableOpacity>
   
 </TouchableOpacity>
       <View style={styles.linkbuttons}>
       
 
 
               <View>
     
               <Button title="席替え" onPress={()=>{}}/>
               
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
             
 
             <TouchableOpacity style={styles. seat1box}
                                     activeOpacity={0.8} 
                                     onPress={()=>{
               this.props.navigation.navigate({routeName:'Modal'});
 
               }}>
 
               <View><Text style={styles.seat1}>出席番号</Text></View>
 
 
               </TouchableOpacity>
 
             <Button title="seat2" onPress={() =>{}}/>
 
             <Button title="seat3" onPress={()=>{}}/>
 
             <Button title="seat4" onPress={()=>{}}/>
 
             <Button title="seat5" onPress={()=>{}}/>
 
             <Button title="seat6" onPress={()=>{}}/>
 
             <Button title="seat7" onPress={()=>{}}/>
             </View>
 
             <View>
             <Button title="seat8" onPress={()=>{}}/>
 
             <Button title="seat9" onPress={()=>{}}/>
 
             <Button title="seat10" onPress={()=>{}}/>
 
             <Button title="seat11" onPress={()=>{}}/>
 
             <Button title="seat12" onPress={()=>{}}/>
 
             <Button title="seat13" onPress={()=>{}}/>
 
             <Button title="seat14" onPress={()=>{}}/>
 
             </View>
 
             <View>
 
             <Button title="seat15" onPress={()=>{}}/>
 
             <Button title="seat16" onPress={()=>{}}/>
 
             <Button title="seat17" onPress={()=>{}}/>
 
             <Button title="seat18" onPress={()=>{}}/>
 
             <Button title="seat19" onPress={()=>{}}/>
 
             <Button title="seat20" onPress={()=>{}}/>
 
             <Button title="seat21" onPress={()=>{}}/>
 
             </View>
 
 
             <View>
             
 
             <Button title="seat22" onPress={()=>{}}/>
 
             <Button title="seat23" onPress={()=>{}}/>
 
             <Button title="seat24" onPress={()=>{}}/>
 
             <Button title="seat25" onPress={()=>{}}/>
 
             <Button title="seat26" onPress={()=>{}}/>
 
             <Button title="seat27" onPress={()=>{}}/>
 
             <Button title="seat28" onPress={()=>{}}/>
 
             </View>
 
 
             <View>
             
 
             <Button title="seat29" onPress={()=>{}}/>
 
             <Button title="seat30" onPress={()=>{}}/>
 
             <Button title="seat31" onPress={()=>{}}/>
 
             <Button title="seat32" onPress={()=>{}}/>
 
             <Button title="seat33" onPress={()=>{}}/>
 
             <Button title="seat34" onPress={()=>{}}/>
 
             <Button title="seat35" onPress={()=>{}}/>
 
             </View>
 
             <View>
             
 
             <Button title="seat36" onPress={()=>{}}/>
 
             <Button title="seat37" onPress={()=>{}}/>
 
             <Button title="seat38" onPress={()=>{}}/>
 
             <Button title="seat39" onPress={()=>{}}/>
 
             <Button title="seat40" onPress={()=>{}}/>
 
             <Button title="seat41" onPress={()=>{}}/>
 
             <Button title="seat42" onPress={()=>{}}/>
 
             </View>
  
 
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
              backgroundColor:'#99FFFF',
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
              bottom:100,
              right:20,
              backgroundColor:'orange'
            
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



