import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, Text} from 'react-native';

// screens
import Home from '../screens/Home';
import Transaction from '../screens/Transaction';
import Add from '../screens/Add';
import Stats from '../screens/Stats';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.navigator,
        },
      }}
      // activeColor="#42224a"
      // inactiveColor="#92959b"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon
                name={'home-sharp'}
                color={focused ? '#42224a' : '#748c94'}
                size={26}
              />
              <Text
                style={{color: focused ? '#42224a' : '#748c94', fontSize: 12}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon
                name={'wallet'}
                color={focused ? '#42224a' : '#748c94'}
                size={26}
              />
              <Text
                style={{color: focused ? '#42224a' : '#748c94', fontSize: 12}}>
                Transaction
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name={'add-circle'}
                color={focused ? '#42224a' : '#748c94'}
                size={56}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon
                name={'bar-chart'}
                color={focused ? '#42224a' : '#748c94'}
                size={26}
              />
              <Text
                style={{color: focused ? '#42224a' : '#748c94', fontSize: 12}}>
                Stats
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon
                name={'person-sharp'}
                color={focused ? '#42224a' : '#748c94'}
                size={26}
              />
              <Text
                style={{color: focused ? '#42224a' : '#748c94', fontSize: 12}}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  navigator: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    right: 12,
    backgroundColor: '#eaeef2',
    borderRadius: 10,
    height: 70,
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 5,
  },
});
