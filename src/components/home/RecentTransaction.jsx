import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const transaction = [
  {
    id: 1,
    tag: 'Clothing',
    title: 'Buy Clothes',
    description: 'Buy 2 shirts and 1 jeans from 27 Block',
    price: '1350 Rs',
    date: '19/06/2023 - 7:18PM',
  },
  {
    id: 2,
    tag: 'Shoes',
    title: 'Buy Shoes',
    description: 'Buy Shoes for Bakra Eid in Trilok puri 26 Block',
    price: '1000 Rs',
    date: '220/06/2023 - 6:50PM',
  },
  {
    id: 3,
    tag: 'Food',
    title: 'Chicken Roll',
    description:
      'Eat Chicken Roll and Cold Drink with Friends at Zaika Roll in Samachar Appartment',
    price: '150 Rs',
    date: '21/06/2023 - 6:50PM',
  },
  {
    id: 4,
    tag: 'Food',
    title: 'Nahari Roti',
    description: 'Eat Nahari Roti with friends at Zakir Famous Nahari in Okhla',
    price: '200 Rs',
    date: '22/06/2023 - 9:26PM',
  },
  {
    id: 5,
    tag: 'Travel',
    title: 'Bike Petrol',
    description: 'Bike petrol for going Okhla with friends',
    price: '110 Rs',
    date: '23/06/2023 - 7:39PM',
  },
  {
    id: 6,
    tag: 'Electronics',
    title: 'Buy Earphone',
    description: 'Buy Earphone for brother from amazon',
    price: '845 Rs',
    date: '24/06/2023 - 1:12PM',
  },
  {
    id: 7,
    tag: 'Broadband',
    title: 'Mobile Recharge',
    description: 'Mobile Recharge',
    price: '181 Rs',
    date: '25/06/2023 - 9:48AM',
  },
  {
    id: 8,
    tag: 'Payment',
    title: 'Phone pay',
    description: 'Send 1000 Rupee to Arshad',
    price: '1000 Rs',
    date: '26/06/2023 - 11:10AM',
  },
  {
    id: 9,
    tag: 'Bill',
    title: 'Electricity Bill',
    description: 'Pay house electricity bill (BSES Yamuna)',
    price: '1713 Rs',
    date: '26/06/2023 - 4:07PM',
  },
  {
    id: 10,
    tag: 'Rent',
    title: 'House Rent',
    description: 'House rent payment to the owner, okhla',
    price: '8000 Rs',
    date: '27/06/2023 - 10:48AM',
  },
  {
    id: 11,
    tag: 'Doctor',
    title: 'Visit Dermatologist',
    description:
      'Appointment with Dermatologist for skin(pimple) problem in Mothery Dairy.',
    price: '300 Rs',
    date: '28/06/2023 - 6:16PM',
  },
  {
    id: 12,
    tag: 'Medicines',
    title: 'Skin Medicine',
    description: 'Skin Medicine after talk with the dermatologist.',
    price: '2100 Rs',
    date: '28/06/2023 - 6:20PM',
  },
];

const tagImages = {
  Clothing: require('../../asset/clothing.png'),
  Shoes: require('../../asset/shoes.png'),
  Food: require('../../asset/food.png'),
  Travel: require('../../asset/travel.png'),
  Electronics: require('../../asset/electronics.png'),
  Broadband: require('../../asset/broadband.png'),
  Payment: require('../../asset/payment.png'),
  Bill: require('../../asset/bill.png'),
  Rent: require('../../asset/rent.png'),
  Doctor: require('../../asset/doctor.png'),
  Medicines: require('../../asset/medicine.png'),
};

const RecentTransaction = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 19, color: '#000', fontWeight: 500}}>
        Recent Transactions
      </Text>

      <View style={{marginTop: 10, marginBottom: 110, flexGrow: 1}}>
        <FlatList
          data={transaction}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{gap: 15, flexGrow: 1}}
          inverted
          renderItem={({item}) => (
            <Pressable
              style={styles.itemContainer}
              onPress={() => console.log(item)}>
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
                <Text style={{color: '#26172a', fontSize: 16}}>
                  {item.title}
                </Text>
                <Text style={{color: '#aaafb5', fontSize: 15}}>{item.tag}</Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text style={{color: '#26172a', fontSize: 14}}>
                  {item.price}
                </Text>
                <Text style={{color: '#aaafb5', fontSize: 13}}>
                  {item.date}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
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
});
