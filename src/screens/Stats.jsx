import {Text, View} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';

const tags = [
  {id: 1021, name: 'Foods', color: '#006DFF', percentage: 45},
  {id: 1022, name: 'Travel', color: '#8F80F3', percentage: 31},
  {id: 1023, name: 'Payment', color: '#3BE9DE', percentage: 75},
  {id: 1024, name: 'Broadband', color: '#FF7F97', percentage: 12},
  {id: 1025, name: 'Bill', color: '#DB368B', percentage: 10},
  {id: 1026, name: 'Rent', color: '#018154', percentage: 0.4},
  {id: 1027, name: 'Electronics', color: '#FDB643', percentage: 20},
  {id: 1028, name: 'Education', color: '#A13EFE', percentage: 0},
  {id: 1029, name: 'Medical/Healthcare', color: '#A17855', percentage: 0},
  {id: 1031, name: 'Clothing', color: '#6B47F8', percentage: 0},
];

const Stats = () => {
  const pieData = tags.map(item => {
    return {value: item.percentage, color: item.color};
  });

  const renderLegendComponent = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 5,
            paddingHorizontal: 10,
            marginBottom: 10,
          }}>
          {tags.map(item => (
            <View
              key={item.id}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 120,
                marginRight: 20,
              }}>
              <View
                style={{
                  height: 11,
                  width: 11,
                  borderRadius: 8,
                  backgroundColor: item.color,
                  marginRight: 10,
                }}
              />
              <Text style={{color: '#000', fontSize: 16}}>
                {item.name}: {item.percentage}%
              </Text>
            </View>
          ))}
        </View>
      </>
    );
  };

  return (
    <View
      style={{
        // paddingVertical: 100,
        // backgroundColor: '#34448B',
        padding: 12,
        flex: 1,
      }}>
      <View
        style={{
          // margin: 20,
          // padding: 16,
          borderRadius: 20,
          backgroundColor: '#fff',
        }}>
        <Text style={{fontSize: 25, fontWeight: 600, color: '#000'}}>
          Analytics
          <Text style={{color: '#42224a', fontWeight: 600, fontSize: 15}}>
            {' '}
            (All Time)
          </Text>
        </Text>
        {/* <Text style={{fontSize: 14,fontWeight:600, color: '#42224a', marginTop:-3}}>
          All TIme{' '}
        </Text> */}
        <View style={{padding: 20, alignItems: 'center'}}>
          <PieChart
            data={pieData}
            donut
            sectionAutoFocus
            radius={140}
            innerRadius={80}
            innerCircleColor={'#fff'}
            centerLabelComponent={() => {
              return (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{fontSize: 22, color: '#000', fontWeight: 'bold'}}>
                    47%
                  </Text>
                  <Text style={{fontSize: 14, color: '#000'}}>Excellent</Text>
                </View>
              );
            }}
          />
        </View>
        {renderLegendComponent()}
      </View>
    </View>
  );
};

export default Stats;
