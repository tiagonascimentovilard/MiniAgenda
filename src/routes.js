import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './Pages/Main';
import Todos from './Pages/Todos';

const Stack = createStackNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Todos" component={Todos} />
    </Stack.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <StackScreens/>
    </NavigationContainer>
  );
}

export default Routes;