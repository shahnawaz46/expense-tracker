import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomInput = ({placeholder, iconName, value, onChangeText, type="default"}) => {
  return (
    <View style={styles.input}>
      <Ionicons name={iconName} size={20} color={'#42224a'} />
      <TextInput
        placeholder={placeholder}
        style={{fontSize: 16, color: '#000', width: '93%'}}
        placeholderTextColor={'#aaafb5'}
        value={value}
        onChangeText={onChangeText}
        keyboardType={type}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
});
