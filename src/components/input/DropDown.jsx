import {StyleSheet} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';

const tags = [
  {id: '100', name: 'Clothing'},
  {id: '102', name: 'Food'},
  {id: '103', name: 'Shoes'},
  {id: '104', name: 'Travel'},
  {id: '105', name: 'Electronics'},
  {id: '106', name: 'Broadband'},
  {id: '107', name: 'Payment'},
  {id: '108', name: 'Bill'},
  {id: '109', name: 'Rent'},
  {id: '110', name: 'Doctor'},
  {id: '111', name: 'Medicines'},
];

const DropDown = ({value, onChangeText}) => {
  console.log(value);
  return (
    <Dropdown
      style={styles.dropDown}
      placeholderStyle={{color: '#aaafb5'}}
      selectedTextStyle={{color: '#000'}}
      placeholder="Select Tag"
      data={tags}
      labelField={'name'}
      valueField={'name'}
      maxHeight={200}
      value={value}
      onChange={onChangeText}
      renderLeftIcon={() => (
        <Ionicons
          name="pricetag"
          size={20}
          color={'#42224a'}
          style={{marginRight: 10}}
        />
      )}
    />
  );
};

export default React.memo(DropDown);

const styles = StyleSheet.create({
  dropDown: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    // justifyContent:'center'
  },
});
