import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Preload from './pages/Preload';
import Favorite from './pages/Favorite';
import Profile from './pages/Profile';


const Stack = createNativeStackNavigator();

function PageStack() {
  return (
    <Stack.Navigator 
    >
      <Stack.Screen 
        name="Preload" 
        component={Preload} 
        options={{headerShown:false}}
      />
      <Stack.Screen 
        name="Favorite" 
        component={Favorite} 
        options={{headerShown:false}}
      />
      <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={{headerShown:false}}
      />
     
      
    </Stack.Navigator>

  )
}

export default function App() {
  return (
    <NavigationContainer>
      <PageStack/>
    </NavigationContainer>
  );
}


