/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ReduxProvider from './src/redux/ReduxProvider';

// create root component for ReduxProvider
const Root = () => {
  return (
    <ReduxProvider>
      <App />
    </ReduxProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
