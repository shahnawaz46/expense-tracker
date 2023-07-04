import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import BottomTab from './src/navigation/BottomTab';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <BottomTab />
    </NavigationContainer>
  );
};

export default App;
