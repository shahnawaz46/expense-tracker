import {Provider} from 'react-redux';
import Store from './Store';

const ReduxProvider = ({children}) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default ReduxProvider;
