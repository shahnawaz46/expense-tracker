import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomInput from '../components/input/CustomInput';
import DropDown from '../components/input/DropDown';

const Add = () => {
  const [transactionValue, setTransactionValue] = useState({
    title: '',
    description: '',
    price: '',
    tag: '',
  });
  const [validationError, setValidationError] = useState();

  const onValidation = msg => {
    setValidationError(msg);
    setTimeout(() => {
      setValidationError();
    }, 1500);
  };

  const storeTransactionDetails = () => {
    console.log(transactionValue);
    if (transactionValue.title == '') {
      onValidation('Please Enter Title');
      return;
    } else if (transactionValue.description == '') {
      onValidation('Please Enter Description');
      return;
    } else if (transactionValue.price == '') {
      onValidation('Please Enter Price');
      return;
    } else if (transactionValue.tag == '') {
      onValidation('Please Select Tag');
      return;
    }

    setTransactionValue({title: '', description: '', price: '', tag: ''});
  };

  return (
    <View style={styles.formContainer}>
      {/* for show error message */}
      <View
        style={{
          ...styles.errorMessage,
          display: validationError ? 'flex' : 'none',
        }}>
        <Text style={{fontSize: 15, color: 'white'}}>{validationError}</Text>
      </View>

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
          valida
        />

        <CustomInput
          placeholder={'Enter Price'}
          iconName={'wallet'}
          value={transactionValue.price}
          onChangeText={txt =>
            setTransactionValue({...transactionValue, price: txt})
          }
          type='numeric'
        />

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
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  errorMessage: {
    position: 'absolute',
    top: 12,
    left: 12,
    right: 12,
    backgroundColor: '#ff3333',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
});
