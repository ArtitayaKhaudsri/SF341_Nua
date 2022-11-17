import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'; 
import MainMenuPage from './pages/MainMenuPage';
import MenuBoiledPage from './pages/MenuBoiledPage';
import MenuStirFryPage from './pages/MenuStirFryPage';
import MenuDeepFriedPage from './pages/MenuDeepFriedPage';
import MenuOtherPage from './pages/MenuOtherPage';
import Favarite from './pages/Favorite'
import Profile from "./pages/Profile";

const Stack = createNativeStackNavigator();

function PageStack() {
  return (
    <Stack.Navigator >

      {/* <Stack.Screen 
        name="LoginPage" 
        component={LoginPage} 
        options={{headerShown:false}}
      />

      <Stack.Screen 
        name="RegisterPage" 
        component={RegisterPage} 
        options={{headerShown:false}}
      /> */}

      <Stack.Screen 
        name="MainMenuPage" 
        component={MainMenuPage} 
        options={{headerShown:false}}
      />

      <Stack.Screen 
        name="MenuBoiledPage" 
        component={MenuBoiledPage} 
        options={{headerShown:false}}
      />

      <Stack.Screen 
        name="MenuStirFryPage" 
        component={MenuStirFryPage} 
        options={{headerShown:false}}
      />

      <Stack.Screen 
        name="MenuDeepFriedPage" 
        component={MenuDeepFriedPage} 
        options={{headerShown:false}}
      /> 

      <Stack.Screen 
        name="MenuOtherPage" 
        component={MenuOtherPage} 
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown:false}}
      />

      <Stack.Screen
        name="Favarite"
        component={Favarite}
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