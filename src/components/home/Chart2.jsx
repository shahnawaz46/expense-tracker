import React from 'react';
import {StyleSheet, Text, View,Dimensions} from 'react-native';
import {BarChart, LineChart} from 'react-native-chart-kit';

const data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      data: [205, 450, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
   
  ],
//   legend: ['Totals 50000'],
};

const chartConfig = {
  backgroundGradientFrom: '#42224a',
  backgroundGradientTo: '#42224a',
  color: (opacity = 1) => `rgba(256,256,256, ${opacity})`,
  strokeWidth: 0, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
  decimalPlaces: 0,
  style: {
    padding: 10,
  },
};

const Chart2 = () => {
  return (
    <View
      style={{
        marginVertical: 10,
        paddingTop: 16,
        paddingHorizontal: 5,
        borderRadius: 20,
        backgroundColor: '#42224a',
      }}>
      <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
        Total: 5000 Rs
      </Text>
     
    <LineChart
        data={data}
        width={Dimensions.get('window').width - 30}
        height={260}
        verticalLabelRotation={30}
        // withDots={false}
        withInnerLines={false}
        yLabelsOffset={10}
        yAxisLabel="₨ "
        onDataPointClick={({value}) => console.log(value)}
        chartConfig={chartConfig}
        style={{borderRadius: 15, marginVertical: 20}}
        bezier
      />
      </View>
    //   </View>
  );
};

export default Chart2;

const styles = StyleSheet.create({});
