import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import Button from './component/Button';
import TextButton from './component/TextButton';

const LoginForm = ({navigation}) => {
  return (
    <View>
      <Image
        style={{
          width: 255,
          height: 115,
          alignSelf: 'center',
          marginTop: 50,
        }}
        source={require('../assets/prev.png')}
      />
      <Text
        style={{
          color: 'black',
          fontSize: 22,
          fontWeight: '700',
          textAlign: 'center',
          margin: 10,
        }}>
        Hey there
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 15,
          fontWeight: '700',
          textAlign: 'center',
          margin: 10,
        }}>
        Welcome Back
      </Text>
      <TextButton placeholder={' Email'} />
      <TextButton placeholder={' Password'} />
      <Text style={{textAlign: 'right', margin: 20, color: '#ADA4A5'}}>
        Forgote password
      </Text>
      <Button
        title={'Login'}
        onPress={() => navigation.navigate('BottomNav')}
      />
      <Text style={{textAlign: 'center', margin: 20}}>
        Don’t have an account? SIGN UP
      </Text>
    </View>
  );
};

export default LoginForm;
