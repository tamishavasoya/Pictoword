import React,{useState} from 'react'
import { ImageBackground, Text, View,StyleSheet, Image,Pressable} from 'react-native'

const Winboard = ({navigation}) => {
    const [levelno,setlevelno]=useState();
    // const {levelno}=route.params;
  return (
    <>
            <View style={style.main}>
          <ImageBackground source={require('./img/download.jpg')} style={style.background}>
                <View>
                  <Text style={style.title}>puzzel1{levelno} completed</Text>
                </View>
                <View>
                  <Image style={style.trophy} source={require('./img/trophy.png')}>

                  </Image>

                </View>
                <View style={style.button}>
                    <Pressable onPress={()=>{navigation.navigate('Continue')}}><Text style={style.btn}>continue</Text></Pressable>
                    <Pressable onPress={()=>{navigation.navigate('Home')}}><Text style={style.btn}>main menu</Text></Pressable>
                    <Pressable><Text style={style.btn}>buy pro</Text></Pressable>

                </View>
                <Text style={style.title}>shere this puzzel</Text>
                <View>
                  <Pressable style={style.sher_btn}><Image source={require('./img/shareus.png')} style={style.shere}></Image></Pressable>
                </View>

          </ImageBackground>
      </View>
    </>
  )
}

export default Winboard
const style=StyleSheet.create({
    background:{
      height:'100%',
      width:"100%"
    },
    title:{
      textAlign:'center',
      textTransform:'capitalize',
      fontSize:30,
      fontWeight:'bold',
      color: '#3F51B5',
      fontStyle:'italic',
      marginTop:20,
      marginBottom:20
    },
    // img:{
    //     height:'300',
    //     width:'400',
  
    // },
    trophy:{ 
      alignSelf:'center',
      marginHorizontal:20,
      marginBottom:20,
    },
    btn:{
      color:'black',
      textAlign:'center',
      fontSize:25,
      height:40,
      width:160,
      marginBottom:10,
      backgroundColor:'grey',
      borderWidth:2,
      borderColor:'black',
      borderStyle:'solid',
      borderRadius:10,
      
    },
    button:{
  alignSelf:'center'  
    },
    sher_btn:{
        height:60,
        width:60,
        backgroundColor:'grey',
        alignSelf:'center',
        borderColor:'black',
        borderStyle:'solid',
        borderRadius:20,
  
    },
    shere:{
        height:32,
        width:32,
        margin:'20%',
    },
  })
  