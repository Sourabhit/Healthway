import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OpacityButton from '../OpacityButton';

const Profile = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#045BAA',
          height: 70,
          width: '100%',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
          }}>
          Profile
        </Text>
      </View>
      <View style={{flexDirection: 'row', margin: 5}}>
        <Image
          style={{height: 80, width: 80, margin: 10, borderRadius: 50}}
          source={require('../../../assets/Ideas.jpg')}
        />
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            color: 'black',
          }}>
          Sourabh Jaiswal
        </Text>
      </View>
      <OpacityButton title={'Menu profile'} icons={'user'} />
      <OpacityButton title={'Courses'} icons={'book'} />
      <OpacityButton title={'Equipments'} icons={'steam'} />
      <OpacityButton title={'Videos'} icons={'pause-circle-o'} />
      <OpacityButton title={'Blog'} icons={'eercast'} />
      <OpacityButton title={'Contact Name'} icons={'address-book-o'} />
    </View>
  );
};

export default Profile;
