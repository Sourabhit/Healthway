import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import HomePage from '../../HomePage';
import Couses from '../../Couses';
import Equipments from './Equipments';
import Profile from './Profile';

const BottomNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: '#045BAA',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#82CBC4',
        },
      }}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarIcon: ({tintColor}) => (
            <Icon name="home" size={20} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Couses"
        component={Couses}
        options={{
          tabBarIcon: ({tintColor}) => (
            <Icon name="book" size={20} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Equipments"
        component={Equipments}
        options={{
          tabBarIcon: ({tintColor}) => (
            <Icon name="skyatlas" size={20} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({tintColor}) => (
            <Icon name="street-view" size={20} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
