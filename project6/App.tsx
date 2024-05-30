import React from 'react'
import Home from './Homepage';
import Homepage from './Homepage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Quout from './Quout';
import Singlepage from './Singlepage';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Homepage} />
              <Stack.Screen name="Detail" component={Quout} />
              <Stack.Screen name="Single" component={Singlepage} />
          </Stack.Navigator>

      </NavigationContainer>
    </>
  )
}

export default App;