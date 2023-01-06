import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './showPage/Login';
import SignUp from './showPage/SignUp';

const login = 'Login';
const signup = 'SignUp';
const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={login} component={Login} option={{}} />
      <Stack.Screen name={signup} component={SignUp} option={{}} />
    </Stack.Navigator>
  );
}
