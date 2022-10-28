import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'; 
import MainMenuPage from './pages/MainMenuPage';
import RecipeLabel from './pages/RecipeLabel';

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
