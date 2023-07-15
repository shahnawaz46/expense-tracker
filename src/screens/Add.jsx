import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import Toast from 'react-native-toast-message';

// components
import CustomInput from '../components/input/CustomInput';
import DropDown from '../components/input/DropDown';
import DatePicker from '../components/input/DatePicker';
import {URL} from '../api/URL';
import {updateRecentTransaction} from '../redux/slice/RecentTransactionSlice';

const Add = () => {
  const dispatch = useDispatch();
  const [transactionValue, setTransactionValue] = useState({
    title: '',
    description: '',
    price: null,
    tag: '',
    date: '',
    time: '',
  });

  const onValidation = msg => {
    Toast.show({
      type: 'error',
      text1: msg,
      topOffset: 30,
    });
  };

  const storeTransactionDetails = async () => {
    if (transactionValue.title == '') {
      onValidation('Please Enter Title');
      return;
    } else if (transactionValue.description == '') {
      onValidation('Please Enter Description');
      return;
    } else if (transactionValue.price == '' || transactionValue.price == null) {
      onValidation('Please Enter Price');
      return;
    } else if (transactionValue.date == '') {
      onValidation('Please Select Date');
      return;
    } else if (transactionValue.time == '') {
      onValidation('Please Select Time');
      return;
    } else if (transactionValue.tag == '') {
      onValidation('Please Select Tag');
      return;
    }

    try {
      const res = await axios.post(`${URL}/transaction`, {
        ...transactionValue,
        price: parseInt(transactionValue.price),
        _id: '951753',
      });

      Toast.show({
        type: 'success',
        text1: res.data.msg,
        topOffset: 30,
      });

      dispatch(updateRecentTransaction(res.data));
    } catch (err) {
      // console.log(err);
      onValidation('Something Went Wrong Please Try Again');
    }

    setTransactionValue({
      title: '',
      description: '',
      price: '',
      tag: null,
      date: '',
      time: '',
    });
  };

  return (
    <View style={styles.formContainer}>
      <Image
        source={require('../asset/logo.png')}
        style={{width: 60, height: 60, borderRadius: 50}}
      />
      <Text style={styles.formHeading}>Add New Transaction</Text>
      <View style={{width: '100%', marginTop: 30}}>
        <CustomInput
          placeholder={'Enter Title (Ex: Buy Cloths, Eat Biryani)'}
          iconName={'reader'}
          value={transactionValue.title}
          onChangeText={txt =>
            setTransactionValue({...transactionValue, title: txt})
          }
        />

        <CustomInput
          placeholder={'Description'}
          iconName={'newspaper'}
          value={transactionValue.description}
          onChangeText={txt =>
            setTransactionValue({...transactionValue, description: txt})
          }
        />

        <CustomInput
          placeholder={'Enter Price (only Rupee)'}
          iconName={'wallet'}
          value={transactionValue.price}
          onChangeText={txt =>
            setTransactionValue({...transactionValue, price: txt})
          }
          type="numeric"
        />

        {/* date and time select components */}
        <View
          style={{
            flexDirection: 'row',
            width: '95%',
            gap: 15,
            alignSelf: 'center',
          }}>
          <DatePicker
            placeholder={'Select Date'}
            value={transactionValue.date}
            onPickupDateAndTime={selectedDate => {
              let date = new Date(selectedDate);
              return setTransactionValue({
                ...transactionValue,
                date: `${
                  date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()
                }/${
                  date.getMonth() < 9
                    ? '0' + (date.getMonth() + 1)
                    : date.getMonth() + 1
                }/${date.getFullYear()}`,
              });
            }}
            mode="date"
            iconName="calendar"
          />

          <DatePicker
            placeholder={'Select Time'}
            value={transactionValue.time}
            onPickupDateAndTime={selectedDate => {
              let date = new Date(selectedDate);
              return setTransactionValue({
                ...transactionValue,
                time: `${
                  date.getHours() % 12 == 0 ? 12 : date.getHours() % 12
                }:${
                  date.getMinutes() <= 9
                    ? '0' + date.getMinutes()
                    : date.getMinutes()
                }${date.getHours() >= 12 ? 'PM' : 'AM'}`,
              });
            }}
            mode="time"
            iconName="time"
          />
        </View>

        <DropDown
          value={transactionValue.tag}
          onChangeText={tag =>
            setTransactionValue({...transactionValue, tag: tag.name})
          }
        />

        <TouchableOpacity
          style={styles.inputBtn}
          onPress={storeTransactionDetails}>
          <Text style={{color: '#fff', fontSize: 18}}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  formContainer: {
    padding: 12,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 110,
  },

  formHeading: {
    fontSize: 23,
    fontWeight: 600,
    color: '#42224a',
    marginTop: 40,
  },

  inputBtn: {
    backgroundColor: '#42224a',
    width: '95%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
});
