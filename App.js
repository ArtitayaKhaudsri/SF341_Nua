import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BoiledPage from './pages/BoiledPage';
import FriedPage from './pages/FriedPage';
import DeepfriedPage from './pages/DeepfriedPage';
import CooldownPage from './pages/CooldownPage';

const Stack = createNativeStackNavigator();

function PageStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      // headerStyle: {
      //   backgroundColor: '#C21010',
      // },
      // headerTitleAlign: 'center',
      // headerTintColor: '#F5F5F5',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
        
    }}
    > 
      <Stack.Screen 
        name="BoiledPage" 
        component={BoiledPage}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="FriedPage" 
        component={FriedPage}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="DeepfriedPage" 
        component={DeepfriedPage}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="CooldownPage" 
        component={CooldownPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <PageStack />
    </NavigationContainer>
  );
}
export default App;