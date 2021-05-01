import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './src/constants/Routes';
import LoginScreen from './src/screens/login';
import RegisterScreen from './src/screens/register';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={Routes.Login}
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name={Routes.Login} component={LoginScreen} />
        <Stack.Screen name={Routes.Register} component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
