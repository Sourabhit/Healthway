import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import Button from './component/Button';

const LoginScreen = ({navigation}) => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}
      source={require('../assets/background.png')}>
      <Image
        style={{
          width: 349,
          height: 157,
        }}
        source={require('../assets/prev.png')}
      />
      <Text
        style={{
          fontSize: 50,
          textAlign: 'center',
          fontWeight: '700',
          color: 'black',
        }}>
        Login As
      </Text>
      <Button
        onPress={() => navigation.navigate('LoginForm')}
        title={'STUDENT'}
      />
      <Button
        onPress={() => navigation.navigate('LoginForm')}
        title={'PROFESSOR'}
      />
    </ImageBackground>
  );
};

export default LoginScreen;
