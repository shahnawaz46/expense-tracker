import axios from 'axios';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {URL} from '../../api/URL';

const TransactionModal = ({isModalVisible, setIsModalVisible}) => {
  const deleteTransaction = transactionId => {
      console.log(transactionId);
    // const res = axios.delete(`${URL}/transaction`, {
    //   data: {_id: '951753', transactionId},
    // });
  };
  return (
    <Modal
      isVisible={isModalVisible.status}
      deviceWidth={Dimensions.get('window').width}
      onSwipeComplete={() =>
        setIsModalVisible({...isModalVisible, status: false})
      }
      swipeDirection={'down'}
      hideModalContentWhileAnimating={true}
      style={{
        marginHorizontal: 0,
        marginVertical: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
      <View style={styles.modal}>
        {/* modal close icon */}
        <View style={styles.modalClose} />

        <Text style={styles.modalHeading}>Transaction Details</Text>
        <Text style={styles.modalText}>
          <Text style={styles.modalTitle}>Title:</Text>{' '}
          {isModalVisible.item.title}
        </Text>
        <Text style={styles.modalText}>
          <Text style={styles.modalTitle}>Description:</Text>{' '}
          {isModalVisible.item.description}
        </Text>

        <Text style={styles.modalText}>
          <Text style={styles.modalTitle}>Price:</Text>{' '}
          {isModalVisible.item.price} Rs
        </Text>
        <Text style={styles.modalText}>
          <Text style={styles.modalTitle}>Date:</Text>{' '}
          {isModalVisible.item.date}
        </Text>
        <Text style={styles.modalText}>
          <Text style={styles.modalTitle}>Time:</Text>{' '}
          <Text style={{textTransform: 'uppercase'}}>
            {isModalVisible.item.time}
          </Text>{' '}
        </Text>
        <Text style={styles.modalText}>
          <Text style={styles.modalTitle}>Tag:</Text> {isModalVisible.item.tag}
        </Text>
        <Text style={styles.modalText}>
          <Text style={styles.modalTitle}>Add Date:</Text>{' '}
          {new Date(isModalVisible.item.timestamps).toLocaleString()}
        </Text>

        <TouchableOpacity
          style={styles.modalBtn}
          onPress={() => deleteTransaction(isModalVisible.item._id)}>
          <Text style={{color: '#fff', fontSize: 18}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default TransactionModal;

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: 500,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 12,
  },

  modalClose: {
    backgroundColor: '#dcdcdc',
    width: 60,
    height: 6,
    borderRadius: 10,
    alignSelf: 'center',
    // borderColor: 'red',
  },

  modalHeading: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 500,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    marginHorizontal: -12,
    // borderBottom: 0.5
  },

  modalText: {
    fontSize: 17,
    marginBottom: 6,
    textTransform: 'capitalize',
    color: '#000',
  },

  modalTitle: {
    fontWeight: 500,
    fontSize: 18,
  },

  modalBtn: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#42224a',
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
});
