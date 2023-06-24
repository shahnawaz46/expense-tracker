import { StyleSheet, Text, View} from 'react-native';
import React from 'react';

// components
import RecentTransaction from '../components/home/RecentTransaction';
import Chart from '../components/home/Chart';


const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, fontWeight: 400,color:'#000'}}>
        Expense <Text style={{color: '#42224a', fontWeight:600}}>Tracker</Text>
      </Text>

      <Chart />

      <RecentTransaction />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex:1
  },
});
