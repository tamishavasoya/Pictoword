import React from 'react'
import Levelpage from './Levelpage';
import Homepage from './Homepage';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lockpage from './Lockpage';
// import winpage from './Winpage';
import Winpage from './Winpage';
import Winboard from './Winboard';
import Losepage from './Losepage';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Homepage}/>
        <Stack.Screen name="Continue" component={Levelpage} />
        <Stack.Screen name="Level" component={Lockpage}/>
        <Stack.Screen name='Win' component={Winboard}/> 
        <Stack.Screen name='Lose' component={Losepage}/> 

     </Stack.Navigator>
    </NavigationContainer>
   
    </>
  )
}

export default App;