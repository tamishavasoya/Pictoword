import { useState } from 'react'
import { Pressable, StyleSheet, View, Image, Text } from 'react-native'

function Singlepage({ navigation, route }) {
  // const { quote } = route.params;
  const { levelno } = route.params;
  const [currentQuote, setCurrentQuote] = useState(levelno);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  const showpre = () => {
    // const newCurrentQuote = currentQuote - 1;
    setCurrentQuote(currentQuote - 1);
    if (currentQuote - 1 === 0) {
      setDisablePrev(true);
    }
    setDisableNext(false);
  };

  const shownext = () => {
    // const newCurrentQuote = currentQuote + 1;
    setCurrentQuote(currentQuote + 1);
    if (currentQuote + 1 === Quouts.length - 1) {
      setDisableNext(true);
    }
    setDisablePrev(false);
  };


  // function showpre(){
  //   // console.log('hello');
  //   if (currentQuote === 0) {
  //     setCurrentQuote(Quouts.length - 1);
  //   }else
  //   {
  //     setCurrentQuote(currentQuote - 1);

  //   }
  // }


  const Quouts = [

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
  ];
  // function shownext(){
  //   // console.log('hello');
  //   if (currentQuote === Quouts.length) {
  //     setCurrentQuote(1);
  //   }else
  //   {
  //     setCurrentQuote(currentQuote + 1);

  //   }
  // }
  return (
    <>
      <View style={style.container}>
        <View style={style.maincontainer}>
          <View style={style.box}>
            <Pressable>
              <Text style={style.txt}>{Quouts[currentQuote]}</Text>
            </Pressable>
            <View style={style.btn}>
              <Image source={require('./img/heart_off.png')} resizeMode='contain' style={{ height: 25, width: 25, margin: 5 }}></Image>
              <Text style={{ fontSize: 20, color: ' #b3cccc', margin: 5 }}>Like</Text>
              <Image source={require('./img/download_3031707.png')} resizeMode='contain' style={{ height: 25, width: 25, margin: 5 }}></Image>
              <Text style={{ fontSize: 20, color: ' #b3cccc', margin: 5 }}>Save</Text>
              <Image source={require('./img/copy-content_60990.png')} resizeMode='contain' style={{ height: 25, width: 25, margin: 5 }}></Image>
              <Text style={{ fontSize: 20, color: ' #b3cccc', margin: 5 }}>Copy</Text>
              <Image source={require('./img/sharing_3389013.png')} resizeMode='contain' style={{ height: 25, width: 25, margin: 5 }}></Image>
              <Text style={{ fontSize: 20, color: ' #b3cccc', margin: 5 }}>Share</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row',justifyContent:'space-evenly' }}>
            <Pressable style={{padding: 10,backgroundColor: disablePrev ? '#ccc' : 'black',marginRight: 10,borderRadius: 5}} onPress={() => showpre()}disabled={disablePrev}><Text style={{ color: 'white', fontSize: 35, textAlign: 'center' }}>◀</Text></Pressable>
            <Pressable style={{padding: 10,backgroundColor: disableNext ? '#ccc' : 'black',borderRadius: 5,}} onPress={() => shownext()}disabled={disableNext}><Text style={{ color: 'white', fontSize: 35, textAlign: 'center' }}>▶</Text></Pressable>
          </View>
        </View>
      </View>
    </>
  )
}

export default Singlepage
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    height: 580,
    margin: 5,
    width: '97%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 40,
    shadowColor: 'black',
    marginBottom: 10,
  },
  txt: {
    height: 500,
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
  },

})