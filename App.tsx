import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme/theme';
import { Dashboard } from './src/screens'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      <Dashboard />
    </ThemeProvider>
  );
}
