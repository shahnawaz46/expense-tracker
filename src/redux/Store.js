import {configureStore} from '@reduxjs/toolkit';
import transactionReducer from './slice/RecentTransactionSlice';

const Store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
});

export default Store;
