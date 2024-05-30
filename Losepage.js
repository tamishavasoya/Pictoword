import React,{useState} from 'react'
import { ImageBackground, StyleSheet, Text, View,Image ,Pressable } from 'react-native'

export default function Losepage({navigation,route}) {
  const [levelno,setlevelno]=useState();
  // const {levelno}=route.params;

  return (
    <>
      <View style={style.main}>
              <ImageBackground source={require('./img/download.jpg')} style={style.background}>

                <View>
                      <Text style={style.title}>you are lose..!</Text>
                </View>
                <View style={style.emoji}>
                <Image source={require('./img/lose.png')}></Image>

                </View>
                <Pressable style={{backgroundColor:'#F3CF39',padding:5,borderWidth:3,borderColor:'#C89C2C',borderRadius:7}} onPress={()=>navigation.navigate('Continue',{levelno})}><Text style={style.retry}>retry</Text></Pressable>
              </ImageBackground>
        </View>
    </>
  )
}
const style=StyleSheet.create({
  background:{
    height:'100%',
    width:'100%',
  },
  title:{
    textAlign:'center',
    fontSize:50,
    textTransform:'capitalize',
    margin:20
  },
  emoji:{
    alignSelf:'center',
    margin:80,
  },
  retry:{
    fontSize:30,
    textAlign:'center',
  },
  btn:{
      height:"300",
      width:"300",
      backgroundColor:'black'
  }
})
