import React, { useState, useEffect,useCallback } from 'react'
import { Image, ImageBackground, Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';




function Levelpage({ navigation }) {
  const [levelno, setlevelno] = useState(1);
  // const {levelno}=route.params;
  const [curAns, setcurAns] = useState([]);
  const [curMixAns, setCurMixAns] = useState([]);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('levelno', value);
      navigation.navigate('Win', { levelno: value, word: truans[value - 1] });
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('levelno');

      if (value !== null) {
        console.log('Get level=', value)
        setlevelno(parseInt(value))
      }
    } catch (e) {
      // Handle error
    }
  };
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  useEffect(() => {
    const updateGame = () => {
      const secondstring = firststring[levelno - 1];
      const tempArr = secondstring.split("");
      setCurMixAns(tempArr);

      const blankans = new Array(truans[levelno - 1].length).fill("");
      setcurAns(blankans);
    };
    updateGame();
  }, [levelno]);

  useEffect(() => {
    const checkAnswer = () => {
      const userAnswer = curAns.join("");
      const rightLength = truans[levelno - 1].length;

      if (userAnswer.length === rightLength) {
        if (userAnswer === truans[levelno - 1]) {
          storeData((levelno + 1).toString());
        } else {
          Alert.alert("Wrong!!");
        }
      }
    };
    checkAnswer();
  }, [curAns]);

  const reload = () => {
    console.log('hello');
    const blankans = new Array(truans[levelno - 1].length).fill("");
    setcurAns(blankans);
    const secondstring = firststring[levelno - 1];
    const tempArr = secondstring.split("");
    setCurMixAns(tempArr);
  };



  // useFocusEffect(
  //   React.useCallback(() => {
  //     getData();
  //     console.log("hello", levelno);
  //     const secondstring = firststring[levelno - 1];

  //     var tempArr = secondstring.split("")
  //     console.log(secondstring);
  //     console.log(tempArr);
  //     setCurMixAns(tempArr);

  //     const truansstring = truans[levelno - 1];

  //     var ansArr = truansstring.split("");
  //     console.log(truansstring);
  //     console.log(ansArr);
  //     setcurAns(ansArr);

  //     var fixans = truans[levelno - 1];
  //     var blankans = [];

  //     for (let i = 0; i < fixans.length; i++) {
  //       blankans.push("");
  //     }
  //     setcurAns(blankans)


  //   }, []));



  const imag = [
    require('./img/pics-star6-1.jpg'),
    require('./img/pics-sand3-1.jpg'),
    require('./img/pics-ear1-1.jpg'),
    require('./img/pics-ice1-1.jpg'),
    require('./img/pics-key3-1.jpg'),
    require('./img/pics-star7-1.jpg'),
    require('./img/pics-web1-1.jpg'),
    require('./img/pics-disk1-1.jpg'),
    require('./img/pics-lay3-1.jpg'),
    require('./img/pics-mouse1-1.jpg'),
  ];
  const images = [
    require('./img/pics-art2-1.jpg'),
    require('./img/pics-witch1-2.jpg'),
    require('./img/pics-ring1-1.jpg'),
    require('./img/cream.jpeg'),
    require('./img/pics-blow1-1.jpg'),
    require('./img/pics-bug1-1.jpg'),
    require('./img/pics-mile1-1.jpg'),
    require('./img/pics-cover1-1.jpg'),
    require('./img/pics-off1-1.jpg'),
    require('./img/pics-trap1-1.jpg'),
  ];

  const truans = ["START", "SANDWICH", "EARRING", "ICECREAM", "KEYBOARD", "STARBUCK", "WEBMAIL", "DISCOVER", "LAYOFF", "MOUSETRAP"];

  const firststring = ["YJSGNTKAVRLTBW", "FSGANKDWIETCLH", "LESAERFRGIJNVG", "JIOCLEVCYREZAM", "NKEBYXBMOSARRD", "BSGLTADFRQBUCK", "EEVBBMLWCAZIAL", "HDWITSOKCOVDER", "RLTAUYOBOPLFDF", "GMHOJUKSLETRAP"
  ];


  // useEffect(() => {
  //   console.log("hello", levelno);
  //   const secondstring = firststring[levelno - 1];

  //   var tempArr = secondstring.split("")
  //   console.log(secondstring);
  //   console.log(tempArr);
  //   setCurMixAns(tempArr);

  //   const truansstring = truans[levelno - 1];

  //   var ansArr = truansstring.split("");
  //   console.log(truansstring);
  //   console.log(ansArr);
  //   setcurAns(ansArr);

  //   var fixans = truans[levelno - 1];
  //   var blankans = [];

  //   for (let i = 0; i < fixans.length; i++) {
  //     blankans.push("");
  //   }
  //   setcurAns(blankans)
  // }, []);


  function btnpress(k) {
    // console.log('hello');
    var test = [...curAns]
    var test2 = [...curMixAns]

    for (var x = 0; x < test.length; x++) {
      if (test[x] == '') {
        test[x] = firststring[levelno - 1][k];
        test2[k] = "";
        break;

      }
    }
    setcurAns(test)
    setCurMixAns(test2)

  }

  function btnpress2(k) {
    var test = [...curMixAns]
    var test2 = [...curAns]

    test[k] = curAns[k];
    test2[k] = '';

    setCurMixAns(test);
    setcurAns(test2);
  }
  // useEffect(() => {
  //   var useranswer = curAns.join("");
  //   var rightlength = truans[levelno - 1].length

  //   if (useranswer.length === rightlength) {
  //     if (useranswer == truans[levelno - 1]) {
  //       reload()
  //       navigation.navigate('Win', { 'levelno': levelno, 'word': truans[levelno - 1] })
  //       storeData((levelno + 1).toString());
  //       // getcoins(parseInt(coins)+50)
  //     }
  //     else {
  //       Alert.alert("Wronge!!")
  //     }
  //   }

  // }, [levelno, curAns])

  // function reload(ind) {
  //   const newCurAns = [...curAns];
  //   const newCurMixAns = [...curMixAns];
  //   if (newCurAns[ind] !== '') {
  //     newCurMixAns[ind] = newCurAns[ind];
  //     newCurAns[ind] = '';
  //   }

  //   // setcurAns(newCurAns);
  //   setCurMixAns(newCurMixAns);

  // }

  return (
    <>
      <View>
        <ImageBackground source={require('./img/download.jpg')} style={style.backgroundimag}>

          <View style={{ width: '100%', padding: '20', backgroundColor: 'rgba(0,0,0,0.3)', padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>Level</Text>
              <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>{levelno}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('./img/dollar-symbol.png')} style={{ height: 30, width: 30, margin: 5 }}></Image>
              <Text style={{ fontSize: 25, color: '#2F4F4F', margin: 5 }}>50</Text>
              <Pressable style={{ height: 25, width: 25, backgroundColor: '#87CEEB', margin: 5 }}><Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, textAlign: 'center' }}>+</Text></Pressable>
            </View>
            <Pressable style={{ height: 35, width: 35, backgroundColor: '#87CEEB', margin: 5 }}><Image source={require('./img/settings.png')} style={{ height: 30, width: 30, alignSelf: 'center' }}></Image></Pressable>
          </View>

          <View style={{ flexDirection: 'row', marginTop: '30%', margin: 10 }}>
            <View style={{ flex: 4, height: '45%', width: '44%', backgroundColor: 'white', padding: 5 }}>
              <Image source={imag[levelno - 1]} style={{ height: '100%', width: '100%' }}></Image>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ padding: 5, fontSize: 45 }}>+</Text>
            </View>
            <View style={{ flex: 4, height: '45%', width: '44%', backgroundColor: 'white', padding: 5 }}>
              <Image source={images[levelno - 1]} style={{ height: '100%', width: '100%' }}></Image>
            </View>
          </View>

          <View style={{ flexDirection: 'row', margin: 5, justifyContent: 'space-between' }}>

            <Pressable onPress= {reload} style={{ height: 43, width: 43, backgroundColor: '#fff', borderRadius: 10, borderWidth: 2, justifyContent: 'center', alignItems: 'center' }}><Image source={require('./img/turn-around.png')} style={{ height: 30, width: 30, margin: 5 }}></Image></Pressable>
            <Pressable style={{ height: 43, width: 43, backgroundColor: '#fff', borderRadius: 10, borderWidth: 2, justifyContent: 'center', alignItems: 'center' }}><Image source={require('./img/list.png')} style={{ height: 30, width: 30, margin: 5 }}></Image></Pressable>

          </View>
          <View style={{ backgroundColor: '#ffbf00', height: '10%', flexDirection: 'row', justifyContent: 'center' }}>

            {/* <Text>Data</Text> */}
            {
              curAns.map((val, ind) => {
                return (
                  <View key={ind}>
                    <Pressable onPress={() => { btnpress2(ind) }}><Text style={{ fontSize: 35, color: 'black', textAlign: 'center', marginTop: 10, borderColor: '#7D6B2A', borderStyle: 'solid', borderWidth: 2, height: 50, borderRadius: 10, width: 50, backgroundColor: 'white' }}>{val}</Text></Pressable>
                  </View>
                )

              })
              // curAns.map((val,ind)=>{
              //   return(
              //     <>
              //       <Pressable onPress={()=>{btnpress2(ind)}}>< Text style={{fontSize:35,color:'black',textAlign:'center',marginTop:10,borderColor:'#7D6B2A',borderStyle:'solid',borderWidth:2,height:50,borderRadius:10,width:50,backgroundColor:'white'}}>{val}</Text></Pressable>
              //     </>
              //   )  
              // })
            }
          </View>

          <View style={{ flexDirection: 'row', height: '17%', backgroundColor: 'white', justifyContent: 'center', flexWrap: 'wrap', padding: 10 }}>
            {
              curMixAns.map((val, ind) => {
                return (

                  <View key={ind}>
                    <Pressable style={style.btn} onPress={() => { btnpress(ind) }}><Text style={style.txt}>{val}</Text></Pressable>

                  </View>
                )
              })
            }
          </View>
        </ImageBackground>
      </View>

    </>
  )
}

export default Levelpage;
const style = StyleSheet.create({
  backgroundimag: {
    height: '100%',
    width: '100%',
  },
  img: {
    height: '35%',
    width: '40%',
    backgroundColor: 'white',
  },
  btn: {
    height: 46,
    width: 46,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#ff8000',
    borderRadius: 10,
    marginVertical: 10,
    margin: 1,
  },
  button: {
    height: '50%',
    width: '12%',
    borderWidth: 1.5,
    borderColor: '#D28F30',
    backgroundColor: '#fcdf4f',
    borderRadius: 10

  },
  txt: {
    fontSize: 28,
    color: '#694717',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  // guessRow: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flexWrap: 'wrap',
  //   gap: 2,
  //   backgroundColor: '#fff',
  //   padding: 10,
  // },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 2,
  },
  txt: {
    height: 45,
    width: 45,
    borderRadius: 10,
    backgroundColor: '#ffbf00',
    borderWidth: 2,
    borderColor: '#7D6B2A',
    borderStyle: 'solid',
    fontSize: 35,
    textAlign: 'center',
    color: 'black'
  }
})