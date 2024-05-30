import React, { useEffect ,useState} from 'react'
import { ImageBackground,StyleSheet ,View,Pressable,Text} from 'react-native'

function Winpage({navigation,route}) {

      const { levelno } = route.params;
      console.log(levelno)
  // const [levelno,setlevelno]=useState();
      // const [curAns,setcurAns]=useState([]);

      // const truans=["START","SANDWICH","EARRING","ICECREAM","KEYBOARD","STARBUCK","WEBMAIL","DISCOVER","LAYOFF","MOUSETRAP"];

      // useEffect(()=>{
      //   const truansstring=truans[levelno];
  
      //   var ansArr = truansstring.split("")
      //   console.log(truansstring);
      // console.log(ansArr);
      // setcurAns(ansArr);

      // var fixans=truans[levelno];
      // var blankans=[];

      // for (let i = 0; i < fixans.length; i++) {
      //   blankans.push("");
        
      // }
      // setcurAns(blankans)


    //  },[])



    
  const box=[1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20]

  return (
    <>
       <ImageBackground  style={style.background} source={require('./img/winback.jpg')} resizeMode='stretch'> 
          <View style={{height:240,backgroundColor:'#F7D28C',marginTop:200}}>
              <Text style={{color:"#6E6846",textAlign:'center',fontSize:30,fontWeight:'bold'}}>The Word Was</Text>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
              {
              // curAns.map((val,ind)=>{
              //   return(
              //     <>
              //       <Pressable key={val}>< Text style={{fontSize:35,color:'black',textAlign:'center',marginTop:10,borderColor:'#7D6B2A',borderStyle:'solid',borderWidth:2,height:50,borderRadius:10,width:50,backgroundColor:'white'}}>{val}</Text></Pressable>
              //     </>
              //   )
              // })
            }
            </View>
            <Text style={{color:"#6E6846",textAlign:'center',fontSize:30,fontWeight:'bold',margin:10}}>Coin earned</Text>
            <Text style={{color:"#6E6846",textAlign:'center',fontSize:40,fontWeight:'bold',margin:10}}>💰50</Text>
          </View>
          <View style={style.btn}>


            <Pressable onPress={()=>navigation.navigate('Continue',{'levelno':levelno + 1})} style={{backgroundColor:'#F3CF39',padding:5,borderWidth:3,borderColor:'#C89C2C',borderRadius:7}} ><Text style={{fontSize:35,color:'585B49',textAlign:"center"}}>Continue!</Text></Pressable>
          </View>
       </ImageBackground> 
    </>
  )
}

export default Winpage;
const style=StyleSheet.create({
     
  background:{
    height: '100%',
     width: '100%' 
  },
  btn:{
    width:180,

    // backgroundColor:'green',
    flex:1,
    justifyContent:'center',
    alignSelf:'center'
    
    },
    txt:{
      // height:"50%",
      fontSize:25,
      fontWeight:"900",
      textAlign:"center",
      textAlignVertical:"center",
      color:"black",
  }
})