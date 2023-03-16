import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const OpacityButton = ({title, icons}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 335,
          borderWidth: 1,
          borderRadius: 10,
          margin: 7,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Icon name={icons} color={'#000'} size={20} margin={15} />
          <Text
            style={{
              flex: 1,
              margin: 10,
              fontSize: 18,
              fontWeight: '800',
              color: 'black',
            }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OpacityButton;

const styles = StyleSheet.create({});
