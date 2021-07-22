import React from 'react';
import { StatusBar } from 'react-native';

import { Dashboard } from './src/screens'

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      <Dashboard />
    </>
  );
}
