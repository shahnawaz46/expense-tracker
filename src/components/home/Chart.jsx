import {Text, View} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-gifted-charts';

const data = [
  {value: 500, label: 'Jan'},
  {value: 300, label: 'Feb'},
  {value: 230, label: 'Mar'},
  {value: 520, label: 'Apr'},
  {value: 20, label: 'May'},
  {value: 415, label: 'Jun'},
  {value: 700, label: 'Jul'},
  {value: 1569, label: 'Aug'},
  {value: 0, label: 'Sep'},
  {value: 0, label: 'Oct'},
  {value: 0, label: 'Nov'},
  {value: 0, label: 'Dec'},
];

const Chart = () => {
  return (
    <View
      style={{
        marginTop: 20,
        marginBottom: 15,
        padding: 16,
        borderRadius: 20,
        backgroundColor: '#42224a',
      }}>
      <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
        Total: 5000 Rs
      </Text>
      <View
        style={{
          paddingVertical: 20,
          paddingStart: 5,
          alignItems: 'center',
        }}>
        <BarChart
          data={data}
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
