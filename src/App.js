import React from 'react';
import './style.css';
import { NavigationContainer } from '@react-navigation/native';
import StackContainer from './showPage/StackContainer';

export default function App() {
  return (
    <NavigationContainer>
    <StackContainer />
  </NavigationContainer>
  );
}