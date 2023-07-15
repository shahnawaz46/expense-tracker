import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Toast, {ErrorToast, SuccessToast} from 'react-native-toast-message';

// components
import BottomTab from './src/navigation/BottomTab';
import Store from './src/redux/Store';
import {StatusBar} from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

const toastConfig = {
  success: props => (
    <SuccessToast
      {...props}
      contentContainerStyle={{paddingHorizontal: 20}}
      text1NumberOfLines={2}
      text1Style={{fontSize: 14}}
      text2Style={{fontSize: 13}}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      contentContainerStyle={{paddingHorizontal: 20}}
      text1NumberOfLines={2}
      text1Style={{fontSize: 14}}
      text2Style={{fontSize: 13}}
    />
  ),
};

const App = () => {
  return (
    <Provider store={Store}>
      <StatusBar backgroundColor={'#42224a'} />
      <NavigationContainer theme={theme}>
        <BottomTab />
      </NavigationContainer>
      <Toast config={toastConfig} />
    </Provider>
  );
};

export default App;
