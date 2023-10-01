import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

// components
import RecentTransaction from '../components/home/RecentTransaction';
import Chart from '../components/home/Chart';

const Home = () => {
  const {recentTransactions, chartData, status, error} = useSelector(
    state => state.transactions,
  );

  if (status === 'failed') {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20}}>{error}</Text>
        <Text style={{fontSize: 20}}>{'Please restart the app'}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, fontWeight: 400, color: '#000'}}>
        Expense <Text style={{color: '#42224a', fontWeight: 600}}>Tracker</Text>
      </Text>

      {status === 'pending' ? (
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

          <RecentTransaction recentTransactions={recentTransactions} />
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
  },
});
