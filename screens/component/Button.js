import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({title, navigation, onPress}) => {
  return (
    <LinearGradient
      colors={['#81CFC2', '#88BBD1', '#89B2D8']}
      style={{
        justifyContent: 'center',

        height: 50,
        width: 315,
        margin: 10,
        borderRadius: 20,
        marginHorizontal: 20,
        marginTop: 20,
      }}>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            margin: 10,
            fontSize: 15,
            color: '#fff',
            fontWeight: '900',
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Button;
