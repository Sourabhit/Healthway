import {Image, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1}}>
      <Image
        style={{width: '100%', height: '100%'}}
        source={require('../assets/Splash.png')}
      />
    </View>
  );
};

export default Splash;
