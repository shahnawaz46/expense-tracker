import React, {useState} from 'react';
import {Pressable, StyleSheet, TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DatePicker = ({
  placeholder,
  value,
  onPickupDateAndTime,
  mode,
  iconName,
}) => {
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  const onDateHandle = ({type}, selectedDate) => {
    setShowDate(false);
    if (type == 'set') {
      onPickupDateAndTime(selectedDate);
      setDate(selectedDate);
    }
  };

  return (
    <>
      {showDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="spinner"
          is24Hour={true}
          onChange={onDateHandle}
        />
      )}
      <Pressable style={styles.input} onPress={() => setShowDate(true)}>
        <Ionicons name={iconName} size={20} color={'#42224a'} />
        <TextInput
          placeholder={placeholder}
          style={{fontSize: 16, color: '#000', width: '93%'}}
          placeholderTextColor={'#aaafb5'}
          value={value}
          editable={false}
        />
      </Pressable>
    </>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  input: {
    width: '47.8%',
    height: 50,
    borderWidth: 0.5,
    borderColor: '#42224a',
    borderRadius: 10,
    alignSelf: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
});
