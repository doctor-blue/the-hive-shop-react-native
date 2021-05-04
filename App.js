import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './src/constants/Routes';
import LoginScreen from './src/screens/login';
import RegisterScreen from './src/screens/register';
import ProductScreen from './src/screens/product';
import ProductDetailScreen from './src/screens/detail';
import SettingScreen from './src/screens/setting';

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
        <Stack.Screen name={Routes.Product} component={ProductScreen} />
        <Stack.Screen name={Routes.Setting} component={SettingScreen} />
        <Stack.Screen name={Routes.ProductDetail} component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
