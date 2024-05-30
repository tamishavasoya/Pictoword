import React from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Homepage({navigation}) {
  const levelno = 1;
  return (
    <>

            <View style={style.container}> 
                <View style={style.main_container}>
                  <View style={{justifyContent:'space-around',flexDirection:'row' ,}}>
                    <Text style={style.title}>best quotes & status</Text>
    
                    <Image source={require('./img/crown.png')} style={{height:40,width:40}}></Image>

                    <Image source={require('./img/menu.png')} style={{height:40,width:40}}></Image>
                  </View>
                  <TextInput style={style.serch}></TextInput> 
                </View>
            </View>
        <ScrollView>
            <View style={style.sub_container}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                  <Pressable style={style.alone} onPress={() => navigation.navigate('Detail',{levelno})}>
                    <Text style={style.txt}>alone</Text>
                    <Image source={require('./img/category113.png')} resizeMode='contain' style={{height:60, width:65,marginright:10,marginBottom:8,alignSelf:'flex-end'}}></Image>
                  </Pressable>
                  <Pressable style={style.angry} onPress={() => navigation.navigate('Detail')}>
                  <Text style={style.txt}>angry</Text>
                    <Image source={require('./img/category3.png')} resizeMode='contain' style={{height:60, width:65,marginright:10,marginBottom:8,alignSelf:'flex-end'}}></Image>

                  </Pressable>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                  <Pressable style={style.anniversary} onPress={() => navigation.navigate('Detail')}>
                  <Text style={style.txt}>anniversary</Text>
                    <Image source={require('./img/category4.png')} resizeMode='contain' style={{height:60, width:65,marginright:10,marginBottom:8,alignSelf:'flex-end'}}></Image>

                  </Pressable>
                  <Pressable style={style.attitude} onPress={() => navigation.navigate('Detail')}>
                  <Text style={style.txt}>attitude</Text>
                    <Image source={require('./img/category5.png')} resizeMode='contain' style={{height:60, width:65,marginright:10,marginBottom:8,alignSelf:'flex-end'}}></Image>

                  </Pressable>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                  <Pressable style={style.awesome}>
                  <Text style={style.txt}>awesome</Text>
                    <Image source={require('./img/category6.png')} resizeMode='contain' style={{height:60, width:65,marginright:10,marginBottom:8,alignSelf:'flex-end'}}></Image>

                  </Pressable>
                  <Pressable style={style.awkward}>
                  <Text style={style.txt}>awkward</Text>
                    <Image source={require('./img/category7.png')} resizeMode='contain' style={{height:60,width:65,marginright:10,marginBottom:8,alignSelf:'flex-end'}}></Image>

                  </Pressable>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                  <Pressable style={style.beard}>
                  <Text style={style.txt}>beard</Text>
                    <Image source={require('./img/category8.png')} resizeMode='contain' style={{height:60, width:65,marginright:10,marginBottom:8,alignSelf:'flex-end'}}></Image>

                  </Pressable>
                  <Pressable style={style.beautiful}>
                  <Text style={style.txt}>beautiful</Text>
                    <Image source={require('./img/category9.png')} resizeMode='contain' style={{height:60, width:65,marginright:10,marginBottom:8,alignSelf:'flex-end'}}></Image>

                  </Pressable>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                  <Pressable style={style.best}>
                  <Text style={style.txt}>best</Text>
                    <Image source={require('./img/category10.png')} resizeMode='contain' style={{height:60, width:65,marginright:10,marginBottom:8,alignSelf:'flex-end'}}></Image>

                  </Pressable>
                  <Pressable style={style.bike}>
                  <Text style={style.txt}>bike</Text>
                    <Image source={require('./img/category11.png')} resizeMode='contain' style={{height:60, width:65,marginright:10,marginBottom:8,alignSelf:'flex-end'}}></Image>

                  </Pressable>
                </View>

                <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                  <Pressable style={style.birthday}>
                  <Text style={style.txt}>birthday</Text>
                    <Image source={require('./img/category4.png')} resizeMode='contain' style={{height:60, width:65,marginright:10,marginBottom:8,alignSelf:'flex-end'}}></Image>

                  </Pressable>
                  <Pressable style={style.breakup}>
                  <Text style={style.txt}>breakup</Text>
                    <Image source={require('./img/category5.png')} resizeMode='contain' style={{height:60, width:65,marginright:10,marginBottom:8,alignSelf:'flex-end'}}></Image>

                  </Pressable>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                  <Pressable style={style.brother}> 
                  <Text style={style.txt}>brother</Text>
                    <Image source={require('./img/category6.png')} resizeMode='contain' style={{height:60, width:65,marginright:10,marginBottom:8,alignSelf:'flex-end'}}></Image>

                  </Pressable>
                  <Pressable style={style.busy}>
                  <Text style={style.txt}>busy</Text>
                    <Image source={require('./img/category3.png')} resizeMode='contain' style={{height:60, width:65,marginright:10,marginBottom:8,alignSelf:'flex-end'}}></Image>

                  </Pressable>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                  <Pressable style={style.cheat}>
                  <Text style={style.txt}>cheat</Text>
                    <Image source={require('./img/category7.png')} resizeMode='contain' style={{height:60, width:65,marginright:10,marginBottom:8,alignSelf:'flex-end'}}></Image>

                  </Pressable>
                  <Pressable style={style.childhood}>
                  <Text style={style.txt}>childhood</Text>
                    <Image source={require('./img/category3.png')} resizeMode='contain' style={{height:60, width:65,marginLeft:75,padding:30}}></Image>

                  </Pressable>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                  <Pressable style={style.clever}>
                  <Text style={style.txt}>clever</Text>
                    <Image source={require('./img/category3.png')} resizeMode='contain' style={{height:60, width:65,marginLeft:75,padding:30}}></Image>

                  </Pressable>
                  <Pressable style={style.collage}>
                  <Text style={style.txt}>collage</Text>
                    <Image source={require('./img/category3.png')} resizeMode='contain' style={{height:60, width:65,marginLeft:75,padding:30}}></Image>

                  </Pressable>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                  <Pressable style={style.cool}>
                  <Text style={style.txt}>cool</Text>
                    <Image source={require('./img/category3.png')} resizeMode='contain' style={{height:60, width:65,marginLeft:75,padding:30}}></Image>

                  </Pressable>
                  <Pressable style={style.creative}>
                  <Text style={style.txt}>creative</Text>
                    <Image source={require('./img/category3.png')} resizeMode='contain' style={{height:60, width:65,marginLeft:75,padding:30}}></Image>

                  </Pressable>
                </View>
            </View>
        </ScrollView>
        
            {/* <View style={style.main_container}>
              <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <Text style={style.title}>best quotes & status</Text>
    
                    <Image source={require('./img/crown.png')} style={{height:40,width:40}}></Image>
            
                    <Image source={require('./img/menu.png')} style={{height:40,width:40}}></Image>
              </View>
              <TextInput style={style.serch}></TextInput> 
            </View> */}
            {/* <View style={style.sub_container}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <Pressable style={style.box}></Pressable>
                    <Pressable style={style.box}></Pressable>

                </View>
            </View>
   */}
        

           
        
      </>
  )
}

export default Homepage;
const style=StyleSheet.create({
    
    container:{
      // flex:1,
      // backgroundColor:'blue',
      padding:10,
    },
    sub_container:{
      flex:6,
      // backgroundColor:'green'
    },
    title:{
      textTransform:'capitalize',
      fontSize:25,
      fontWeight:'bold',
      color:'black',
      
    },

    serch:{
      marginTop:10,
      width:'100%',
      backgroundColor:'#d9d9d9',
      borderRadius:20,
    },
    alone:{
      height:115,
      width:'45%',
      backgroundColor:'#00ADE5',
      margin:6
    },
    angry:{
      height:115,
      width:'45%',
      backgroundColor:'#F70039',
      margin:6
    },
    anniversary:{
      height:115,
      width:'45%',
      backgroundColor:'#F6C602',
      margin:6
    },
    attitude:{
      height:115,
      width:'45%',
      backgroundColor:'#A9181B',
      margin:6
    },
    awesome:{
      height:115,
      width:'45%',
      backgroundColor:'#BF73BB',
      margin:6
    },
    awkward:{
      height:115,
      width:'45%',
      backgroundColor:'#F38BAE',
      margin:6
    },
    beard:{
      height:115,
      width:'45%',
      backgroundColor:'#F65C5E',
      margin:5
    },
    beautiful:{
      height:115,
      width:'45%',
      backgroundColor:'#FF6090',
      margin:6
    },
    best:{
      height:115,
      width:'45%',
      backgroundColor:'#4BD462',
      margin:6
    },
    bike:{
      height:115,
      width:'45%',
      backgroundColor:'#4F19AB',
      margin:6
    },
    birthday:{
      height:115,
      width:'45%',
      backgroundColor:'#7829a6',
      margin:6
    },
    breakup:{
      height:115,
      width:'45%',
      backgroundColor:'#f7b365',
      margin:6
    },
    brother:{
      height:115,
      width:'45%',
      backgroundColor:'#00ADE5',
      margin:6
    },
    busy:{
      height:115,
      width:'45%',
      backgroundColor:'#F70039',
      margin:6
    },
    cheat:{
      height:115,
      width:'45%',
      backgroundColor:'#F6C602',
      margin:6
    },
    childhood:{
      height:115,
      width:'45%',
      backgroundColor:'#A9181B',
      margin:6
    },
    clever:{
      height:115,
      width:'45%',
      backgroundColor:'#BF73BB',
      margin:6
    },
    collage:{
      height:115,
      width:'45%',
      backgroundColor:'#F38BAE',
      margin:6
    },
    cool:{
      height:115,
      width:'45%',
      backgroundColor:'#F65C5E',
      margin:6
    },
    creative:{
      height:115,
      width:'45%',
      backgroundColor:'#FF6090',
      margin:6
    },
    txt:{
      color:'white',
      fontSize:25,
      textTransform:'capitalize',
      margin:10,
      fontWeight:'bold'
      
    }
       
})