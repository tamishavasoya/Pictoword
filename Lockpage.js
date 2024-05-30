import React, { useState, useEffect } from 'react'
import { ImageBackground, StyleSheet, Text, View, Pressable, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


function Lockpage({ navigation }) {
    const [board, setbord] = useState([]);
    const [levelno, setlevelno] = useState(1);
    const [max, setmax] = useState(1);
    



    //     useEffect(() => {
    //         var temp = [];
    //         for (var i = 1; i <= 28; i++){
    //           temp.push(i);
    //         } 
    //         setBoard(temp);
    //       }, []);
    useEffect(() => {
        var temp = [];
        // var lock = (require('./img/lock.png'))
        for (let i = 1; i < 75; i++) {
            temp.push(i);
        }
        setbord(temp)
    }, [])
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('levelno', value);
            navigation.navigate('Level');

        } catch (e) {
            // saving error
        }
    };
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('levelno');
            if (value !== null) {
                console.log(value)
                setlevelno(parseInt(value))
                // value previously stored
            }
        } catch (e) {
            // error reading value
        }
    };
    const storemaxdata = async (value) => {
        try {
            await AsyncStorage.setItem('max', value);

        } catch (e) {
            // saving error
        }
    };
    const getmaxdata = async () => {
        try {
            const value = await AsyncStorage.getItem('max');
            if (value !== null) {
                setmax(parseInt(value))
            }
            console.log("hello", value)
        } catch (e) {
            // error reading value
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            if (parseInt(levelno) > parseInt(max)) {
                storemaxdata(levelno.toString())
            }
        }, [levelno])
    );

    useFocusEffect(
        React.useCallback(() => {
            getData();
            getmaxdata();
        }, [])
    );







    return (
        <>
            <View>
                <ImageBackground source={require('./img/download.jpg')} style={{ height: '100%', width: '100%' }}>
                    <Text style={{ fontSize: 35, color: 'white', textAlign: 'center' }}>select puzzels</Text>

                    <View style={style.level}>
                        {
                            board.map((value, index) => {
                                return (
                                    <View style={style.row} key={index}>
                                        {(value <= max) ?
                                            <Pressable onPress={() => storeData((index + 1).toString())}>
                                                {/* <Text style={style.levelText}>{value}</Text> */}
                                                <Image source={require('./img/tick.png')} style={style.lock}></Image>
                                            </Pressable>
                                            :
                                            <Pressable>
                                                <Image source={require('./img/padlock.png')} style={style.lock}></Image>
                                            </Pressable>
                                        }
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

export default Lockpage;
const style = StyleSheet.create({
    row: {
        height: '13%',
        width: '24%',
    },
    lock: {
        flexGrow: 1,
        height: 90,
        width: 90,
    },
    level: {
        flex: 6,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        padding: '2%'
    },
    levelText:{
        fontSize:50,
        top:20,
        textAlign:'center'
    }
})