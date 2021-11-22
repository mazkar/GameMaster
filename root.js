import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './src/utils/nav';
//screen
import Login from './src/Screen/Login/index';
import Home from './src/Screen/Home/index';
import Register from './src/Screen/Register';
import GameDetails from './src/Screen/Home/GameDetails';
import ButtonGenre from './src/Component/ButtonGenre';

import {useSelector} from 'react-redux';
const Stack = createStackNavigator();

export default function Root() {
  const token = useSelector(state => state.LoginReducer.access_token);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          component={GameDetails}
          name="Detail"
          options={{headerShown: false}}
        />
        <Stack.Screen component={ButtonGenre} name="Gamegenre" />
        <Stack.Screen
          component={Home}
          name="Home"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
