import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// components
import RecentTransaction from '../components/home/RecentTransaction';
import Chart from '../components/home/Chart';
import {fetchRecentTransactions} from '../redux/slice/RecentTransactionSlice';

const Home = () => {
  const {recentTransactions, chartData, loading, error} = useSelector(
    state => state.transactions,
  );
  const dispatch = useDispatch();
  // console.log(recentTransactions, chartData);

  useEffect(() => {
    if (loading === 'idle') {
      dispatch(fetchRecentTransactions());
    }
  }, []);

  // if (loading === 'failed') {
  //   console.log(error);
  //   return (
  //     <View>
  //       <Text>Opps..</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, fontWeight: 400, color: '#000'}}>
        Expense <Text style={{color: '#42224a', fontWeight: 600}}>Tracker</Text>
      </Text>

      {loading === 'pending' ? (
        <View style={styles.loading}>
          <Image
            source={require('../asset/loading.gif')}
            style={{
              width: 80,
              height: 80,
            }}
          />
        </View>
      ) : (
        <>
          <Chart chartData={chartData} />

          <RecentTransaction
            loading={loading}
            recentTransactions={recentTransactions}
          />
        </>
      )}
    </View>
  );
};



export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
  },

  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 75,
    // backgroundColor: 'green',
  },
});
