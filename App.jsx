import React, {useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import Toast, {ErrorToast, SuccessToast} from 'react-native-toast-message';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// components
import BottomTab from './src/navigation/BottomTab';
import Store from './src/redux/Store';
import {fetchRecentTransactions} from './src/redux/slice/RecentTransactionSlice';

// cd ./android && ./gradlew clean && cd .. && npm run android

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
  const dispatch = useDispatch();
  const {status} = useSelector(state => state.transactions);

  useEffect(() => {
    SplashScreen.hide();
    if (status === 'idle') dispatch(fetchRecentTransactions());
  }, []);

  return (
    <>
      <StatusBar backgroundColor={'#42224a'} />
      <NavigationContainer theme={theme}>
        <BottomTab />
      </NavigationContainer>
      <Toast config={toastConfig} />
    </>
  );
};

export default App;
