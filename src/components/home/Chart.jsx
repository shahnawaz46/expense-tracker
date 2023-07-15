import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-gifted-charts';

const tempData = [
  {value: 0, label: 'Jan'},
  {value: 0, label: 'Feb'},
  {value: 0, label: 'Mar'},
  {value: 0, label: 'Apr'},
  {value: 0, label: 'May'},
  {value: 0, label: 'Jun'},
  {value: 0, label: 'Jul'},
  {value: 0, label: 'Aug'},
  {value: 0, label: 'Sep'},
  {value: 0, label: 'Oct'},
  {value: 0, label: 'Nov'},
  {value: 0, label: 'Dec'},
];

const currentYear = new Date().getFullYear();

const Chart = ({chartData}) => {
  return (
    <View style={styles.chart_container}>
      <View style={styles.chart_hearder}>
        <Text style={styles.chart_header_txt}>
          Total:{' '}
          {chartData.reduce((total, current) => total + current.value, 0)} Rs
        </Text>
        <Text style={{...styles.chart_header_txt, fontSize:15}}>
          Year: {currentYear}
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 20,
          paddingStart: 5,
          alignItems: 'center',
        }}>
        <BarChart
          data={chartData.length > 0 ? chartData : tempData}
          barWidth={30}
          height={150}
          initialSpacing={10}
          gradientColor={'red'}
          barBorderRadius={2}
          rulesType={false}
          lineData={10}
          dashGap={10}
          frontColor={'#684e6e'}
          yAxisThickness={0}
          xAxisType={'dashed'}
          xAxisColor={'lightgray'}
          yAxisTextStyle={{color: 'lightgray'}}
          noOfSections={3}
          yAxisIndicesWidth={10}
          yAxisLabelWidth={60}
          xAxisLabelTextStyle={{color: 'lightgray', textAlign: 'center'}}
          yAxisAtTop={1}
        />
      </View>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  chart_container: {
    marginTop: 20,
    marginBottom: 15,
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#42224a',
  },

  chart_hearder:{
    flexDirection: "row",
    justifyContent:'space-between'
  },

  chart_header_txt:{
    color: 'white', 
    fontSize: 18, 
    fontWeight: '500'
  }
});
