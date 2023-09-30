import React, {useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import TransactionModal from '../modal/TransactionModal';

const tagImages = {
  "Clothing": require('../../asset/clothing.png'),
  "Food": require('../../asset/food.png'),
  "Travel": require('../../asset/travel.png'),
  "Education": require('../../asset/education.png'),
  "Electronics": require('../../asset/electronics.png'),
  "Broadband": require('../../asset/broadband.png'),
  "Payment": require('../../asset/payment.png'),
  "Bill": require('../../asset/bill.png'),
  "Rent": require('../../asset/rent.png'),
  "Medical/Healthcare": require('../../asset/healthcare.png'),
};

const RecentTransaction = ({recentTransactions}) => {
  const [isModalVisible, setIsModalVisible] = useState({
    status: false,
    item: {},
  });
  return (
    <>
      <View style={{flex: 1, marginBottom: 110}}>
        <Text style={{fontSize: 19, color: '#000', fontWeight: 500}}>
          Recent Transactions
        </Text>

        {recentTransactions.length > 0 ? (
          <View style={{marginTop: 10, flexGrow: 1}}>
            <FlatList
              data={recentTransactions}
              keyExtractor={item => item._id}
              contentContainerStyle={{gap: 15, flexGrow: 1}}
              renderItem={({item}) => (
                <Pressable
                  style={styles.itemContainer}
                  onPress={() => setIsModalVisible({status: true, item})}>
                  <View
                    style={{
                      backgroundColor: '#f7f4f8',
                      padding: 12,
                      borderRadius: 50,
                    }}>
                    <Image
                      source={tagImages[item.tag]}
                      style={{
                        width: 28,
                        height: 28,
                      }}
                    />
                  </View>
                  <View style={{flex: 1}}>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: '#26172a',
                        fontSize: 16,
                        textTransform: 'capitalize',
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        color: '#aaafb5',
                        fontSize: 15,
                        textTransform: 'capitalize',
                      }}>
                      {item.tag}
                    </Text>
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <Text style={{color: '#26172a', fontSize: 14}}>
                      {item.price} Rs
                    </Text>
                    <Text style={{color: '#aaafb5', fontSize: 13}}>
                      {item.date} - {item.time}
                    </Text>
                  </View>
                </Pressable>
              )}
            />
          </View>
        ) : (
          <View style={styles.noTransactionContainer}>
            <Image
              source={require('../../asset/empty.png')}
              style={{
                width: 48,
                height: 48,
              }}
            />
            <Text style={styles.noTransactionText}>No Transaction</Text>
          </View>
        )}
      </View>

      <TransactionModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default RecentTransaction;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: 10,
    gap: 10,
    // backgroundColor:'red'
  },

  noTransactionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
  },

  noTransactionText: {
    fontSize: 17,
    color: '#000',
  },
});
