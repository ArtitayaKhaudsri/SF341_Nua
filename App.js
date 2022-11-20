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
import Favorite from './pages/Favorite'
import Profile from "./pages/Profile";
import RecipePage from "./pages/RecipePage";
import ProcessNoClock from "./pages/ProcessNoClock";
import ProcessNoClock2 from "./pages/ProcessNoClock2";
import ProcessNoClock3 from "./pages/ProcessNoClock3";
import ProcessNoClock4 from "./pages/ProcessNoClock4";
const Stack = createNativeStackNavigator();

function PageStack() {
  return (
    <Stack.Navigator >

      <Stack.Screen
        name="LoginPage" 
        component={LoginPage} 
        options={{headerShown:false}}
      />

      <Stack.Screen 
        name="RegisterPage" 
        component={RegisterPage} 
        options={{headerShown:false}}
      />

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
        name="Favorite"
        component={Favorite}
        options={{headerShown:false}}
      />

        <Stack.Screen
            name="RecipePage"
            component={RecipePage}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name="ProcessNoClock"
            component={ProcessNoClock}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name="ProcessNoClock2"
            component={ProcessNoClock2}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name="ProcessNoClock3"
            component={ProcessNoClock3}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name="ProcessNoClock4"
            component={ProcessNoClock4}
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