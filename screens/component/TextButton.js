import {View, TextInput, useWindowDimensions} from 'react-native';
import React from 'react';

const TextButton = ({placeholder}) => {
  const Dimensiotn = useWindowDimensions();
  return (
    <View>
      <TextInput
        style={{
          borderRadius: 20,
          borderWidth: 1,
          margin: 15,
          width: Dimensiotn.width - 40,
          height: 48,
          paddingLeft: 30,
          color: '#767680',
        }}
        placeholder={placeholder}
      />
    </View>
  );
};

export default TextButton;
