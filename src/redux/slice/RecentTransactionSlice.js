import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {URL} from '../../api/URL';
import axios from 'axios';

const initialState = {
  status: 'idle',
  recentTransactions: [],
  chartData: [],
  error: null,
};

export const fetchRecentTransactions = createAsyncThunk(
  'recentTransaction/fetching',
  async () => {
    const currentYear = new Date().getFullYear();
    const res = await axios.get(
      `${URL}/recent_transaction?_id=951753&year=${currentYear}`,
    );
    return res.data;
  },
);

const recentTransactionSlice = createSlice({
  name: 'recentTransaction',
  initialState,
  reducers: {
    updateRecentTransaction: (state, action) => {
      (state.recentTransactions = action.payload.recent_transaction),
        (state.chartData = action.payload.chart_data);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRecentTransactions.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(fetchRecentTransactions.fulfilled, (state, action) => {
        (state.status = 'succeeded'),
          (state.recentTransactions = action.payload.recent_transaction);
        state.chartData = action.payload.chart_data;
      })
      .addCase(fetchRecentTransactions.rejected, (state, action) => {
        (state.status = 'failed'), (state.error = action.error.message);
      });
  },
});

export const {updateRecentTransaction} = recentTransactionSlice.actions;

export default recentTransactionSlice.reducer;
