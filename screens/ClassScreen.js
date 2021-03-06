import React, { Component } from 'react';
import {View, Image,StyleSheet}from 'react-native';
import { TouchableOpacity} from'react-native-gesture-handler';
import { Container, Header, Item, Input, Icon, Button, Text, } from 'native-base';

class ClassScreen extends React.Component {


  

  render() {
    return (


    <View style = {styles.mainbox}>
          
          
          


        
        <View>

        <Container style = {styles.searchbarcontainer}>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            
          </Item>
         
        </Header>
      </Container>
          
        </View>


          <View styles={styles.searchbartitle}>
            <Text style={{ height: 18, fontSize:18, marginTop:20 }}>クラスの選択</Text>  
          </View>



           <View style ={styles.imagebox}>

             

          <TouchableOpacity style ={styles.filebutton} 
                                onPress={() => {
                                this.props.navigation
                                .navigate({routeName:'Main'});
                                 }}>

                <View>

                 <Image style={{ width: 100, height: 100 }} 
                        source={require('../assets/images/folder.jpg')}
                  />
                </View>

          </TouchableOpacity>
          

          <View style ={styles.image}>
            <Image style={{ width: 100, height: 100 }} 
                   source={require('../assets/images/folder.jpg')}/>
          </View>

          <View style ={styles.image}>
            <Image style={{ width: 100, height: 100 }} 
                   source={require('../assets/images/folder.jpg')}/>
          </View>     

          <View style ={styles.image}>
            <Image style={{ width: 100, height: 100 }} 
                   source={require('../assets/images/folder.jpg')}/>
          </View>

          <View style ={styles.image}>
            <Image style={{ width: 100, height: 100 }} 
                   source={require('../assets/images/folder.jpg')}/>
          </View>

         

           </View>
        



      </View>
    );
  }
}

  const styles = StyleSheet.create({

    searchbarcontainer:{
        marginBottom:50,

    },

    mainbox:{
        flex:1,
        flexDirection: 'column',
        backgroundColor:"#EDF4F4",

    },


    imagebox:{
      flex:4,
      backgroundColor:"#EDF4F4",
      flexDirection: 'row',
      justifyContent: 'space-around',



    },

    });

    export default ClassScreen;
