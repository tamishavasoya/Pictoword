import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable, Image, ScrollView } from 'react-native';

function Quout({navigation,route}) {
  const [bord, setbord] = useState(Array(10).fill(null));
  const { levelno } = route.params;
  // const [levelno,setlevelno]=useState()


  const Quouts = [
    [
      " I feel so good after a workout.Any time you can be alone whith yourself is really important.",
      "The soul sees beauty may sometimes walk alone.",
      "when the people you love are gone, you're alone.",
      "life could be wonderful if people would leave you alone.",
      "i never did anything alone.whatever was accomplished in this country was accomplished collectively.",
      "i would rather to be alone and a loud voice for action than be silent.",
      "The soul sees beauty may sometimes walk alone.",
      "when the people you love are gone, you're alone.",
      "life could be wonderful if people would leave you alone.",
      "i never did anything alone.whatever was accomplished in this country was accomplished collectively.",
      "i would rather to be alone and a loud voice for action than be silent.",
    ],
    [
      "silence is the best way to react while angry.",
      "i'm the person that the more you complain about me, the harder i'll try to annoy me.",
      "sometimes i'm just not in the mood to talk.",
      "sometimes you just wanna give people a high five to the face.",
      "an angry man opens his mouth and shuts his eyes.",
      "silence is the best way to react while angry.",
      "i'm the person that the more you complain about me, the harder i'll try to annoy me.",
      "sometimes i'm just not in the mood to talk.",
      "sometimes you just wanna give people a high five to the face.",
      "an angry man opens his mouth and shuts his eyes.",

    ],
  ]

  return (
    <>
        <ScrollView>
            <View style={style.container}>
              <View style={style.main_container}>
              {
                bord.map((value,index)=>(
                <View style={style.box} key={index}>
                <Pressable  onPress={()=>navigation.navigate('Single',{levelno})}>
                  <Text style={style.txt}>{Quouts[levelno][index]} </Text>
                </Pressable>
                <View style={style.btn}>
                    <Image source={require('./img/heart_off.png')}resizeMode='contain' style={{height:25,width:25,margin:5}}></Image>
                    <Text style={{fontSize:20,color:' #b3cccc',margin:5}}>Like</Text>
                    <Image source={require('./img/download_3031707.png')}resizeMode='contain' style={{height:25,width:25,margin:5}}></Image>
                    <Text style={{fontSize:20,color:' #b3cccc',margin:5}}>Save</Text>
                    <Image source={require('./img/copy-content_60990.png')}resizeMode='contain' style={{height:25,width:25,margin:5}}></Image>
                    <Text style={{fontSize:20,color:' #b3cccc',margin:5}}>Copy</Text>
                    <Image source={require('./img/sharing_3389013.png')}resizeMode='contain' style={{height:25,width:25,margin:5}}></Image>
                    <Text style={{fontSize:20,color:' #b3cccc',margin:5}}>Share</Text>
                </View>
              </View>
              ))
            }
              </View>
            </View>
          </ScrollView>
    </>
  )
}

export default Quout;
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  box: {
    height: 460,
    margin: 5,
    width: '97%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 40,
    shadowColor: 'black',
    marginBottom: 10,
  },
  txt: {
    height: 400,
    width: '100%',
    backgroundColor: 'black',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    color: 'white',
    textAlign: 'center',
    padding: 50,
    fontSize: 35,
    fontWeight: 'bold',
  },
  btn: {
    paddingTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }

})