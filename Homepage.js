import React from 'react'
import { ImageBackground, Pressable, Text, View } from 'react-native'

function Homepage({navigation}) {
  return (
    <>
        <View style={{margin:5}}>
            <ImageBackground source={require('./img/homepage.jpg')} style={{height:'95%', width:'100%'}}></ImageBackground>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                <Pressable style={{height:50,width:100,backgroundColor:'#E2A41D'}} onPress={()=>navigation.navigate('Level')}><Text style={{color:'#7D6B2A',fontSize:25,fontWeight:'bold'}}>levels</Text></Pressable>
                <Pressable style={{height:50,width:100,backgroundColor:'#E2A41D'}} onPress={()=>navigation.navigate('Continue',{'levelno':1})}><Text style={{color:'#7D6B2A',fontSize:25,fontWeight:'bold'}}>Continue</Text></Pressable>
            </View>
        </View>
    </>
  )
} 

export default Homepage;